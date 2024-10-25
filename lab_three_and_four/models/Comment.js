// models/Comment.js
const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig/dbConfig.js");

const Post = require("./Post");
const User = require("./User");

const Comment = sequelize.define(
  "Comment",
  {
    comment_id: {
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
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
Comment.belongsTo(Post, { foreignKey: "post_id", onDelete: "CASCADE" });
Comment.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

module.exports = Comment;
