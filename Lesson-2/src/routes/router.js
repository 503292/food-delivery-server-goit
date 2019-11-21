const mainRoute = require("./main/main");
const imageRoute = require("./image/get-image");
const getUser = require("./user/get-user");
const handleProductsRoute = require("./products");
const getProductsById = require("./products/get-products-by-id");

const router = {
  "/me": mainRoute,
  "/image": imageRoute,
  "/users": getUser,
  "/products": handleProductsRoute,
  "./products/:id": getProductsById,
  "/products/add-order": handleProductsRoute,
  default: mainRoute
};

module.exports = router;
