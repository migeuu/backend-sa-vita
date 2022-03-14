const User = require("../database/models/User");
const fieldValidator = require("../validators/fieldValidator");

module.exports = {
  all(req, res, next) {
    User.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  },

  create(req, res, next) {
    const { username, email, fullName, password } = req.body;

    // VALIDACAO CAMPOS
    if (fieldValidator(username, email, fullName, password) == true) {
      res.status(401).json({ error: "Invalid fields" });
    }

    User.create({
      username,
      email,
      fullName,
      password,
    })
      .then((result) => {
        res.status(201).json(result); //return with ID -> 201 (CREATED)
      })
      .catch(next);
  },
};
