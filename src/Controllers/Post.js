const Post = require("../database/models/Post");
const fieldValidator = require("../validators/fieldValidator");

const all = async (req, res) => {
  try {
    const results = await Post.findAll();

    if (results === null) {
      res.status(404).json({ error: `Nenhum usuário encontrado` });
      return;
    }

    res.json(results);
  } catch (err) {
    console.error(err.message);
  }
};



module.exports = {
  all,
};
