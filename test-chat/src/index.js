const { dbFindData, dbCreateData } = require("./Database/databaseHelpers")
const useSockets = require('./Sockets') 
var app = require("express")();
var cors = require("cors");

app.use(cors());

var http = require("http").createServer(app);


useSockets(http)

http.listen(9000, function() {
  console.log("listening on *:9000");
});
