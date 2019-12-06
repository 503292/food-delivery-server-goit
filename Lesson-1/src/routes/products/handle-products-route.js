const productsRoute = require("./products-route");
// const createProduct = require("./create-product");

const handleProductsRoute = (request, response) => {
  const reqMethod = request.method;
  console.log(reqMethod);

  if (reqMethod === "GET") {
    console.log(request.url, "handler");
    productsRoute(request, response);
    return;
  }

  // if (reqMethod === "POST") {
  //   createProduct(request, response);
  // }
};

module.exports = handleProductsRoute;
