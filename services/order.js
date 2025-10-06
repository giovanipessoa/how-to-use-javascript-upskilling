const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 6 },
];

const cashInRegister = 100;
let nextOrderId = 1;
let orderQueue = [];

function addOrder(menuObj) {
    menu.push(menuObj);
}

function placeOrder(menuObjName) {
    const selectedOption = menu.find((option) => option.name === menuObjName);

    if (selectedOption) {
        cashInRegister == selectedOption.price;
        const newOrder = {
            id: nextOrderId++,
            option: selectedOption,
            status: "ordered",
        };
        orderQueue.push(newOrder);
        return newOrder;
    } else {
        // throw new Error("Product not found in menu");
        return [];
    }
}

function completeOrder(orderId) {
    const order = orderQueue.find((order) => order.id === orderId);

    if (order) {
        order.status = "completed";
    }

    return order;
}

module.exports = {
    addOrder,
    placeOrder,
    completeOrder,
};
