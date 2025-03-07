import { useRecipeStore } from "./recipeStore";
import { useNavigate, useParams } from "react-router-dom";

const DeleteRecipeButton = () => {
    const recipeId = useParams()
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteRecipe(recipeId);
        navigate("/"); // Redirect to home after deleting
    };

    return <button onClick={handleDelete}>Delete Recipe</button>;
};



export default DeleteRecipeButton;
