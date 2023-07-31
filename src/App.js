import "./App.css";
import {Home} from "./pages/home";
import {Auth} from "./pages/auth";
import {CreateRecipe} from "./pages/create-recipe";
import {SavedRecipes} from "./pages/saved-recipes";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/navbar";
function App(){
  return <div className = "App">
<Router>
  <Navbar />
  <Routes>
    <Route path = "/" element={<Home />}/>
    <Route path = "/auth" element={<Auth />}/>
    <Route path = "/create-recipe" element={<CreateRecipe />}/>
    <Route path = "/saved-receipes" element={<SavedRecipes/>}/>

  </Routes>
</Router>
  </div>;

}

export default App;