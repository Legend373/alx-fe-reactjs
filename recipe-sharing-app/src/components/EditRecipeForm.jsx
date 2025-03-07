import { useState } from "react";
import { useRecipeStore } from "./recipeStore";
import { useParams } from "react-router-dom";

const EditRecipeForm = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === Number(recipeId))
    );


    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe({ id: recipe.id, title, description });
    };

    return (
        <form style={{ display: "flex", flexDirection: "column", marginTop: "30px", width: "500px" }} onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Recipe Title"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Recipe Description"
            />
            <button type="submit">Update Recipe</button>
        </form>
    );
};

export default EditRecipeForm;
