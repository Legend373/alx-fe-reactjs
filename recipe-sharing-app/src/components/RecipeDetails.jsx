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
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            {/* Edit form */}
            <Link to={`/edit-recipe/${recipe.id}`} style={{ color: "blue", textDecoration: "underline" }}>
                Edit Recipe
            </Link>

            {/* Delete button */}
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
};
export default RecipeDetails;