import { useState} from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Play from "./components/Play";
import Home from "./components/Home";
import AuthContext from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";

function App() {

  const [username, setUsername] = useState();

  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      <div className="container">
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={username ? <Dashboard /> : <Home />} />
            <Route path="/play" element={<Play />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
