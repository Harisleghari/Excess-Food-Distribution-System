const mongoose = require("mongoose");
const toBase64 = require('../utils/toBase64')

const foodSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    pickup: {
        type: String,
        required: true,
    },
    food: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    prefTime: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    location: {
        type: { type: String, required: true }, // Specify the type as GeoJSON
        coordinates: [] // Specify the field as an array of numbers
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
    stars: {
        type: Number,
        default: 0,
        max: 5,
        min: 0
    },
    phone: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
// Create a geospatial index for the location field
foodSchema.index({ location: "2dsphere" });
// Virtual property to convert image to base64
foodSchema.virtual('imageBase64').get(function () {
    if (this.image && this.image.data && this.image.contentType) {
        return `data:${this.image.contentType};base64,${this.image.data.toString('base64')}`;
    }
    return null;
});

module.exports = mongoose.model('Food', foodSchema);
