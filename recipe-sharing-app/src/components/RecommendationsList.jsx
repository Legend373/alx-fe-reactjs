import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
    const { recipes, favorites } = useRecipeStore(state => ({
        recipes: state.recipes,
        favorites: state.favorites
    }));

    // Filter recipes that are NOT already in favorites (basic recommendation)
    const recommendations = recipes.filter(recipe => !favorites.includes(recipe.id));

    return (
        <div>
            <h2>Recommended for You</h2>
            {recommendations.length > 0 ? (
                recommendations.map(recipe => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            ) : (
                <p>No recommendations available.</p>
            )}
        </div>
    );
};

export default RecommendationsList;
