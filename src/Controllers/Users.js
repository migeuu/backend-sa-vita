const User = require("../database/models/User");
const fieldValidator = require("../validators/fieldValidator");

const all = async (req, res) => {
  try {
    const results = await User.findAll();
    res.json(results);
  } catch (err) {
    console.error(err.message);
  }
};

const byId = async (req, res) => {
  try {
    const results = await User.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (results === null) {
      res
        .status(404)
        .json({ error: `Usuário de ID ${req.params.id} não encontrado` });
    }
    res.json(results);
  } catch (err) {
    console.error(err.message);
  }
};

const create = async (req, res) => {
  const { username, email, fullName, password } = req.body;

  // VALIDACAO CAMPOS
  if (fieldValidator(username, email, fullName, password) == true) {
    res.status(401).json({ error: "Invalid fields" });
  }

  const createUser = User.create({
    username,
    email,
    fullName,
    password,
  });

  res.status(201).json(createUser);
};

module.exports = {
  all,
  byId,
  create,
};
