const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config();
const MONGODB_URL = process.env.MONGODB_URL;

const userRouter = require("./src/routes/user.route");
const productRouter = require("./src/routes/products.route");
const categoryRouter = require("./src/routes/categories.route");
const wishlistRouter = require("./src/routes/wishlist.route");
const cartRouter = require("./src/routes/cart.route");
const orderRouter = require("./src/routes/orders.routes");

const app = express();
app.use(cors({origin:"*", credentials: true}))
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/wishlists", wishlistRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);

mongoose.connect(MONGODB_URL)
.then(() => {
    console.log("Database connected successfully");
})
.catch((err) => {
    console.log("Error while connected to database");
});

app.listen( 8000, () => {
    console.log("server connected to listen on port:8000");
});