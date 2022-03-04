import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GameLoadCard from "./GameLoadCard";
import { createGame, findGameById, findGamesByPlayerId } from "../services/game-api";
import { findHeroById } from "../services/hero-api";


function Dashboard() {

    const navigate = useNavigate();
    const player = JSON.parse(localStorage.getItem("player"));
    const [games, setGames]=useState(player.games);
    const [waiting, setWaiting] = useState(false)
    
   
    const [game, setGame] = useState({});

    // game to be posted
    const newGame = {
        score: 0,
        isBlueprint: false,
        playerId: player.playerId
    }
    
    useEffect(()=> {
        fetchGames(); 
    }, []);
   
    function fetchGames() {
        findGamesByPlayerId(player.playerId)
            .then(json => 
                {
                    setGames(json);
                    console.log(games);
                })
            .catch(console.log)
    }
   
    function CreateNewGame() { 
    setWaiting(true);  
    
        createGame(newGame)             
            .then(json => {
                setGame(json); //this does nothing
                fetchGames();
            })
            .then(()=> {
                let currentGame = games[games.length-1];
                console.log(currentGame);
                //console.log(game);
                localStorage.setItem("game", JSON.stringify(currentGame));
                setWaiting(false);
        })
            .catch(console.error)
    
         navigate("/play");
    }

    function displayGames() {
        // display default if games == null
        if(games.length == 0){
        }

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
                        <button type="button" className="btn btn-lrg btn-info" disabled = {waiting} onClick={()=> {CreateNewGame()}} >
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