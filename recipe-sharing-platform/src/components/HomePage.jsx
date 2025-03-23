import { useState, useEffect } from "react";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch("/data.json");
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error("Error loading recipes:", error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div className="container mx-auto p-4 hover">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Recipe List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-2xl font-semibold text-gray-900">{recipe.title}</h2>
                        <p className="text-gray-600 mt-2">{recipe.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
