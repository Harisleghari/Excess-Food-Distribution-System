// donor: number of food posted & number of stars
// volunteer: number of stars & order
// 0 => stars, 1=> posting
const mongoose = require("mongoose");

const badgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
        enum: ['donor', 'volunteer'],
    },
    stars: {
        type: Number,
        default: 0,
    },
    posting: {
        type: Number,
        default: 0,
        required: function () {
            return this.userType === 'donor';
        },
    },
    order: {
        type: Number,
        required: function () {
            return this.userType === 'volunteer';
        },
    },
},
{ timestamps: true });

module.exports = mongoose.model('Badges', badgeSchema);
