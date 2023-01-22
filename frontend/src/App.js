import logo from './logo.svg';
import './App.css';
import { Grid, Typography, Card} from '@mui/material';
import AddItemsPage from './pages/AddItemsPage';
import GroceryList from './context/GroceryList.js';
import { display } from '@mui/system';
import {BudgetScore} from './context/BudgetScore';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from '@mui/material'

function App() {

  const [percent, setPercent] = useState(0);
  const [currentGroceries, setGroceries]=useState([''])

  function updateList(item){
    setGroceries(item)
  }

  function updatingPercent(num){
    var precision = 100; // 2 decimals

    var randomnum = Math.floor(Math.random() * (5 * precision - 1 * precision) + 1 * precision) / (1*precision);


    var currentNewPercent=percent+(Math.random() * (10 - 2) + 1).toFixed(2)

    setPercent((percent+randomnum))
  }

  const demo = ["Apples","Bakery and cereal products (excluding baby food)","Bakery products","Bananas","Bread, rolls and buns","Breakfast cereal and other cereal products (excluding baby food)","Butter","Canned and other preserved fish","Canned vegetables and other vegetable preparations","Cereal products (excluding baby food)","Cheese","Coffee and tea","Condiments, spices and vinegars","Cookies and crackers","Dairy products","Dairy products and eggs","Edible fats and oils","Eggs","Fish","Fish, seafood and other marine products","Flour and flour-based mixes","Food purchased from fast food and take-out restaurants 5","Food purchased from restaurants 5","Food purchased from stores","Food purchased from table-service restaurants 5","Fresh fruit","Fresh milk","Fresh or frozen beef","Fresh or frozen chicken","Fresh or frozen fish (including portions and fish sticks)","Fresh or frozen meat (excluding poultry)","Fresh or frozen pork","Fresh or frozen poultry","Fresh vegetables","Frozen and dried vegetables","Fruit juices","Fruit, fruit preparations and nuts","Ham and bacon","Ice cream and related products","Lettuce","Meat","Non-alcoholic beverages","Nuts and seeds","Oranges","Other bakery products","Other food preparations","Other food products and non-alcoholic beverages","Other fresh fruit","Other fresh vegetables","Other preserved fruit and fruit preparations","Other processed meat","Pasta products","Potatoes","Preserved fruit and fruit preparations","Preserved vegetables and vegetable preparations","Processed meat","Rice and rice-based mixes","Sugar and confectionery","Tomatoes","Vegetables and vegetable preparations"]

  return (
    <div className="App">
      <header className="App-header">
        <Typography sx={{float:"left",fontSize:36, color:'black',fontWeight:700   }}>
          Budget Bucket
        </Typography>
      </header>
      <Grid  sx={{height:"90vh", backgroundColor:"#d5d1d1", display:"grid", placeItems:"center" }}>

        <Card sx={{width:"50%", height:"100%", backgroundColor:"white", display:"flex", marginTop:"0%",display:"flex", marginBotom:"2%", flexDirection:"column"}}>
        


        
          {/*HERE <AddItemsPage></AddItemsPage> */}
          <Grid sx={{width:"100%"}}>
      <h3>Add your grocery to the list</h3>
      <Autocomplete 
        options={demo}
        label={'Items'}
        sx={{display:"block", marginLeft:"auto"}}
        renderInput={
          (params)=><TextField {...params} />
          
        }
        onChange={(event, value) => {
          console.log()

          var newList=currentGroceries+[value+'- ']

          updateList(newList)



          console.log(value)
          console.log(currentGroceries)
          updateList(newList)
          console.log(currentGroceries)

          updatingPercent(2)


        
        }} // prints the selected value

      />
      <div>
        {/* <ControlPointIcon fontSize='128' color="disabled" /> */}
      </div>
      
    </Grid>
        
        



        
          <Typography sx={{fontWeight:700,fontSize:22,color:'black',marginTop:"20%", alignItems:"left", justifyContent:"left"}}>Grocery List</Typography>
          
          <GroceryList itemList={currentGroceries} sx={{width:"100%", marginLecft:"10%"}}></GroceryList>

          <Typography  sx={{marginTop:'0%',fontSize:18,color:'black'}}> Budget Score</Typography>
          <SemiCircleProgressBar percentage={percent} showPercentValue />
          <Typography  sx={{marginBottom:'20%',fontSize:18,color:'black'}}> </Typography>

          

        </Card>
        
        

      </Grid>
      


        


    </div>
  );
}

export default App;
