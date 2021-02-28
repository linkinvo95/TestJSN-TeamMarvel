const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nickname: { type: DataTypes.STRING, unique: true },
  real_name: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING, allowNull: false },
});

const UserInfo = sequelize.define("user_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
 origin_description: { type: DataTypes.STRING, allowNull: false },
  superpowers: { type: DataTypes.STRING, allowNull: false },
 catch_phrase: { type: DataTypes.STRING, allowNull: false },
});

User.hasMany(UserInfo, { as: "info" });
UserInfo.belongsTo(User);

module.exports = {
  User,
  UserInfo,
};
