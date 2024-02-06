const express = require("express");
const badgeRouter = express.Router();
const { isAuthenticated } = require("../middlewares/auth");

const orderController = require("../controllers/orderController");  

badgeRouter.post("/makeRequest", isAuthenticated, orderController().makeRequest);
badgeRouter.get("/getOrders", isAuthenticated, orderController().getOrders);
badgeRouter.post("/acceptOrder", isAuthenticated, orderController().acceptOrder);
badgeRouter.post("/cancelOrder", isAuthenticated, orderController().cancelOrder);
badgeRouter.post("/completeOrder", isAuthenticated, orderController().completeOrder);




module.exports = badgeRouter