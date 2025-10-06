const express = require("express");
const router = express.Router();
const { placeOrder } = require("../services/order");

// route to add an order
router.get("/add-order/:name", (req, res) => {
    const { name } = req.params;

    const order = placeOrder(name);

    res.json({ message: order });
});

module.exports = router;
