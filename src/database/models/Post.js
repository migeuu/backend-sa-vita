const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Post = sequelize.define("post", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  requirements: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

//create table if not exists...
const init = async () => {
  await Post.sync();
};

init();

module.exports = Post