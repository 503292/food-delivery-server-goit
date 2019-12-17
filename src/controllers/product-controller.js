// const debug = require("debug")("controller");

const { productService } = require("../services/product-service");

module.exports = {
  get: async function(req, res) {
    try {
      let products;
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

// const fs = require("fs");
// const path = require("path");

// const productsPath = path.join(
//   __dirname,
//   "..",
//   "db",
//   "products",
//   "all-products.json"
// );
// const promise = () => {
//   return new Promise((res, rej) => {
//     fs.open(productsPath, "r", (err, fd) => {
//       fs.readFile(fd, "utf-8", (err, data) => {
//         const allProducts = JSON.parse(data);
//         return allProducts;
//       });
//     });
//   });
// };

// const productService = {
//   getAll: () => {
//     promise();

//     fs.close(fd, () => {
//       console.log("succes read file");
//     });
//     if (err) rej(err);
//     return res({ status: "success", products: JSON.parse(data) });

//     // }
//     //     );
//     //   });
//     // });
//   },

//   getById: id => {
//     promise();

//     const getProductId = allProducts.filter(products => products.id === id);

//     return res(
//       getProductId
//         ? { status: "success", getProductId }
//         : { status: "no products", products: [] }
//     );

//     // new Promise((res, rej) => {
//     //   fs.open(productsPath, "r", (err, fd) => {
//     //     fs.readFile(fd, "utf-8", (err, data) => {
//     //       const allProducts = JSON.parse(data);
//     //     });

//     //     if (err) rej(err);
//     //   });
//     // });
//   },

//   getByIds: ids => {
//     try {
//       return new Promise((res, rej) => {
//         fs.open(productsPath, "r", (err, fd) => {
//           fs.readFile(fd, "utf-8", (err, data) => {
//             const allProducts = JSON.parse(data);

//             const idsArr = ids.split(",").map(product => Number(product));

//             const products = allProducts.filter(product =>
//               idsArr.includes(product.id)
//             );
//             res(
//               products.length
//                 ? { status: "success", products }
//                 : { status: "no products", products: [] }
//             );
//           });

//           if (err) rej(err);
//         });
//       });
//     } catch (e) {
//       throw new Error("Something went wrong when get by ids:", e);
//     }
//   },

//   getByCat: category => {
//     return new Promise((res, rej) => {
//       fs.open(productsPath, "r", (err, fd) => {
//         fs.readFile(fd, "utf-8", (err, data) => {
//           const allProducts = JSON.parse(data);

//           const categoryArr = category.split(",");

//           const products = allProducts.filter(product => {
//             const matchedProduct = categoryArr.map(category =>
//               product.categories.includes(category) ? true : false
//             );
//             return !matchedProduct.includes(false);
//           });

//           res(
//             products.length
//               ? { status: "success", products }
//               : { status: "no product", products: [] }
//           );
//         });

//         if (err) rej(err);
//       });
//     });
//   }
// };

// module.exports = {
//   productsPath,
//   productService
// };
