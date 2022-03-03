import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GameLoadCard from "./GameLoadCard";
import { createGame, findGameById } from "../services/game-api";


function Dashboard() {

    const navigate = useNavigate();
    const player = JSON.parse(localStorage.getItem("player"));
    const games = player.games;
    
   
    const [game, setGame] = useState({});

    // game to be posted
    const newGame = {
        score: 0,
        isBlueprint: false
    }
    
    function startGame(newGameId) {
        findGameById(newGameId) //this is what we will actually be able to load the maps from
            .then(json => localStorage.setItem("game", JSON.stringify(json)))
            .catch(console.error)
    }

    function CreateNewGame() {      
        createGame(newGame)             //none of this works 
            .then(json => setGame(json))
            .catch(console.error)
    let newGameId = game.gameId;  //basically we need to grab the id from the game we generated in order to get the rest of the data
    startGame(newGameId);
    localStorage.setItem("game", JSON.stringify(game));
        //navigate("/play");
        //getting this error: JWT strings must contain exactly 2 period characters. Found: 0
    }


    function displayGames() {
        // display default if games == null
      
        return games.map(g => (
            <GameLoadCard game={g} />
        ));
    }

    return (
        <div>
            <div>
                <br></br>
                <div>
                    <center>
                        <button type="button" className="btn btn-lrg btn-info" onClick={()=> {CreateNewGame()}} >
                            Start a New Game!
                        </button></center>
                </div>
                <div>
                    {displayGames()}
                </div>


            </div>
        </div>
    );
}

export default Dashboard;