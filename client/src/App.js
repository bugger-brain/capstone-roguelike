import { useState, useEffect } from "react";
import { BrowserRouter as Route, Redirect, Link, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Play from "./components/Play";
import Game from "./components/Game";
import Hero from "./components/Hero";
import Monster from "./components/Monster";
import Home from "./components/Home";
import AuthContext from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";

function App() {

  const [username, setUsername] = useState();

  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={username ? <Dashboard /> : <Home/>} />
            <Route path="/play" element={<Play />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
