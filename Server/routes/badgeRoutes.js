const express = require("express");
const badgeRouter = express.Router();
const { isAuthenticated } = require("../middlewares/auth");

const badgeController = require("../controllers/badgesController");

badgeRouter.get("/getBadges", isAuthenticated, badgeController().getBadges);
badgeRouter.get("/getdemodata",  badgeController().addDemoData);
badgeRouter.get("/deleteAllData",  badgeController().deleteAllData);

module.exports = badgeRouter;
