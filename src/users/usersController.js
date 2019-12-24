const fs = require("fs");
const path = require("path");
const debug = require("debug")("controller");

const usersService = require("./usersService");
const usersPath = path.join(__dirname, "../db/users/all-users.json");

getUsersData = async () => {
  try {
    await fs.readFile(usersPath, "utf8", (err, data) => {
      return (parsedData = JSON.parse(data));
    });
  } catch (e) {
    debug("error %O", e);
  }
};

getUsersData();

const getUsers = async (req, res, next) => {
  const url = req.url;
  const id = req.params.id;

  try {
    if (id) {
      await usersService.byId(parsedData, id, res);
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
    debug("error %O", e);
  }
};

const addUser = async (req, res, next) => {
  parsedData.push({
    id: Date.now(),
    ...req.body
  });

  fs.writeFile(usersPath, JSON.stringify(parsedData), err => {
    if (err) {
      debug("error %O", e);
    }
  });

  res.status(201).json(parsedData);
};

module.exports = {
  getUsers,
  addUser,

  usersPath
};
