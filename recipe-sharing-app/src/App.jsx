import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Manager</h1>
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
