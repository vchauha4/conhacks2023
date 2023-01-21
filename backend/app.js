

const express = require("express")
const { ObjectId } = require("mongodb")
const {connectToServer, getDb} = require('./db')


//init app

const app = express()

//db connection
let db

connectToServer((err) => {
    if(!err){
        app.listen(3001, ()=>{
            console.log('app listening on port 3001')
        })
        db = getDb()
    }
})


app.get('/category', (req,res)=> {

  db
    .collection("cpi")
    .distinct('category',function (err, result) {
        if (err) {
          res.status(400).send("Error fetching listings!");
       } else {
          res.json(result);
        }
      });
})

