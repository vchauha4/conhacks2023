import { Inter } from '@next/font/google'
import { GrocerySelectionProvider } from '@/context/GrocerySelectionContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <GrocerySelectionProvider>
      <div className='app-background'>
        
      </div>
    </GrocerySelectionProvider>
  )
}
