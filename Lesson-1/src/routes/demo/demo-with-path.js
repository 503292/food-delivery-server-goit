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

// { root: 'E:\\',
//   dir:
//    'E:\\NodeJS-GOIT\\food-delivery-server-goit\\Lesson-1\\src\\db\\products',
//   base: 'all-products.json',
//   ext: '.json',
//   name: 'all-products' }
// console.log(path.parse(productsPath));

// create newPath
const newProductsPath = path.format({
  root: "E:\\",
  dir: __dirname,
  ext: ".txt",
  name: Date.now()
});

console.log(newProductsPath);
