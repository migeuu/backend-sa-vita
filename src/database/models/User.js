const { DataTypes } = require("sequelize");

const sequelize = require("../sequelize");
const Post = require("./Post.js");

const User = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
});

// User.hasMany(Post);
// Post.belongsTo(User);

//create table if not exists...
const init = async () => {
  await User.sync();
};

init();

module.exports = User;
