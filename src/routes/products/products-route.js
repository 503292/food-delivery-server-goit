const fs = require("fs");
const path = require("path");

const productsRoute = (request, response) => {
  let reqPath = path.join(
    __dirname,
    "../../",
    "db",
    "products",
    "all-products.json"
  );

  fs.readFile(reqPath, "utf8", function(error, data) {
    if (!error) {
      const jsonObj = JSON.parse(data); // Parse Data to JSON
      console.log(jsonObj);
      response.end(data); //Send back as Response
    } else {
      response.end("Error: " + error); //Handle Error
    }
  });
};

module.exports = productsRoute;
