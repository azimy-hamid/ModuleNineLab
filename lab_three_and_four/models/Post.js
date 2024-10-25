const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig/dbConfig.js");
const User = require("./User");

const Post = sequelize.define(
  "Post",
  {
    post_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    user_id_fk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "user_id",
      },
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, // Default to false
    },
  },
  {
    timestamps: true,
  }
);

// Set up the relationship
Post.belongsTo(User, { foreignKey: "user_id_fk", onDelete: "CASCADE" }); // Changed here

module.exports = Post;
