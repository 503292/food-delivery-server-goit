

// const debug = require("debug")("controller");
const path = require("path");
const url = require("url");
const { productService } = require("../services/product-service");

module.exports = {
  get: async function(req, res) {
    try {
      let products;

      //   console.log(req._parsedUrl, " -req._parsedUrl.path");
      const getId = Number(req.params.id);
      console.log(req.params.id);
      console.log(req);

      if (getId >= 0) {
        console.log(req.params.id, " -req.params.id");

        const product = await productService.getById(getId);
        res.json(product);
      }

      //   console.log(req._parsedUrl, " -req._parsedUrl.path");

      if (req._parsedUrl.path === "/") {
        products = await productService.getAll();
      }

      if (req.query.category) {
        products = await productService.getByCat(req.query.category);
      }

      if (req.query.ids) {
        products = await productService.getByIds(req.query.ids);
      }

      res.json(products);
    } catch (e) {
      //   debug("Catch error %O", e);
    }
  },

  getById: async function(req, res) {
    try {
    } catch (e) {
      //   debug("Catch error %O", e);
      console.log("Catch error", e);
    }
  }
};
