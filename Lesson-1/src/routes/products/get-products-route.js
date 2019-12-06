const fs = require("fs");
const path = require("path");

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
  console.log(request, "lllllllllllllllllllll");
  // let url;
  // const parsedUrl = url.parse(request.url);
  // const id = getId(parsedUrl.path);
  console.log(request.url, "request.url"); //
  let filePath = path.join(
    __dirname,
    "../../",
    "db",
    "products",
    "all-products.json"
  );

  const allProducts = fs.readFileSync(filePath, "utf8");

  // TODO if else => for query url

  response.writeHead(200, {
    "Content-Type": "application/json"
  });

  let file = JSON.parse(allProducts);

  response.end(
    JSON.stringify({
      products: file
    })
  );
};

module.exports = productsRoute;
