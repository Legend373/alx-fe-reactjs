import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";

import SearchBar from "./components/SearchBar";
import EditRecipeForm from "./components/EditRecipeForm";
import Home from "./components/Home";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ display: "flex", textAlign: "center", margin: "5px auto 5px auto" }}>Recipe Manager</h1>
        <SearchBar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/edit-recipe/:recipeId" element={<EditRecipeForm />} />
        </Routes>
        <div style={{ flex: 1, border: "1px solid #ddd", padding: "10px" }}>
          <FavoritesList />
        </div>
        {/* Recommendations Section */}
        <div style={{ flex: 1, border: "1px solid #ddd", padding: "10px" }}>
          <RecommendationsList />
        </div>

      </div>
    </Router>
  );
}

export default App;
