const express = require("express");
const foodRouter = express.Router();
const foodController = require("../controllers/foodController");
const { isAuthenticated } = require("../middlewares/auth");
const multer = require("multer");

// Multer configuration for handling image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

foodRouter.post("/create", isAuthenticated, upload.single('image'), foodController().createFood);
foodRouter.get("/", foodController().getFood);
foodRouter.get("/:id", foodController().getFoodById);
foodRouter.put("/update/:id", isAuthenticated, upload.single('image'), foodController().updateFood);
foodRouter.delete("/delete/:id", isAuthenticated, foodController().deleteFood);
foodRouter.post("/setAvailability/:id", isAuthenticated, foodController().setAvailable);
foodRouter.post("/rate/:id", isAuthenticated, foodController().rateFood);
foodRouter.post("/uploadImage", isAuthenticated, upload.single('image'), foodController().uploadImage);

module.exports = foodRouter;
