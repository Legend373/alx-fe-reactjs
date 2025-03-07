import React from 'react';
import { useRecipeStore } from './recipeStore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm)

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <input style={{ marginTop: "40px", width: "190px", padding: "10px" }}
                type="text"
                placeholder="Search recipes..."
                onChange={(e) => setSearchTerm(e.target.value)}


            />
            <FontAwesomeIcon onClick={filterRecipes(searchTerm)} style={{ marginTop: "40px", padding: "10px", cursor: "pointer" }} icon={faSearch} size="lg" color="white" />


        </div>

    );
};

export default SearchBar;