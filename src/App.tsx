import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { useState } from "react";

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
