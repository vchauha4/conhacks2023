import logo from './logo.svg';
import './App.css';
import { Grid, Typography, Card} from '@mui/material';
import AddItemsPage from './pages/AddItemsPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography sx={{float:"left"}}>
          Budget Bucket
        </Typography>
      </header>
      <Grid  sx={{height:"90vh", backgroundColor:"#d5d1d1", display:"grid", placeItems:"center" }}>

        <Card sx={{width:"50%", height:"100%", backgroundColor:"white", display:"flex", marginTop:"0%", marginBotom:"2%", flexDirection:"column"}}>
          <AddItemsPage></AddItemsPage>
          <Typography sx={{marginTop:"20%", alignItems:"left", justifyContent:"left"}}>Grocery List</Typography>
        </Card>
        
        

      </Grid>
    </div>
  );
}

export default App;
