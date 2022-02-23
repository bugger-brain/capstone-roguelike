import { useState} from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Play from "./components/Play";
import Home from "./components/Home";
import AuthContext from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";
import GameContext from "./contexts/GameContext";
import Nav from "./components/Nav";
import LeaderBoard from "./components/LeaderBoard";

function App() {

  const [username, setUsername] = useState();
  const [player, setPlayer] = useState(null);
  const [game, setGame] = useState(null);


  return (
    

    // <PlayerContext.Provider value={{player, setPlayer}}>
    //   <GameContext.Provider value={{game, setGame}}>

    //   </GameContext.Provider>
    // </PlayerContext.Provider>



    <AuthContext.Provider value={{ username, setUsername }}>
      <div className="container">
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={username ? <Dashboard /> : <Home />} />
            <Route path="/play" element={<Play />} />
            <Route path ="/leaderboard" element={<LeaderBoard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
