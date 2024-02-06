const order = require('../models/orderVolunteer');

function orderController() {
    return{
        async makeRequest(req, res) {
            try {
                const orderData = {
                    acceptor_id: req.user._id,
                    demand: req.body.demand,
                    user_id: req.body.user_id,
                }

                const newOrder = new order(orderData);
                newOrder.save();
                res.status(201).json(newOrder);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        },

        async getOrders(req, res) {
            try {
                if (req.user.role === 'volunteer') {
                    const orders = await order.find({user_id: req.user._id});
                    res.status(200).json(orders);
                    return;
                }
                const orders = await order.find({acceptor_id: req.user._id});
                res.status(200).json(orders);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        },
        async acceptOrder(req, res) {

            try {
                if (req.user.role === 'volunteer') {
                const order = await order.findById(req.params.id);
                if (!order) {
                    res.status(404).json({ error: 'Order not found' });
                    return;
                }
                if (order.cancelled) {
                    res.status(404).json({ error: 'Order is cancelled' });
                    return;
                }
                if(order.completed){
                    res.status(404).json({ error: 'Order is completed' });
                    return;
                }
                const {accepted} = req.body;
                order.accepted = accepted;
                await order.save();
                res.status(200).json(order);
            }

            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        },
        async completeOrder(req, res) {
            try {
                if (req.user.role === 'volunteer') {
                const order = await order.findById(req.params.id);
                if (!order) {
                    res.status(404).json({ error: 'Order not found' });
                    return;
                }
                if (order.cancelled) {
                    res.status(404).json({ error: 'Order is cancelled' });
                    return;
                }
                if (!order.accepted) {
                    res.status(404).json({ error: 'Order is not accepted' });
                    return;
                }
                const {completed} = req.body;
                order.completed = completed;
                await order.save();
                res.status(200).json(order);
                }

            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        },
        async cancelOrder(req, res) {
            try {
                if (req.user.role === 'volunteer') {
                const order = await order.findById(req.params.id);
                if (!order) {
                    res.status(404).json({ error: 'Order not found' });
                    return;
                }
                if (order.completed) {
                    res.status(404).json({ error: 'Order is completed' });
                    return;
                }
                const {cancelled} = req.body;
                order.cancelled = cancelled;
                order.accepted = cancelled ? false : order.accepted;
                await order.save();
                res.status(200).json(order);
            }
                    
                }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
            },
        async rateOrder(req, res) {
            try {
                const order = await order.findById(req.params.id);
                if (!order) {
                    res.status(404).json({ error: 'Order not found' });
                    return;
                }
                if (order.cancelled) {
                    res.status(404).json({ error: 'Order is cancelled' });
                    return;
                    
                }
                if (!order.accepted) {
                    res.status(404).json({ error: 'Order is not accepted' });
                    return;
                }
                if (!order.completed) {
                    res.status(404).json({ error: 'Order is not completed' });
                    return;
                }
                const {stars} = req.body;
                order.stars = stars;
                await order.save();
                res.status(200).json(order);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        },

        }
    }

    

module.exports = orderController