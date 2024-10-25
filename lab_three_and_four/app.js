const express = require("express");
const sequelize = require("./dbConfig/dbConfig.js");

const userRoutes = require("./routes/userRoutes.js");
const postRoutes = require("./routes/postRoutes.js");
const likeRoutes = require("./routes/likeRoutes.js");
const commentRoutes = require("./routes/commentRoutes.js");
const microServiceRoutes = require("./routes/microServiceRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/likes", likeRoutes);
app.use("/comments", commentRoutes);
app.use("/microservice", microServiceRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
