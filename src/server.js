const express = require("express");
const corsMiddleware = require("cors");

const mainRoutes = require("./main/mainRoutes");
const usersRoutes = require("./users/usersRoutes");
const productsRoutes = require("./products/productsRouter");

const PORT = require("../config");

const app = express();

app.use(express.json());
app.use(corsMiddleware());

app.use("/", mainRoutes);
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);

app.use("/*", (req, res, next) => {
  res.status(404).json({ message: "Invalid url" });
});

var server = app.listen(process.env.PORT || PORT, function() {
  console.log("Server up and running in %d ", server.address().port);
});
