import { create } from 'zustand';


const useRecipeStore = create((set, get) => ({
    recipes: [],
    searchTerm: '',
    setSearchTerm: (term) => { console.log("Setting searchTerm:", term); set({ searchTerm: term }) },
    filteredRecipes: [],
    favorites: [],
    addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
    removeFavorite: (recipeId) => set(state => ({
        favorites: state.favorites.filter(id => id !== recipeId)
    })),
    recommendations: [],
    generateRecommendations: () => set(state => {
        // Mock implementation based on favorites
        const recommended = state.recipes.filter(recipe =>
            state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
    }),
    filterRecipes: (searchTerm) => set(state => ({
        filteredRecipes: state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }))
    ,

    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    updateRecipe: (updatedRecipe) =>
        set((state) => ({
            recipes: state.recipes.map((recipe) =>
                recipe.id === updatedRecipe.id ? updatedRecipe : recipe
            ),
        })),


    deleteRecipe: (recipeId) =>
        set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
        })),

    setRecipes: (recipes) => set({ recipes })
}));
export { useRecipeStore };
