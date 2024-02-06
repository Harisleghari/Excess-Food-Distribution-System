// badgeController.js

const Badges = require('../models/badgesModel');
const food = require('../models/foodModel');
const order = require('../models/orderVolunteer');

function badgeController() {
    return{
  async addDemoData(req, res)  {
  try {
    const demoData = [];

    // Adding demo data for donors
    for (let i = 1; i <= 24; i++) {
      demoData.push({
        userType: 'donor',
        stars: i*3,
        posting: i * 2, // Assuming a relationship between stars and postings
        name: `Generous Donor ${i}`,
        reward: `Exclusive Badge ${i}`,
      });
    }

    // Adding demo data for volunteers
    for (let i = 1; i <= 24; i++) {
      demoData.push({
        userType: 'volunteer',
        stars: i*3,
        order: i * 2, // Assuming a relationship between stars and orders
        name: `Dedicated Volunteer ${i}`,
        reward: `Service Badge ${i}`,
      });
    }

    const badges = await Badges.create(demoData);
    res.status(201).json(badges);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
,
 async deleteAllData (req, res) {
    try {
      await Badges.deleteMany({});
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async getBadges(req, res) {
    try {
      let count = 0;
      let stars = 0;
      const badges = await Badges.find({userType:req.user.role});
      if (req.user.role === 'donor') {
        const foods = await food.find({userId: req.user._id});
        count = foods.length;
        stars = foods.reduce((total, food) => total + food.stars, 0);
      }
      if (req.user.role === 'volunteer') {
        const orders = await order.find({userId: req.user._id});
        count = orders.length;
        stars = orders.reduce((total, order) => total + order.stars, 0);
      }
      const updatedBadges = badges.map(badge => {
        const cnt = badge.userType === 'donor' ? badge.posting : badge.order;
        const conditionMet = count >=cnt  && stars >= badge.stars;
      
        return {
          ...badge.toObject(),
          enabled: conditionMet ? true : false,
        };
      });
      res.status(200).json(updatedBadges);
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
}

module.exports = badgeController