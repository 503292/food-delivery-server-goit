const fs = require("fs");
const path = require("path");
const debug = require("debug")("controller");

const productsPath = path.join(__dirname, "..", "db", "all-products.json");

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
      debug("error %O", e);
    }
  },

  getById: async function(req, res) {
    try {
      const getId = Number(req.params.id);
      const product = await productsService.getById(getId);
      res.json(product);
    } catch (e) {
      debug("error %O", e);
    }
  },
  addProduct: async (req, res) => {
    try {
      await fs.readFile(productsPath, "utf8", (err, data) => {
        const parsedData = JSON.parse(data);
        parsedData.push({
          id: Date.now(),
          ...req.body
        });
        fs.writeFile(productsPath, JSON.stringify(parsedData), err => {
          if (err) {
            debug("error %O", e);
          }
          res.status(201).json(parsedData);
        });
      });
    } catch (e) {
      debug("error %O", e);
    }
  }
};
