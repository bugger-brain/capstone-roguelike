import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GameLoadCard from "./GameLoadCard";
import { createGame, findGameById } from "../services/game-api";


function Dashboard() {

    const navigate = useNavigate();
    const player = JSON.parse(localStorage.getItem("player"));
    const [games, setGames] = useState(player.games);
    // const games = player.games;

    const [waiting, setWaiting] = useState(false)
    const [hasGames, setHasGames] = useState(false);


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
        // console.log(game);
        let newGameId = game.gameId;  //basically we need to grab the id from the game we generated in order to get the rest of the data
        startGame(newGameId);
        localStorage.setItem("game", JSON.stringify(game));

        // fetch 

        //navigate("/play");
        //getting this error: JWT strings must contain exactly 2 period characters. Found: 0
    }

    function displayGames() {
        // display default if games == null`
        // if(games.length == 0 || games == null){
        //     console.log("no games found")
        // }
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
                        <button type="button" className="btn btn-lrg btn-info" onClick={() => { CreateNewGame() }} >
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