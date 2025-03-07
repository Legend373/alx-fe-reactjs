import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const recipes = useRecipeStore(state => state.recipes)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({ id: Date.now(), title: title, description: description });
        setTitle('');
        setDescription('');
        console.log(recipes)
    };

    return (
        <form style={{ display: "flex", flexDirection: "column", marginTop: "40px" }} onSubmit={handleSubmit}>
            <input style={{ padding: "10px", marginBottom: "20px", width: "440px" }}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea style={{ padding: "20px", marginBottom: "20px" }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <button style={{ width: "180px", marginLeft: "130px" }} type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;