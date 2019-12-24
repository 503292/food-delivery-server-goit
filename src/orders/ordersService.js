const fs = require("fs");
const path = require("path");
const { productsPath } = require("../products/productsService");
const { usersPath } = require("../users/usersController");

const ordersPath = path.join(__dirname, "..", "db", "all-orders.json");

module.exports = {
  postOrder: order => {
    console.log(order);
    try {
      return new Promise((res, rej) => {
        fs.readFile(productsPath, "utf8", (productsErr, productsData) => {
          if (productsErr) rej(productsErr);
          fs.readFile(usersPath, "utf8", (usersErr, usersData) => {
            if (usersErr) rej(usersErr);
            fs.readFile(ordersPath, "utf8", (ordersErr, ordersData) => {
              if (ordersErr) rej(ordersErr);
              const ordersArr = ordersData ? JSON.parse(ordersData) : [];
              const productsArr = JSON.parse(productsData);
              const usersArr = JSON.parse(usersData);
              const isValidUser = usersArr.find(el => el.id === order.user);
              const avaiableProducts = productsArr.filter(el =>
                order.products.includes(el.id)
              );

              if (avaiableProducts.length && isValidUser) {
                order.products = avaiableProducts;
                ordersArr.push(order);
                return fs.writeFile(
                  ordersPath,
                  JSON.stringify(ordersArr),
                  err => {
                    if (err) rej(err);
                    res({ message: "success", order });
                  }
                );
              }

              res({
                message: !avaiableProducts.length
                  ? "no products avaiable"
                  : "user is not valid",
                order: null
              });
            });
          });
        });
      });
    } catch (e) {
      throw new Error("Error while creating order: ", e);
    }
  }
};
