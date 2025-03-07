import { useRecipeStore } from './recipeStore';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom"
import DeleteRecipeButton from "./DeleteRecipeButton"

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === Number(recipeId))
    );
    if (!recipe) {
        return <p>Recipe not found</p>; // Handle missing recipe gracefully
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            {/* Edit form */}
            <Link style={{ backgroundColor: "black", padding: "5px", fontSize: "20px", color: "white", marginRight: "80px" }} to={`/edit-recipe/${recipe.id}`}>
                Edit Recipe
            </Link>

            {/* Delete button */}
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
};
export default RecipeDetails;