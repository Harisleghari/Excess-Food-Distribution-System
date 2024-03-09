const ErrorHandler = require("../utils/ErrorHandler");
const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");

async function fetchTokenId(req, res, next) {
    
    
    
    // const authHeader = req.header("Authorization");
    const head = req.headers;
    if (!head) {
      return next(new ErrorHandler("Please login first", 401));
    }

    let token = head.authorization;
    console.log(token);
    token = token.split(" ");
    token = token[1]
    // Check if the Authorization header has the correct format
    // const authHeaderParts = authHeader.split(" ");
    // if (head.length !== 2 || head[0] !== "Bearer") {
    //   return next(new ErrorHandler("Please login first", 401));
    // }
    // const token  = authHeaderParts[1];
    if (!token) {
        return next(new ErrorHandler("Please login first", 401));
    }
    console.log(token)

    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    if (!payload) {
        return next(new ErrorHandler("invalid token", 401));
    }
    console.log(payload)
    return payload;
}

exports.isAuthenticated = async (req, res, next) => {
    try {
        let payload = await fetchTokenId(req, res, next);

        if (!payload) {
            return;
        }

        let { id } = payload;
        console.log("i am the users id", id)

        const user = await Users.findById(id);
        console.log("i am the users", user)
        if (!user) {
            next(new ErrorHandler("User does not exits", 401));
            return;
        }

        req.user = user;

        next();
    } catch (error) {
        next(error);
    }
};

exports.isAdmin = async (req, res, next) => {
    if (req.user?.role == "admin") {
        next();
    } else {
        next(new ErrorHandler("only accessiable by admin", 401));
        return;
    }
}
