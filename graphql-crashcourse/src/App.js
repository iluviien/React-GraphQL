import "./App.css";
import CharactersList from "./pages/CharactersList";
import { Route, Routes } from "react-router";
import Characters from "./pages/Characters";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharactersList />} />
        <Route strict exact path="/:id" element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;
