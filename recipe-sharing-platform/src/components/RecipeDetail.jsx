import React from 'react'

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      } catch (error) {
        console.error("Error loading recipe details:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-900">{recipe.title}</h1>
        <p className="text-gray-700 mt-2">{recipe.summary}</p>
        <h2 className="text-xl font-semibold text-gray-800 mt-4">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-600">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold text-gray-800 mt-4">Instructions</h2>
        <p className="text-gray-600">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
