const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:false
    },
    role: {
        type: String,
        default: "volunteer",
        enum: ['donor', 'volunteer','acceptor']
    },
    location: {
        type: { type: String, required: true }, // Specify the type as GeoJSON
        coordinates: [] // Specify the field as an array of numbers
    },
    available: {
        type: Boolean,
        default: true,
    }
}, { timestamps: true });
// Create a geospatial index for the location field
volunteerSchema.index({ location: "2dsphere" });

module.exports = mongoose.model('volunteer', volunteerSchema)