import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter, considerRedirect } from "react-router-dom";
import './App.css';
import Play from "./components/Play";
import Home from "./components/Home";
import AuthContext from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import LeaderBoard from "./components/LeaderBoard";
import Register from "./components/Register";
import { logout, refresh } from "./services/auth-api";


function App() {

  // const [username, setUsername] = useState();
  const player = JSON.parse(localStorage.getItem("player"));
  
  const [credentials, setCredentials] = useState();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    refresh()
      .then(principal => setCredentials(principal))
      .catch(() => setCredentials())
      .finally(() => setInitialized(true));
  }, [])

  const auth = {
    credentials,
    login: (principal) => setCredentials(principal),
    logout: () => {
      logout().finally(() => setCredentials());
    }
  };

  const considerRedirect = (Component, ...authorities) => {
    if (initialized) {

      if (credentials && (authorities.length === 0 || credentials.hasAuthority(...authorities))) {
        return <Component />;
      } else {
        return <Route path="/login" />;
      }
    }
    return null;
  };

  return (
    <AuthContext.Provider value={{ auth }}>
      <div className="container">
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
              {considerRedirect (Dashboard, "USER")}
            <Route path="/dashboard" element={player ? <Dashboard /> : <Home />} />
           
            <Route path="/play" element={<Play />} />
               
            <Route path ="/leaderboard" element={<LeaderBoard />} />
               
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
