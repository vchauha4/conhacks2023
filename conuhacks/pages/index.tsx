import { GrocerySelectionProvider } from '@/context/GrocerySelectionContext'
import { Autocomplete, Card } from '@mui/material'
import {Grid} from '@mui/material'
import Head from 'next/head'
import EnterGroceryPage from './EnterGroceryPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>BudgetBuddy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GrocerySelectionProvider>
        {/* <EnterGroceryPage /> */}
        <Grid></Grid>
      </GrocerySelectionProvider>
    </>
  )
}
