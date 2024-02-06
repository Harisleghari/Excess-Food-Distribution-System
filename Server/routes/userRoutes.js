const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

userRouter.get("/resetPassword/:token", userController().resetPassword);
userRouter.get("/logout", isAuthenticated, userController().logoutUser);
userRouter.get("/getFoods", isAuthenticated, userController().getUserFood);
userRouter.put("/update/:userId", isAuthenticated, userController().updateUser);
userRouter.post("/register", userController().registerUser);
userRouter.post("/login", userController().loginUser);
userRouter.post("/forgotPassword", userController().forgotPassword);
userRouter.put("/updatePassword", isAuthenticated, userController().updatePassword);
userRouter.delete("/deleteUser/:id", isAdmin, userController().deleteUser);
userRouter.get("/getvolunteer", userController().getAllVolunteers);
userRouter.get("/me", isAuthenticated, userController().getUserDetails);
userRouter.get("/", userController().getAllUsers);
userRouter.get("/:id", userController().getSingleUser);

module.exports = userRouter;
