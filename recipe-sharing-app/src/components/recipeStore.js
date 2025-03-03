import { create } from 'zustand';


const useRecipeStore = create(set => ({
    recipes: [],
    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
    filteredRecipes: [],
    filterRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
    })),

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
export default useRecipeStore;
