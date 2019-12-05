const fs = require("fs");
const path = require("path");

const getOneProductById = id => {
  return;
};
const getProductsByIds = ids => {
  return;
};

const productsRoute = (request, response) => {
  let filePath = path.join(
    __dirname,
    "../../",
    "db",
    "products",
    "all-products.json"
  );

  const allProducts = fs.readFileSync(filePath, "utf8");

  console.log(request.url, "requestddddddddddddddddddddddddddddd");

  response.writeHead(200, {
    "Content-Type": "application/json"
  });

  let file = JSON.parse(allProducts);

  response.end(
    JSON.stringify({
      products: file
    })
  );
};

module.exports = productsRoute;
