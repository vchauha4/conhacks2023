

const express = require("express")
const { ObjectId } = require("mongodb")
const {connectToDb, getDB} = require('./db')


//init app

const app = express()

//db connection
let db

connectToDb((err) => {
    if(!err){
        app.listen(3001, ()=>{
            console.log('app listening on port 3001')
        })
        db = getDB()
    }
})
