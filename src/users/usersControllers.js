const fs = require("fs");
const path = require("path");

const search = require("./usersServices");
const users = path.join(__dirname, "../db/all-users.json");

fs.readFile(users, "utf8", (err, data) => {
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
        await search.byIds(parsedData, req.query.ids, res);
      }
      if (req.query.categories) {
        await search.byCategories(parsedData, req.query.categories, res);
      }
    } else {
      await search.byAll(parsedData, res);
    }
  } catch (e) {
    console.log("Catch error", e);
  }
};

module.exports = {
  getUsers
};
