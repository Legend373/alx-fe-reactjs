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
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6 sm:p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Add a New Recipe</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Title Input */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter recipe title"
                        />
                        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                    </div>

                    {/* Ingredients Input */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Ingredients (each on a new line)</label>
                        <textarea
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows="4"
                            placeholder="Enter ingredients, one per line"
                        ></textarea>
                        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
                    </div>

                    {/* Instructions Input */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Instructions</label>
                        <textarea
                            value={steps}
                            onChange={(e) => setSteps(e.target.value)}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows="4"
                            placeholder="Enter step-by-step instructions"
                        ></textarea>
                        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all"
                    >
                        Submit Recipe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddRecipeForm;
