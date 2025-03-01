import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Manager</h1>
        <SearchBar />
        <AddRecipeForm />
        <RecipeList />
        <Routes>
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
