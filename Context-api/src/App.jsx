import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'
import UserDetails from './components/UserDetails'

function App() {
  return (
    <main className='main-cnt'>
      <ThemeProvider>
        <UserProvider>
          <Navbar />
          <UserDetails />
        </UserProvider>
      </ThemeProvider>
    </main>
  )
}

export default App
