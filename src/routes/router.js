const mainRoute = require("./main/main");
const signUpRoute = require("./users/sign-up-route");
const handleProductsRoute = require("./products/get-products-route");

const router = {
  "/signup": signUpRoute,
  "/products": handleProductsRoute,
  default: mainRoute
};

module.exports = router;
