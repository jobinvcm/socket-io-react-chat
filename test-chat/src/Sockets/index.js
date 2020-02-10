var MongoClient = require("mongodb").MongoClient;
const mongoUrl = "mongodb://localhost:27017";
const dbName = "newChatDatabase";

const useSockets = http => {
  var io = require("socket.io")(http);

  const support = io.of('/support')
  const tickets = io.of('/tickets')

  support.on("connect", socket => console.log('connected to support'))

  io.on("connect", socket => {
    socket.on("chat_message", msg => io.emit("chat_message", msg));

    socket.on("user_typing", name => io.emit("user_typing", name));

    socket.on("user_stop_typing", name => io.emit("user_typing", ''))

    socket.on('group_message', (id, msg) => socket.broadcast.to(id).emit('chat_message', msg))
  });
};

module.exports = useSockets;
