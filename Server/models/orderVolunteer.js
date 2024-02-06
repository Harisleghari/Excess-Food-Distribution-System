
// star Number
// demand String
// user_id mongoose.Schema.Types.ObjectId
// acceptor_id mongoose.Schema.Types.ObjectId
// accepted Boolean default null
// cancelled Boolean default false

const mongoose = require("mongoose");

const orderVolunteer = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,  
        required: true,
    },
    acceptor_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    demand: {
        type: String,
        required: true,
    },
    accepted: {
        type: Boolean,
        default: null,
    },
    cancelled: {
        type: Boolean,
        default: false,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    star: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    }
},
    { timestamps: true });
module.exports = mongoose.model("orderVolunteer", orderVolunteer)