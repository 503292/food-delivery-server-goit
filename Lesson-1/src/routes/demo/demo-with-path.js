const path = require("path");

const customProductsPath = "../../db/products/all-products.json";

const nameFile = "all-products.json";

const productsPath = path.win32.join(
  __dirname,
  "..",
  "..",
  "db",
  "products",
  nameFile
);

console.log(productsPath);
