const fs = require("fs");

const productToAdd = [
  {
    id: 191128311,
    sku: 1120001,
    name: "Rом",
    description: "cha cha cha",
    price: "123",
    currency: "UAN",
    creatorId: 1,
    created: "21-08-2018",
    modified: "21-08-2018",
    categories: ["drink"]
  },
  {
    id: 191128321,
    sku: 1120002,
    name: "Visky",
    description: "macarena",
    price: "234",
    currency: "UAN",
    creatorId: 1,
    created: "21-08-2018",
    modified: "21-08-2018",
    categories: ["drink"]
  }
];

const productPath = "../../db/products/all-products.json";
// const newProductPath = "../../db/products/new-all-products.json";
const newProductPath2 = "../../dbTEMP/replace-products.json";

// read and write file
// fs.readFile(productPath, "utf8", (err, data) => {
//   const products = JSON.parse(data);

//   const newProducts = [...products, ...productToAdd];

//   fs.writeFile(newProductPath, JSON.stringify(newProducts), err => {
//     console.log("Done!");
//   });
// });

// delete file
// fs.unlink(newProductPath, () => {
//   console.log("delete DONE!");
// });

//  replace file
fs.rename(productPath, newProductPath2, () => {
  console.log("replace DONE!");
});