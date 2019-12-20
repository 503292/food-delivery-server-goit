// const debug = require("debug")("controller");

const { productsService } = require("./productsService");

module.exports = {
  get: async function(req, res) {
    try {
      let products;
      if (req._parsedUrl.path === "/") {
        console.log("req._parsedUrl.path", req._parsedUrl.path);
        products = await productsService.getAll();
      }

      if (req.query.categories) {
        products = await productsService.getByCategories(req.query.categories);
      }

      if (req.query.ids) {
        products = await productsService.getByIds(req.query.ids);
      }

      res.json(products);
    } catch (e) {
      console.log("Catch error", e);
    }
  },

  getById: async function(req, res) {
    try {
      const getId = Number(req.params.id);
      const product = await productsService.getById(getId);
      res.json(product);
    } catch (e) {
      console.log("Catch error", e);
    }
  }
};
