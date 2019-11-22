const url = require("url");
const fs = require("fs");
const path = require("path");

const getId = url => {
  const lastIndex = url.lastIndexOf("/");

  if (lastIndex !== -1) {
    return url.slice(lastIndex + 1);
  }
};

const getProducts = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const id = getId(parsedUrl.path);
  let filePath = path.join(
    __dirname,
    "../../..",
    "data",
    "products",
    "all-products.json"
  );

  const allProducts = fs.readFileSync(filePath, "utf8");

  const parseProducts = JSON.parse(allProducts);

  const resultById = parseProducts.find(prod => prod.id == id);
  if (resultById === undefined) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ status: "no products", products: [] }));
    response.end();
    return;
  }

  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(JSON.stringify({ status: "success", products: resultById }));
  response.end();
};

module.exports = getProducts;

// const url = require("url");

// const getId = url => {
//   const lastIndex = url.lastIndexOf("/");
//   if (lastIndex !== -1) {
//     return url.slice(lastIndex + 1);
//   }
// };

// const getProducts = (request, response) => {
//   const parsedUrl = url.parse(request.url);
//   console.log(parsedUrl);
//   const id = getId(parsedUrl.path);
//   console.log(id, "id");

//   // if (id === 0) {
//   //   console.log("products --->");
//   //   return;
//   // }

//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.write(JSON.stringify({ productid: id }));
//   response.end();
// };

// module.exports = getProducts;
