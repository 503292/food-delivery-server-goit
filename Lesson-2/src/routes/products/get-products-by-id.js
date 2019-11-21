const url = require("url");

const getId = url => {
  const lastIndex = url.lastIndexOf("./");
  console.log(lastIndex);
  if (lastIndex !== -1) {
    return url.slice(lastIndex + 1);
  }
};

const getProductsById = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const id = getId(parsedUrl.path);
  console.log(request);

  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(JSON.stringify({ productid: id }));
  response.end();
};

module.exports = getProductsById;
