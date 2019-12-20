const { Router } = require("express");
const {
  // getAllUsers,
  // postUser,
  // getUserById,
  // putUserById,
  // deleteUserById
  getUsers
} = require("./usersControllers");

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUsers);

// router.post("/", postUser);

// router.put("/:id", putUserById);

// router.delete("/:id", deleteUserById);

module.exports = router;
