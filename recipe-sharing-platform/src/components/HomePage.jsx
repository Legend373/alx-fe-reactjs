import { useState, useEffect } from "react";
import data from "../data.json"; // Import JSON directly

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(data); // Set data directly
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Recipe List</h1>
            <div className="grid md:grid-cols-2 gap-4">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="bg-white shadow-md rounded-lg p-4">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-40 object-cover rounded-md mb-2"
                        />
                        <h2 className="text-xl font-semibold">{recipe.title}</h2>
                        <p className="text-gray-600">{recipe.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
