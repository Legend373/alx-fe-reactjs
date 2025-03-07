import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import EditRecipeForm from "./components/EditRecipeForm";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ display: "flex", textAlign: "center", margin: "5px auto 5px auto" }}>Recipe Manager</h1>
        <SearchBar />
        <AddRecipeForm />
        <RecipeList />
        <div>
          <Routes>
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
            <Route path="/edit-recipe/:recipeId" element={<EditRecipeForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
