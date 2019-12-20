const fs = require("fs");
const path = require("path");

const usersService = require("./usersServices");
const usersPath = path.join(__dirname, "../db/all-users.json");

fs.readFile(usersPath, "utf8", (err, data) => {
  return (parsedData = JSON.parse(data));
});

const getUsers = async (req, res, next) => {
  const url = req.url;
  const id = req.params.id;

  try {
    if (id) {
      await search.byId(parsedData, id, res);
    } else if (url.charAt(1) === "?") {
      if (req.query.ids) {
        await usersService.byIds(parsedData, req.query.ids, res);
      }
      if (req.query.categories) {
        await usersService.byCategories(parsedData, req.query.categories, res);
      }
    } else {
      await usersService.byAll(parsedData, res);
    }
  } catch (e) {
    console.log("Catch error", e);
  }
};

const addUser = async (req, res, next) => {
  try {
    const user = await usersService.postUser(parsedData, req.body,usersPath, res);
    res.json(user);
  } catch (e) {
    console.log("Catch error", e);
  }
};

module.exports = {
  getUsers,
  addUser
};
