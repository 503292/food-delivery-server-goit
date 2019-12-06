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

  // console.log(request.url, "тут");

  const id = getId(request.url);

  // TODO if else => for query url

  response.setHeader("Content-Type", "application/json");
  response.writeHead(200);

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

  const file = JSON.parse(allProducts);

  response.end(JSON.stringify({ products: file }));
  return;
};

module.exports = productsRoute;
