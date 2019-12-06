const productsRoute = require("./get-products-route");

const handleProductsRoute = (request, response) => {
  const reqMethod = request.method;
  // console.log(request.method, "------Method");

  if (reqMethod === "GET") {
    // console.log(request.url, "handler");
    productsRoute(request, response);
    return;
  }

  // if (reqMethod === "POST") {
  //   createProduct(request, response);
  // }
};

module.exports = handleProductsRoute;
