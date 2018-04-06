var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/checkout";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

// create accounts collection
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("checkout");
  dbo.createCollection("accounts", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

//insert to accounts collection 

var insert = (account) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("checkout");
    dbo.collection("accounts").insertOne(account, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}

module.exports.insert = insert;