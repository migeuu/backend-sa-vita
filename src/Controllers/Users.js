const User = require("../database/models/User");
const fieldValidator = require("../validators/fieldValidator");

const all = async (req, res) => {
  try {
    const results = await User.findAll();

    if (results === null) {
      res.status(404).json({ error: `Nenhum usuário encontrado` });
      return;
    }

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
  try {
    const { username, email, fullName, password } = req.body;

    // VALIDACAO CAMPOS
    if (fieldValidator(username, email, fullName, password) === true) {
      res.status(401).json({ error: "Invalid fields" });
      return;
    }

    const createUser = User.create({
      username,
      email,
      fullName,
      password,
    });

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    console.error(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const removeUser = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    res
      .status(202)
      .json({ message: `Usuário de ID ${req.params.id} excluído` });
  } catch (err) {
    console.error(err.message);
  }
};

const update = async (req, res) => {
  try {
    const { username, email, fullName, password } = req.body;

    await User.update(
      {
        username: username,
      },
      {
        where: { id: req.params.id },
      }
    );

    await User.update(
      {
        email: email,
      },
      {
        where: { id: req.params.id },
      }
    );

    await User.update(
      {
        fullName: fullName,
      },
      {
        where: { id: req.params.id },
      }
    );

    await User.update(
      {
        password: password,
      },
      {
        where: { id: req.params.id },
      }
    );

    res.json({ message: "Usuário atualizado!" });
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  all,
  byId,
  create,
  update,
  deleteUser,
};
