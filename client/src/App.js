import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect, Link, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Play from "./components/Play";
import Game from "./components/Game";
import Hero from "./components/Hero";
import Monster from "./components/Monster";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/play" element={<Play />}/>
          <Route path="/game" element ={<Game />} />
          <Route path="/hero" element ={<Hero />} />
          <Route path="/monster" element ={<Monster />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
