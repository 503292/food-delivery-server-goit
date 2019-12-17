// const http = require("http");
// const url = require("url");

// const morgan = require("morgan");
// const router = require("./routes/router");
// const getRouteHandler = require("./helpers/get-route-handler");

// const logger = morgan("combined");

// const startServer = port => {
//   const server = http.createServer((request, response) => {
//     // Get route from the request
//     const parsedUrl = url.parse(request.url);
//     // console.log(parsedUrl.pathname, "parsedUrl");
//     // console.log(parsedUrl, "parsedUrl");

//     // Get router functions
//     const func = getRouteHandler(router, parsedUrl.pathname) || router.default;

//     logger(request, response, () => func(request, response));
//   });

//   server.listen(port);
// };

// module.exports = startServer;

// const express = require("express");
// const bodyParser = require("body-parser");
// const { port } = require("../config");
// const productsRouter = require("./routes/products/handle-products-route");

// const app = express();

// initMiddleware(app);
// initRoutes(app);

// function initMiddleware(app) {
//   app.use(bodyParser.json());
// }

// function initRoutes(app) {
//   app.use("/products", productsRouter);
// }

// module.exports = app;

const express = require("express");
const bodyParser = require("body-parser");
// const morgan = require("morgan");
const router = require("./routes/routes");
// const middleware = require("./middleware/middleware");
const corsMiddleware = require("cors");

const app = express();

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  // .use(morgan("combined"))
  // .use(middleware.commonMiddleware)
  .use("/products", router.products)
  // .use("/user", router.user)
  // .use("/order", router.order)
  .use("/*", (req, res) => {
    res.statusCode = 404;
    res.json({ message: "Invalid url" });
  });
// .use(middleware.errorHandler);

// app.use(corsMiddleware);

module.exports = app;
