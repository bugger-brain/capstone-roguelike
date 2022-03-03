import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GameLoadCard from "./GameLoadCard";
import { createGame, findGameById } from "../services/game-api";


function Dashboard() {

    const navigate = useNavigate();
    const player = JSON.parse(localStorage.getItem("player"));
    const games = player.games;

    //game fetched from blueprint
    const [defaultGame, setDefaultGame] = useState({
        score: 0,
        blueprint: true
    });

    const [game, setGame] = useState({});

    // game to be posted
    const newGame = {
        score: 0,
        isBlueprint: false
    }

<<<<<<< HEAD
   
=======
>>>>>>> cfcdf3a41269e092c3a2997ca8a3c35b8ecd9b3b

    function CreateNewGame() {      //consider separating out POSTS for each Model into other functions
          
        createGame(newGame)
               .then(json => setGame(json))
               .catch(console.error)
<<<<<<< HEAD
        
    localStorage.setItem("game", JSON.stringify(game));
=======
>>>>>>> cfcdf3a41269e092c3a2997ca8a3c35b8ecd9b3b
    }


    function displayGames() {
        return games.map(g => (
            <GameLoadCard game={g} />
        ));
    }

    return (
        <div>
            <div>
                <br></br>
                <div>
                    {/* <center>
                        <button type="button" className="btn p-3 btn-lrg btn-danger">
                            Edit Profile
                        </button> </center> */}
                </div>
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