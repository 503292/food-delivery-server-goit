const express = require("express");
const corsMiddleware = require("cors");

const mainRoutes = require("./main/mainRoutes");
const usersRoute = require("./users/usersRoute");
const productsRoute = require("./products/productsRoute");
const ordersRoute = require("./orders/ordersRoute");
const imagesRoute = require("./image/imagesRoute");

const PORT = require("../config");

const app = express();

app.use(express.json());
app.use(corsMiddleware());

app.use("/", mainRoutes);
app.use("/users", usersRoute);
app.use("/products", productsRoute);
app.use("/orders", ordersRoute);
app.use("/images", imagesRoute)

app.use("/*", (req, res, next) => {
  res.status(404).json({ message: "Invalid url" });
});

var server = app.listen(process.env.PORT || PORT, function() {
  console.log("Server up and running in %d ", server.address().port);
});
