

const express = require("express")
const { ObjectId } = require("mongodb")
const {connectToServer, getDb} = require('./db')


//init app

const app = express()

//db connection
let db
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}


app.use(allowCrossDomain);
//some other code
 
connectToServer((err) => {
    if(!err){
        app.listen(3001, ()=>{
            console.log('app listening on port 3001')
        })
        db = getDb()
    }
})


//returns all categories
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
//return all foods
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
 //returns the key for the name of the food 
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
//returns the cpi for a given food
app.get('/cpi/:id', (req,res)=> {
    projection = {'December 2021 to December 2022':1, _id:0}
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



//returns the category for a given food
app.get('/findcategory/:id', (req,res)=> {
    projection = {'category':1, _id:0}
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

//returns list of all foods in a given category 
app.get('/category/:id', (req,res)=> {
    projection = {'Products and product groups 3 4':1, _id:0,'December 2021 to December 2022':1}
    filter = {'category':"meat"}
    sort = {'December 2021 to December 2022':-1}
    db
    .collection("cpi")
    .find({"category":req.params.id},{projection,sort})
    .toArray(function (err, result) {
        if (err) {
            res.status(400).send("Error fetching listings!");
        } else {
            res.json(result);
        }
        });

})
  
  