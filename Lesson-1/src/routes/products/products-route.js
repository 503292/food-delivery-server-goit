const fs = require("fs");
const path = require("path");

const productsRoute = (request, response) => {
  let filePath = path.join(
    __dirname,
    "../../",
    "db",
    "products",
    "all-products.json"
  );

  const allProducts = fs.readFileSync(filePath, "utf8");

  response.writeHead(200, {
    "Content-Type": "application/json"
  });

  const file = JSON.parse(allProducts);

  response.end(
    JSON.stringify({
      products: file
    })
  );
};

module.exports = productsRoute;
