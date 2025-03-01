import { useState } from 'react'
import RecipeList from './components/RecipeList.jsx'
import AddRecipeForm from './components/AddRecipeForm.jsx'
import './App.css'

function App() {


  return (
    <>
      <AddRecipeForm />
      <RecipeList />
    </>
  )
}

export default App
