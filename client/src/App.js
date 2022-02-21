import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect, Link, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Play from "./components/Play";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/play" element={<Play />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
