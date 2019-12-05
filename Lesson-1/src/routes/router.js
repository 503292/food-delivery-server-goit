const mainRoute = require("./main/main");
const signUpRoute = require("./users/sign-up-route");
// const productsRoute = require("./products/products-route");
const handleProductsRoute = require("./products/handle-products-route");

const router = {
  "/signup": signUpRoute,
  // "/products": productsRoute,
  "/products": handleProductsRoute,
  // "/products/add-order": handleProductsRoute,
  default: mainRoute
};

module.exports = router;
