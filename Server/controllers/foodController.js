const Food = require("../models/foodModel");
const { toInt } = require("validator");
const ErrorHandler = require("../utils/ErrorHandler");
const multer = require("multer");
const getCoordsForAddress = require("../utils/location")

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

function foodController() {
    const getImg = (food) => {
        const foodObject = food.toObject({ virtuals: true });
        if (foodObject.image) {
            foodObject.image = foodObject.imageBase64;
            delete foodObject.imageBase64; // Optional: Remove the imageBase64 property if you don't want it in the response
        }
        return foodObject;
    }
    return {
        async createFood(req, res, next) {
            try {
                const userId = req.user._id;
                const { pickup, food, quantity, prefTime, phone} = req.body;
                let locationCoordinates;
                try { locationCoordinates = await getCoordsForAddress(pickup); } catch (err) { return next(err) }
                const newFood = new Food({
                    userId,
                    pickup,
                    food,
                    quantity,
                    prefTime,
                    location: {
                        type: "Point",
                        coordinates: [locationCoordinates.lng, locationCoordinates.lat]
                    },
                    phone
                });
                // Check if an image is uploaded
                if (req.file) {
                    const { buffer, mimetype } = req.file;
                    newFood.image = {
                        data: buffer,
                        contentType: mimetype,
                    };
                }
                await newFood.save();
                res.status(200).json({ success: true, food: getImg(newFood) });
            } catch (error) {
                next(error);
            }
        },

        async getFood(req, res, next) {
            try {
                const foods = await Food.find();
                const newFood = foods.map(food => getImg(food));
                // res.status(200).json({ success: true, count: foods.length, foods: newFood });
                res.status(200).json(newFood);
            } catch (error) {
                next(error);
            }
        },
        async rateFood(req, res, next) {
            try {
                const { star } = req.body;
                const food = await Food.findById(req.params.id);
                if (!food) {
                    return next(new ErrorHandler("Food not found", 404));
                }
                food.stars = toInt(star);
                await food.save();
                res.status(200).json({ success: true, food: getImg(food) });
            } catch (error) {
                next(error);
            }
        },
        async getFoodById(req, res, next) {
            try {
                const food = await Food.findById(req.params.id);
                if (!food) {
                    return next(new ErrorHandler("Food not found", 404));
                }
                res.status(200).json({ success: true, food: getImg(food) });
            } catch (error) {
                next(error);
            }
        },
        async setAvailable(req, res, next) {
            try {
                const { availbility } = req.body;
                const food = await Food.findById(req.params.id);
                if (!food) {
                    return next(new ErrorHandler("Food not found", 404));
                }
                food.available = availbility ?? false;
                await food.save();
                res.status(200).json({ success: true, food: getImg(food) });
            } catch (error) {
                next(error);
            }
        },

        async updateFood(req, res, next) {
            try {
                const { pickup, food, quantity, prefTime, location } = req.body;
                let foodToUpdate = await Food.findById(req.params.id);

                if (!foodToUpdate) {
                    return next(new ErrorHandler("Food not found", 404));
                }

                foodToUpdate.pickup = pickup;
                foodToUpdate.food = food;
                foodToUpdate.quantity = quantity;
                foodToUpdate.prefTime = prefTime;
                foodToUpdate.location = location;

                // Update image if a new one is provided
                if (req.file) {
                    const { buffer, mimetype } = req.file;
                    foodToUpdate.image = {
                        data: buffer,
                        contentType: mimetype,
                    };
                }

                await foodToUpdate.save();

                res.status(200).json({ success: true, food: getImg(foodToUpdate) });
            } catch (error) {
                next(error);
            }
        },

        async deleteFood(req, res, next) {
            try {
                const foodToDelete = await Food.findByIdAndDelete(req.params.id);
                if (!foodToDelete) {
                    return next(new ErrorHandler("Food not found", 404));
                }
                res.status(200).json({ success: true, message: "Food deleted successfully" });
            } catch (error) {
                next(error);
            }
        },

        // Method to handle image upload using Multer
        uploadImage(req, res, next) {
            upload.single('image')(req, res, (err) => {
                if (err) {
                    return next(new ErrorHandler("Error uploading image", 400));
                }

                if (!req.file) {
                    return next(new ErrorHandler("Please upload an image", 400));
                }

                const { buffer, mimetype } = req.file;
                const image = {
                    data: buffer,
                    contentType: mimetype,
                };

                res.status(200).json({ success: true, image });
            });
        },

        async acceptFood(req, res, next) {
            try {
                const { accepterLatitude, accepterLongitude, radius } = req.body;
                // Convert latitude and longitude to numbers
                let lat = parseFloat(accepterLatitude);
                let lon = parseFloat(accepterLongitude);
                let rad = parseFloat(radius);
                console.log(lat, lon, rad);

                // Query MongoDB to retrieve all donation posts
                // const allFood = await Food.find();
                const foods = await Food.find();
                const newFood = foods.map(food => getImg(food));
                console.log(newFood);
                // Filter donation posts based on distance
                const filteredFood = newFood.filter((post) => {
                    // Calculate distance between accepter's location and post's location using Haversine formula
                    const R = 6371; // Earth's radius in kilometers
                    const dLat = (post.location.lat - lat) * Math.PI / 180;
                    const dLon = (post.location.lng - lon) * Math.PI / 180;
                    const a =
                        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                        Math.cos(lat * Math.PI / 180) * Math.cos(post.location.lat * Math.PI / 180) *
                        Math.sin(dLon / 2) * Math.sin(dLon / 2);
                    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    const distance = R * c;
                    console.log(post.location);

                    // Check if distance is within the specified radius
                    return distance <= rad;
                });

                res.json({
                    message: "FilteredFood",
                    filteredFood
                });
            } catch (err) {
                console.error(err);
                res.status(500).json({ message: 'Internal server error' });
            }
        },
        async nearestFood(req, res, next) {
            try {
                const { accepterLatitude, accepterLongitude } = req.body;

                console.log(accepterLatitude, accepterLongitude)
                const nearFood = await Food.aggregate([
                    {
                        // $geoNear: {
                        //     near: { type: "Point", coordinates: [parseFloat(accepterLongitude), parseFloat(accepterLatitude)] },
                        //     key: "location",
                        //     maxDistance: parseFloat(1000) * 1609,
                        //     distanceField: "dist.calculated",
                        //     spherical: true
                        // }

                        $geoNear: {
                            near: { type: "Point", coordinates: [parseFloat(accepterLongitude), parseFloat(accepterLatitude)] },
                            key: "location",
                            maxDistance: parseFloat(1000) * 1609,
                            distanceField: "dist.calculated",
                            spherical: true

                        }
                    }
                ])

                res.status(200).json(nearFood)
            } catch (error) {
                res.status(400).json({
                    sucess: false,
                    message: error.message
                })
            }
        }
    };
}

module.exports = foodController;
