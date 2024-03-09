const volunteers = require("../models/volunteerModel");
const ErrorHandler = require("../utils/ErrorHandler");
const jwtToken = require("../utils/jwtToken");
const Food = require("../models/foodModel");
const getCoordsForAddress = require("../utils/location");



function volunteerController() {

    return {
        async updatevolunteer(req, res, next) {
            try {
                const { volunteerId } = req.volunteer._id; // Assuming you have the volunteerId as a parameter in your route
                const { name, phone, city, address, zip } = req.body;
        
                // Find the volunteer by ID
                const volunteer = await volunteers.findById(volunteerId);
        
                if (!volunteer) {
                    return next(new ErrorHandler("volunteer not found", 404));
                }
        
                // Update volunteer properties
                if (name) volunteer.name = name;
                // if (password) volunteer.password = password;
                if (phone) volunteer.phone = phone;
                if (city) volunteer.city = city;
                if (address) volunteer.address = address;
                if (zip) volunteer.zip = zip;
        
                // Save the updated volunteer
                await volunteer.save();
        
            } catch (error) {
                next(error);
            }
        },
        
        async getvolunteerFood(req, res, next) {
            try {
                const volunteerId = req.volunteer._id; // Assuming you have the volunteerId as a parameter in your route
        
                // Find the food items for the specified volunteer
                const volunteerFoods = await Food.find({ volunteerId });
                const newFood = volunteerFoods.map(food => getImg(food));
                if (!volunteerFoods || volunteerFoods.length === 0) {
                    return res.status(404).json({ success: false, message: "No food items found for the volunteer" });
                }
        
                res.status(200).json(newFood);
        
            } catch (error) {
                next(error);
            }
        },

        async registervolunteer(req, res, next) {
            try {

                let { name, phone, address } = req.body;
                let locationCoordinates;
                try { locationCoordinates = await getCoordsForAddress(address); } catch (err) { return next(err) }

                const volunteer = new volunteers({
                    name,
                    phone,
                    address,
                    role: "volunteer",
                    location: {
                        type: "Point",
                        coordinates: [locationCoordinates.lng, locationCoordinates.lat]
                    },
                });

                await volunteer.save();
                res.status(200).json(volunteer)

            } catch (error) {
                next(error)
            }
        },


        // used by the logged in volunteer to get its own details
        async getvolunteerDetails(req, res, next) {
            try {
                let volunteer = await volunteers.findById(req.volunteer._id);
                res.status(200).json({ success: true, volunteer })
            } catch (error) {
                next(error)
            }
        },


        // can be used by admin to fetch all volunteers in database
        async getAllvolunteers(req, res, next) {
            try {
                let volunteer = await volunteers.find({});
                return res.status(200).json({ success: true, volunteer })
            } catch (error) {
                next(error)
            }

        },
        async getAllVolunteers(req, res, next) {
            try {
                let volunteer = await volunteers.find({ role: 'volunteer' });
                return res.status(200).json({ success: true, volunteer })
            } catch (error) {
                next(error)
            }

        },

        //fetches data of single volunteer based on id
        async getSinglevolunteer(req, res, next) {
            try {
                let volunteer = await volunteers.findById(req.params.id);
                if (!volunteer) {
                    next(new ErrorHandler("volunteer not found", 404))
                    return;
                }

                return res.status(200).json(volunteer)

            } catch (error) {
                next(error)
            }


        },


        async deletevolunteer(req, res, next) {
            try {
                let volunteer = await volunteers.findByIdAndDelete(req.params.id);
                if (!volunteer) {
                    next(new ErrorHandler("volunteer has not been found ", 400))
                }
                return res.status(200).json({ success: true, message: "volunteer has been deleted" })
            } catch (error) {
                next(error)
            }

        },
        async updateRole(req, res, next) {
            try {
                const { volunteerId } = req.volunteer._id; // Assuming you have the volunteerId as a parameter in your route
                const { role } = req.body;
        
                // Find the volunteer by ID
                const volunteer = await volunteers.findById(volunteerId);
        
                if (!volunteer) {
                    return next(new ErrorHandler("volunteer not found", 404));
                }
        
                // Update volunteer properties
                if (role) volunteer.role = role;
        
                // Save the updated volunteer
                await volunteer.save();
        
                res.status(200).json(volunteer)
        
            } catch (error) {
                next(error);
            }
        },
        async nearestVolunteer(req, res, next) {
            try {
                const { accepterLatitude, accepterLongitude } = req.body;
                const nearVolunteer = await volunteers.aggregate([
                    {

                        $geoNear: {
                            near: { type: "Point", coordinates: [parseFloat(accepterLongitude), parseFloat(accepterLatitude)] },
                            key: "location",
                            maxDistance: parseFloat(1000) * 1609,
                            distanceField: "dist.calculated",
                            spherical: true

                        }
                    }
                ])

                res.status(200).json(nearVolunteer)
            } catch (error) {
                res.status(400).json({
                    sucess: false,
                    message: error.message
                })
            }
        }





    };
}

module.exports = volunteerController;
