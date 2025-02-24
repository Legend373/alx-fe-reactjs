import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'
import UserContext from './components/UserContext'
function App(UserProfile) {
  const [{ userData, setUserData }] = useContext(UserContext)

  return (
    <UserContext.Provider value={{ userData }}>

      {<UserProfile userData={userData} />}
    </UserContext.Provider >
  )
}

export default App
