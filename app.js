// require("dotenv").config();
const express = require("express");
const { createError, errorHandler } = require("./errors");
const app = express();
const port = 3000;
const orderRouter = require("./routes/order");
const errorRouter = require("./routes/error");

// middleware to process json
app.use(express.json());

app.use("/errors", errorRouter);

// middleware to handle errors (must be the last middleware)
app.use(errorHandler);

// route to orders
app.use("/orders", orderRouter);

// start the server
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
