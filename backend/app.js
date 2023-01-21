

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

app.get('/categories', (req,res)=> {

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
  
  app.get('/foods', (req,res)=> {

    db
      .collection("cpi")
      .distinct('Products and product groups 3 4',function (err, result) {
          if (err) {
            res.status(400).send("Error fetching listings!");
         } else {
            res.json(result);
          }
        });
  })
  
  app.get('/:id', (req,res)=> {
        projection = {'_id':1}
        db
        .collection("cpi")
        .find({"Products and product groups 3 4":req.params.id},{projection})
        .toArray(function (err, result) {
            if (err) {
                res.status(400).send("Error fetching listings!");
            } else {
                res.json(result);
            }
            });
  
  })
  