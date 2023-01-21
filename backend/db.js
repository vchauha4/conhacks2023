const {MongoClient} = require('mongodb')

let dbConnection
let uri = "mongodb+srv://conuhacks:64lHWAwEeV1dDN0t@cluster0.pzf8u9p.mongodb.net/test"

const client = new MongoClient(uri)

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
          if (err || !db) {
            return callback(err);
          }
    
          dbConnection = db.db("cpiDB");
          console.log("Successfully connected to MongoDB.");
    
          return callback();
        });
      },
    
      getDb: function () {
        return dbConnection;
      },
}