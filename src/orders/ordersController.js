const debug = require("debug")("controller");
const ordersService = require("./ordersService");

module.exports = {
  postOrder: async (req, res) => {
    try {
      const order = await ordersService.postOrder(req.body);
      res.json(order);
    } catch (e) {
      debug("error %O", e);
    }
  }
};