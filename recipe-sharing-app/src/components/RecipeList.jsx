import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const addToFavorites = (recipe) => {
        useRecipeStore((state) =>
            state.addFavoriteRecipe(recipe)
        );
    };




    return (<div>
        <h2>Recipe List</h2>
        {filteredRecipes.length === 0 ? (
            <p>No recipes found.</p>
        ) : (
            <ul>
                {filteredRecipes.map((recipe) => (
                    <li style={{ backgroundColor: "grey", textDecoration: "none", display: "flex", justifyContent: "space-between", width: "400px", padding: "10px" }} key={recipe.id}>
                        <Link style={{ color: "black", fontSize: "20px", marginTop: "5px" }} to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                        <button onClick={addToFavorites}>Add to Favorites</button>
                    </li>
                ))}
            </ul>
        )}
    </div>
    );
};

export default RecipeList;
