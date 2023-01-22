import React, { useState } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import axios, * as others from 'axios';

import { useGrocerySelection } from '../context/GrocerySelectionContext'


export default function AddItemsPage() {
  const { loaded, selected } = useGrocerySelection()
  const [ data, setData ] = useState([]);


  //const demo = ["Apples","Bakery and cereal products (excluding baby food)","Bakery products","Bananas","Bread, rolls and buns","Breakfast cereal and other cereal products (excluding baby food)","Butter","Canned and other preserved fish","Canned vegetables and other vegetable preparations","Cereal products (excluding baby food)","Cheese","Coffee and tea","Condiments, spices and vinegars","Cookies and crackers","Dairy products","Dairy products and eggs","Edible fats and oils","Eggs","Fish","Fish, seafood and other marine products","Flour and flour-based mixes","Food purchased from fast food and take-out restaurants 5","Food purchased from restaurants 5","Food purchased from stores","Food purchased from table-service restaurants 5","Fresh fruit","Fresh milk","Fresh or frozen beef","Fresh or frozen chicken","Fresh or frozen fish (including portions and fish sticks)","Fresh or frozen meat (excluding poultry)","Fresh or frozen pork","Fresh or frozen poultry","Fresh vegetables","Frozen and dried vegetables","Fruit juices","Fruit, fruit preparations and nuts","Ham and bacon","Ice cream and related products","Lettuce","Meat","Non-alcoholic beverages","Nuts and seeds","Oranges","Other bakery products","Other food preparations","Other food products and non-alcoholic beverages","Other fresh fruit","Other fresh vegetables","Other preserved fruit and fruit preparations","Other processed meat","Pasta products","Potatoes","Preserved fruit and fruit preparations","Preserved vegetables and vegetable preparations","Processed meat","Rice and rice-based mixes","Sugar and confectionery","Tomatoes","Vegetables and vegetable preparations"]

  // const demo = new Promise((resolve,reject)=>{
  //   setTimeout(() => {
  //     resolve(doGetRequest());
  //   }, 300);
  // })
  fetch('http://localhost:3001/foods')
    .then(res => res.json())
    .then(json => {
      setData(json)
    })
    .catch(err => console.error('error:' + err));

  return (
    <React.Fragment>
      <h3>Add your grocery to the list</h3>
      {
        data == [] ? <></> :
         <Autocomplete 
          options={data}
          label={'Items'}
          renderInput={
            (params)=><TextField {...params} />
          }
        />
      }
      
      <div>
        {/* <ControlPointIcon fontSize='128' color="disabled" /> */}
      </div>
      

    </React.Fragment>
  )
}
