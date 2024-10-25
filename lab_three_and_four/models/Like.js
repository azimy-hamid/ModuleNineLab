// models/Like.js
const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig/dbConfig.js");

const Post = require("./Post");
const User = require("./User");

const Like = sequelize.define(
  "Like",
  {
    like_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Post,
        key: "post_id",
      },
    },
    user_id: {
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

// Set up the relationships
Like.belongsTo(Post, { foreignKey: "post_id", onDelete: "CASCADE" });
Like.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

module.exports = Like;
