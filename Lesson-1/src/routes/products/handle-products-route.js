const productsRoute = require("./products-route");
// const createProduct = require("./create-product");

const handleProductsRoute = (request, response) => {
  const reqMethod = request.method;

  if (reqMethod === "GET") {
    // console.log(request);
    productsRoute(request, response);
    return;
  }

  // if (reqMethod === "POST") {
  //   createProduct(request, response);
  // }
};

module.exports = handleProductsRoute;
