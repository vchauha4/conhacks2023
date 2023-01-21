const {MongoClient} = require('mongodb')

let dbConnection
let uri = "mongodb+srv://conuhacks:64lHWAwEeV1dDN0t@cluster0.pzf8u9p.mongodb.net/test"

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client)=>{
                dbConnection = client.db()
                console.log("succesful connection")
                return cb()
            })
            .catch(err=>{
                console.log(err)
                return cb(err)
            })
    },
    getDB: () => dbConnection
}