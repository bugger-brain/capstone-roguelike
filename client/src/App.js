import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect, Link, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Play from "./components/Play";
import Game from "./components/Game";
import Hero from "./components/Hero";
import Monster from "./components/Monster";
import Home from "./components/Home";
import AuthContext from "./contexts/AuthContext";

function App() {

  const [username, setUsername] = useState();

  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<Play />} />
            {/* <Route path="/game" element ={<Game />} />
          <Route path="/hero" element ={<Hero />} /> */}
            {/* <Route path="/monster" element={<Monster />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
