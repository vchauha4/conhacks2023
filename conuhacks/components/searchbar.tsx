import * as React from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import App from "../../backend/app";






const axios = require('axios');

export default function searchBar(){
    

    
    return(
        
        <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={foodOptions.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />


      const foods = ["Apples",
      "Bakery and cereal products (excluding baby food)",
      "Bakery products",
      "Bananas",
      "Bread, rolls and buns",
      "Breakfast cereal and other cereal products (excluding baby food)",
      "Butter",
      "Canned and other preserved fish",
      "Canned vegetables and other vegetable preparations","Cereal products (excluding baby food)","Cheese","Coffee and tea","Condiments, spices and vinegars","Cookies and crackers","Dairy products","Dairy products and eggs","Edible fats and oils","Eggs","Fish","Fish, seafood and other marine products","Flour and flour-based mixes","Food purchased from fast food and take-out restaurants 5","Food purchased from restaurants 5","Food purchased from stores","Food purchased from table-service restaurants 5","Fresh fruit","Fresh milk","Fresh or frozen beef","Fresh or frozen chicken","Fresh or frozen fish (including portions and fish sticks)","Fresh or frozen meat (excluding poultry)","Fresh or frozen pork","Fresh or frozen poultry","Fresh vegetables","Frozen and dried vegetables","Fruit juices","Fruit, fruit preparations and nuts","Ham and bacon","Ice cream and related products","Lettuce","Meat","Non-alcoholic beverages","Nuts and seeds","Oranges","Other bakery products","Other food preparations","Other food products and non-alcoholic beverages","Other fresh fruit","Other fresh vegetables","Other preserved fruit and fruit preparations","Other processed meat","Pasta products","Potatoes","Preserved fruit and fruit preparations","Preserved vegetables and vegetable preparations","Processed meat","Rice and rice-based mixes","Sugar and confectionery","Tomatoes","Vegetables and vegetable preparations"]
    )
} 