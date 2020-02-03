const fs = require("fs");
const path = require("path");

const productsPath = path.join(
  __dirname,
  "..",
  "db",
  "products",
  "all-products.json"
);

const productsService = {
  getAll: () => {
    return new Promise((res, rej) => {
      fs.open(productsPath, "r", (err, fd) => {
        fs.readFile(fd, "utf-8", (err, data) => {
          if (err) rej(err);
          res({ status: "success", products: JSON.parse(data) });
          fs.close(fd, () => {
            console.log("succes read file");
          });
        });
      });
    });
  },

  getById: id => {
    return new Promise((res, rej) => {
      fs.open(productsPath, "r", (err, fd) => {
        fs.readFile(fd, "utf-8", (err, data) => {
          const allProducts = JSON.parse(data);

          const getProductId = allProducts.filter(
            products => products.id === id
          );

          res(
            getProductId
              ? { status: "success", getProductId }
              : { status: "no products", products: [] }
          );
        });

        if (err) rej(err);
      });
    });
  },

  getByIds: ids => {
    console.log(ids);
    try {
      return new Promise((res, rej) => {
        fs.open(productsPath, "r", (err, fd) => {
          fs.readFile(fd, "utf8", (err, data) => {
            const productsArr = JSON.parse(data);

            let idsArr = "";

            if (ids.charAt(0) === "[") {
              idsArr = ids.slice(1, ids.length - 1);
              idsArr = idsArr.split(",");
            } else {
              idsArr = ids.split(",");
            }

            const products = productsArr.filter(product =>
              idsArr.includes(String(product.id))
            );
            res(
              products.length
                ? { status: "success", products }
                : { status: "no products", products: [] }
            );
            if (err) rej(err);
          });
        });
      });
    } catch (e) {
      throw new Error("Error getting products by ids: ", e);
    }
  },

  getByCategories: categories => {
    return new Promise((res, rej) => {
      fs.open(productsPath, "r", (err, fd) => {
        fs.readFile(fd, "utf-8", (err, data) => {
          const allProducts = JSON.parse(data);

          let categoryArr = "";

          if (categories.charAt(0) === "[") {
            categoryArr = categories.slice(1, categories.length - 1);
            categoryArr = categoryArr.split(",");
          } else {
            categoryArr = categories.split(",");
          }

          const products = allProducts.filter(product => {
            const matchedProduct = categoryArr.map(category =>
              product.categories.includes(category) ? true : false
            );
            return !matchedProduct.includes(false);
          });

          res(
            products.length
              ? { status: "success", products }
              : { status: "no product", products: [] }
          );
        });

        if (err) rej(err);
      });
    });
  }
};

module.exports = {
  productsService,
  productsPath
};
