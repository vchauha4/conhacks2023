import { GrocerySelectionProvider } from '@/context/GrocerySelectionContext'
import { Autocomplete, Card, Typography } from '@mui/material'
import {Grid} from '@mui/material'
import Head from 'next/head'
import EnterGroceryPage from './EnterGroceryPage'

export default function Home() {
  return (
    <>
      <Head>
        <Typography>BudgetBuddy</Typography>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid sx={{width:"100%", height: "100%", backgroundColor:"wheat"}}>
        
      </Grid>
      
    </>
  )
}
