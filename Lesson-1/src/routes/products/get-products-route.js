const fs = require("fs");
const path = require("path");
const url = require("url");

const getId = url => {
  const lastIndex = url.lastIndexOf("/");

  if (lastIndex !== -1) {
    return url.slice(lastIndex + 1);
  }
};

const getOneProductById = id => {
  // TODO
  return;
};
const getProductsByIds = ids => {
  // TODO
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

  const id = getId(request.url);

  response.setHeader("Content-Type", "application/json");
  response.writeHead(200);

  //route for /products/123123123 id
  if (id >= 0) {
    const parseProducts = JSON.parse(allProducts);

    const resultById = parseProducts.find(prod => prod.id == id);
    if (resultById === undefined) {
      response.end(JSON.stringify({ status: "no products", products: [] }));
      return;
    }

    response.end(JSON.stringify({ status: "success", products: resultById }));
    return;
  }

  //route for /products
  const file = JSON.parse(allProducts);

  response.end(JSON.stringify({ products: file }));
  return;
};

module.exports = productsRoute;
