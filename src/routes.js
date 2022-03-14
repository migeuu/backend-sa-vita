const express = require("express");
const router = express.Router();

const Users = require("./Controllers/Users");

router.get("/users", Users.all);
router.get("/users/:id", Users.byId);
router.post("/users", Users.create);

module.exports = router;
