const Users = require("../models/userModel");
const ErrorHandler = require("../utils/ErrorHandler");
const jwtToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");


function userController() {
    return {
        async updateUser(req, res, next) {
            try {
                const { userId } = req.user._id; // Assuming you have the userId as a parameter in your route
                const { name, phone, city, address, zip } = req.body;
        
                // Find the user by ID
                const user = await Users.findById(userId);
        
                if (!user) {
                    return next(new ErrorHandler("User not found", 404));
                }
        
                // Update user properties
                if (name) user.name = name;
                // if (password) user.password = password;
                if (phone) user.phone = phone;
                if (city) user.city = city;
                if (address) user.address = address;
                if (zip) user.zip = zip;
        
                // Save the updated user
                await user.save();
        
                // Optionally, you can generate a new JWT token if needed
                jwtToken(user, res, 200);
        
            } catch (error) {
                next(error);
            }
        },
        
        async getUserFood(req, res, next) {
            try {
                const userId = req.user._id; // Assuming you have the userId as a parameter in your route
        
                // Find the food items for the specified user
                const userFoods = await Food.find({ userId });
                if (!userFoods || userFoods.length === 0) {
                    return res.status(404).json({ success: false, message: "No food items found for the user" });
                }
        
                res.status(200).json({success: true, message: userFoods});
        
            } catch (error) {
                next(error);
            }
        },

        async registerUser(req, res, next) {
            try {

                let { email, name, password, phone, city, address, zip, role } = req.body;
                const existingUser = await Users.findOne({ email });

                if (existingUser) {
                return next(new ErrorHandler("Duplicate email Entered", 400));
                }


                const user = new Users({
                    name,
                    email,
                    password,
                    phone,
                    city,
                    address,
                    zip,
                    role
                });

                await user.save();
                jwtToken(user, res, 200)

            } catch (error) {
                next(error)
            }
        },

        async loginUser(req, res, next) {
            try {
                const { email, password } = req.body;
                if (!email, !password) {
                    next(new ErrorHandler("Please fill all fields", 400))
                    return;
                }

                let user = await Users.findOne({ email });
                if (!user) {
                    next(new ErrorHandler("User does not exist", 401));
                    return;
                }

                const passwordMatched = await user.comparePassword(password);
                if (!passwordMatched) {
                    next(new ErrorHandler("Please enter valied email and password"), 401)
                    return;
                }


                jwtToken(user, res, 200)


            } catch (error) {
                next(error);
            }
        },

        async logoutUser(req, res, next) {
            console.log(req.user)
            res.cookie("jwt", null, {
                httpOnly: true,
                expires: new Date(Date.now())
            });
            res.status(200).json({ success: true, message: "Logout Successfull" })
        },

        async forgotPassword(req, res, next) {
            try {
                let user = await Users.findOne({ email: req.body.email });

                if (!user) {
                    return next(new ErrorHandler("User not found ", 404));
                }

                let resetToken = user.getResetPasswordToken();
                console.log(user);
                await user.save({ validateBeforeSave: false });

                let resetUrl = `${req.protocol}://${req.get("host")}/user/resetPassword/${resetToken}`

                let message = `click here to reset your password \n  ${resetUrl} \n if you have not requested this then ignore`

                try {
                    await sendEmail({
                        email: user.email,
                        subject: `Password Recovery`,
                        message: message,
                    })
                    res.status(200).json({ success: true, message: `Email sent to ${req.body.email}` })

                } catch (error) {
                    user.resetPasswordExpire = undefined;
                    user.resetPasswordToken = undefined;
                    await user.save({ validateBeforeSave: false })
                    next(error)
                }

            } catch (error) {

                next(error)
            }
        },

        async resetPassword(req, res, next) {
            //creating hashed token
            const resetPasswordToken = crypto.createHash("sha256")
                .update(req.params.token)
                .digest("hex");

            let user = await Users.findOne({ resetPasswordToken, resetPasswordExpire: { $gte: Date.now() } });


            if (!user) {
                next(new ErrorHandler("Reset Token is invalid or has expired", 400))
                return;
            }

            if (req.body.password != req.body.cPassword) {
                next(new ErrorHandler("Password does not match ", 400))
                return;
            }

            user.password = req.body.password;
            user.resetPasswordExpire = undefined;
            user.resetPasswordToken = undefined;

            await user.save({ validateBeforeSave: false });
            jwtToken(user, res, 200)
        },


        // used by the logged in user to get its own details
        async getUserDetails(req, res, next) {
            try {
                let user = await Users.findById(req.user._id);
                res.status(200).json({ success: true, user })
            } catch (error) {
                next(error)
            }
        },

        async updatePassword(req, res, next) {

            try {
                let user = await Users.findById(req.user._id);

                const passwordMatched = await user.comparePassword(req.body.oldPassword);
                if (!passwordMatched) {
                    next(new ErrorHandler("Please enter valid password"), 401)
                    return;
                }

                if (req.body.password != req.body.cPassword) {
                    next(new ErrorHandler("Passwords do not match"), 401);
                    return;
                }

                user.password = req.body.password;

                await user.save();
                jwtToken(user, res, 200);


            } catch (error) {
                next(error)
            }


        },


        // can be used by admin to fetch all users in database
        async getAllUsers(req, res, next) {
            try {
                let user = await Users.find({});
                return res.status(200).json({ success: true, user })
            } catch (error) {
                next(error)
            }

        },
        async getAllVolunteers(req, res, next) {
            try {
                let user = await Users.find({ role: 'volunteer' });
                return res.status(200).json({ success: true, user })
            } catch (error) {
                next(error)
            }

        },

        //fetches data of single user based on id
        async getSingleUser(req, res, next) {
            try {
                let user = await Users.findById(req.params.id);
                if (!user) {
                    next(new ErrorHandler("User not found", 404))
                    return;
                }

                return res.status(200).json({ success: true, user })

            } catch (error) {
                next(error)
            }


        },


        async deleteUser(req, res, next) {
            try {
                let user = await Users.findByIdAndDelete(req.params.id);
                if (!user) {
                    next(new ErrorHandler("User has not been found ", 400))
                }
                return res.status(200).json({ success: true, message: "user has been deleted" })
            } catch (error) {
                next(error)
            }

        },





    };
}

module.exports = userController;
