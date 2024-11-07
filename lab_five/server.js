const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

let users = {};

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("setNickname", (nickname) => {
    users[socket.id] = nickname;
    socket.broadcast.emit("userConnected", nickname);
    io.emit("updateUserList", Object.values(users));
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    const nickname = users[socket.id];
    delete users[socket.id];
    socket.broadcast.emit("userDisconnected", nickname);
    io.emit("updateUserList", Object.values(users));
  });

  socket.on("chatMessage", (data) => {
    io.emit("chatMessage", { msg: data.msg, nickname: users[socket.id] });
  });

  socket.on("typing", () => {
    socket.broadcast.emit("typing", users[socket.id]);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
