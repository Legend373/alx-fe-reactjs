import React from 'react'
import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddRecipeForm";

const Home = () => {
    return (
        <div>
            <AddRecipeForm />
            <RecipeList />

        </div>
    )
}

export default Home
