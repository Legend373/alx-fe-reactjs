import { useState } from "react";
const AddRecipeForm = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const ingredientList = ingredients.split("\n").filter(item => item.trim() !== "");

        if (!title || ingredientList.length < 2 || !instructions) {
            setError("All fields must be filled out, and at least two ingredients are required.");
            return;
        }

        setError("");
        const newRecipe = { title, ingredients: ingredientList, instructions };
        console.log("New Recipe Submitted:", newRecipe);
        setTitle("");
        setIngredients("");
        setInstructions("");
    };

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Add a New Recipe</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Ingredients (each on a new line)</label>
                        <textarea
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Instructions</label>
                        <textarea
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows="4"
                            required
                        ></textarea>
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
