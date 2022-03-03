import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GameLoadCard from "./GameLoadCard";
import { addGame, findGameById } from "../services/game-api";
import { addMap } from "../services/map-api";
import { addTile } from "../services/tile-api";
import { addHero } from "../services/hero-api";

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


    function CreateNewGame() {      //consider separating out POSTS for each Model into other functions
            addGame(newGame)
               .then(json => setGame(json)) //this doesn't load right away
               .catch(console.error)
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