const { Router } = require("express");
const {
  // getAllUsers,
  addUser,
  // getUserById,
  // putUserById,
  // deleteUserById
  getUsers
} = require("./usersControllers");

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUsers);

router.post("/", addUser);

// router.put("/:id", putUserById);

// router.delete("/:id", deleteUserById);

module.exports = router;
