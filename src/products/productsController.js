// const debug = require("debug")("controller");

const { productService } = require("./productService");

module.exports = {
  get: async function(req, res) {
    try {
      let products;
      if (req._parsedUrl.path === "/") {
        console.log("req._parsedUrl.path",req._parsedUrl.path)
        products = await productService.getAll();
      }

      if (req.query.categories) {
        products = await productService.getByCategories(req.query.categories);
      }

      if (req.query.ids) {
        products = await productService.getByIds(req.query.ids);
      }

      res.json(products);
    } catch (e) {
      //   debug("Catch error %O", e);
      console.log("Catch error", e);
    }
  },

  getById: async function(req, res) {
    try {
      const getId = Number(req.params.id);
      const product = await productService.getById(getId);
      res.json(product);
    } catch (e) {
      //   debug("Catch error %O", e);
      console.log("Catch error", e);
    }
  }
};
