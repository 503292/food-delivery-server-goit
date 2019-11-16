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

  let file = JSON.parse(allProducts);

  response.end(
    JSON.stringify({
      products: file
    })
  );

  // const readStream = fs.createReadStream(filePath);

  // readStream.pipe(response);

  // fs.readFile(filePath, "utf8", function(error, data) {
  //   if (!error) {
  //     const jsonObj = JSON.parse(data); // Parse Data to JSON
  //     console.log(jsonObj);
  //     // response.json(data); //Send back as Response
  //   } else {
  //     response.end("Error: " + error); //Handle Error
  //   }
  // });
};

module.exports = productsRoute;
