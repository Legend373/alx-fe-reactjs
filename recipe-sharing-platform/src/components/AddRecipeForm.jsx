import { useState } from "react";

const AddRecipeForm = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};

        if (title.trim().length < 3) {
            tempErrors.title = "Title must be at least 3 characters long.";
        }

        const ingredientList = ingredients.split("\n").map(item => item.trim()).filter(item => item !== "");
        if (ingredientList.length < 2) {
            tempErrors.ingredients = "At least two ingredients are required.";
        }

        if (steps.trim().length < 10) {
            tempErrors.steps = "Instructions must be at least 10 characters long.";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const ingredientList = ingredients.split("\n").map(item => item.trim()).filter(item => item !== "");
        const newRecipe = { title, ingredients: ingredientList, steps };

        console.log("New Recipe Submitted:", newRecipe);
        setTitle("");
        setIngredients("");
        setSteps("");
        setErrors({});
    };

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Add a New Recipe</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.title && <p className="text-red-500">{errors.title}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Ingredients (each on a new line)</label>
                        <textarea
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows="4"
                        ></textarea>
                        {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Instructions</label>
                        <textarea
                            value={steps}
                            onChange={(e) => setSteps(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows="4"
                        ></textarea>
                        {errors.steps && <p className="text-red-500">{errors.steps}</p>}
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                        Submit Recipe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddRecipeForm;
