import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);




    return (<div>
        <h2>Recipe List</h2>
        {filteredRecipes.length === 0 ? (
            <p>No recipes found.</p>
        ) : (
            <ul>
                {filteredRecipes.map((recipe) => (
                    <li style={{ textDecoration: "none" }} key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
    );
};

export default RecipeList;
