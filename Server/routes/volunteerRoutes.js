const express = require("express");
const volunteerRouter = express.Router();
const volunteerController = require("../controllers/volunteerController");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

volunteerRouter.put("/update/:volunteerId", isAuthenticated, volunteerController().updatevolunteer);
volunteerRouter.put("/updaterole/:volunteerId", isAuthenticated, volunteerController().updateRole);
volunteerRouter.post("/register", volunteerController().registervolunteer);
volunteerRouter.delete("/deletevolunteer/:id", isAuthenticated, volunteerController().deletevolunteer);
volunteerRouter.get("/getvolunteer", volunteerController().getAllVolunteers);
volunteerRouter.get("/me", isAuthenticated, volunteerController().getvolunteerDetails);
volunteerRouter.get("/", volunteerController().getAllvolunteers);
volunteerRouter.get("/:id", volunteerController().getSinglevolunteer);
volunteerRouter.post("/nearestVolunteer", volunteerController().nearestVolunteer);

module.exports = volunteerRouter;