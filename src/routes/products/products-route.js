const fs = require("fs");
const path = require("path");

// асинхронное чтение
const productsRoute = (request, response) => {
  let reqPath = path.join(__dirname, "../../db/products/all-products.json");
  let fileReaded = fs.readFile(`${reqPath}`, "utf8", function(error, data) {
    console.log("Асинхронное чтение файла");
    if (error) throw error;
    console.log(data);
  });
};

module.exports = productsRoute;
