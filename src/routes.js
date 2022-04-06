const express = require("express");
const router = express.Router();

const Users = require("./Controllers/Users");

router.get("/", (req, res) => {
  res.send({ message: "Olá mundo" });
});
router.get("/users", Users.all);
router.get("/users/:id", Users.byId);
router.get("/users/username/:username", Users.byUsername);
router.get("/users/email/:email", Users.byEmail);
router.post("/users", Users.create);
router.patch("/users/:id", Users.update);
router.delete("/users/:id", Users.deleteUser);

module.exports = router;
