const fs = require("fs");
const path = require("path");

const productsRoute = (request, response) => {
  let reqPath = path.join(__dirname, "../../db/products/all-products.json");

  fs.readFile(`${reqPath}`, "utf8", function(error, data) {
    if (!error) {
      console.log("Success" + data);

      const jsonObj = JSON.parse(data); // Parse Data to JSON

      response.end(data); //Send back as Response
    } else {
      response.end("Error: " + error); //Handle Error
    }
  });
};

module.exports = productsRoute;
