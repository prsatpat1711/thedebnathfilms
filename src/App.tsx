import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

function App() {

  return (
    <div className="w-100 h-100">
      <Routes>
        <Route path="" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
