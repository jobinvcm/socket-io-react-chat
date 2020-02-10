var MongoClient = require("mongodb").MongoClient;
const mongoUrl = "mongodb://localhost:27017";
const dbName = "newChatDatabase";

const dbFindData = (query, collection, callback) => {
  MongoClient.connect(mongoUrl, function(err, client) {
    const db = client.db(dbName);

    db.collection(collection)
      .find(query)
      .toArray((err, docs) => {
        console.log("data", docs);
        return callback(docs);
      });
  });
};

const dbCreateData = (data, collection, callback) => {
  MongoClient.connect(mongoUrl, function(err, client) {
    const db = client.db(dbName);
    console.log(collection, data);

    db.collection(collection).insertOne(data);

    callback("success");
  });
};

module.exports = {dbCreateData, dbFindData}
