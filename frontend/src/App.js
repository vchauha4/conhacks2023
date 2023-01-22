import logo from './logo.svg';
import './App.css';
import { Grid, Typography, Card} from '@mui/material';
import AddItemsPage from './pages/AddItemsPage';
import GroceryList from './context/GroceryList.tsx';
import { display } from '@mui/system';
import {BudgetScore} from './context/BudgetScore';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import React, { useEffect, useState } from "react";

function App() {

  const [percent, setPercent] = useState("50");

  function updatingPercent(num){
    setPercent(num)
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <Typography sx={{float:"left",fontSize:36, color:'black',fontWeight:700   }}>
          Budget Bucket
        </Typography>
      </header>
      <Grid  sx={{height:"90vh", backgroundColor:"#d5d1d1", display:"grid", placeItems:"center" }}>

        <Card sx={{width:"50%", height:"100%", backgroundColor:"white", display:"flex", marginTop:"0%",display:"flex", marginBotom:"2%", flexDirection:"column"}}>
          <AddItemsPage></AddItemsPage>
          <Typography sx={{marginTop:"20%", alignItems:"left", justifyContent:"left"}}>Grocery List</Typography>
          
          <GroceryList  sx={{width:"100%", marginLecft:"10%"}}></GroceryList>

          <Typography> Budget Score</Typography>
          <SemiCircleProgressBar percentage={percent} showPercentValue />

        </Card>
        
        

      </Grid>
    </div>
  );
}

export default App;
