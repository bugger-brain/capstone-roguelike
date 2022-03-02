import { useState, useEffect, useContext  } from "react";
import { useNavigate } from "react-router-dom";
import GameLoadCard from "./GameLoadCard";
import { addGame, findGameById, findAllGames } from "../services/game-api";

function Dashboard() {

    const navigate = useNavigate();
    const player = JSON.parse(localStorage.getItem("player"));
    const games = player.games;
    // const newGame = {
    //     score: 0,
    //     isBlueprint: "true" 
    // }

    
    function newGame() {
       const game = findGameById(1);
    //    const allGames = findAllGames();
    //    let gameBlueprint = allGames[0];
        
       //localStorage.setItem("game", JSON.stringify(game));
     
        
        addGame(game);
        navigate("/play");
    
        

    }

    function saveGame(){

    }

    function displayGames() {
        return games.map(g => (
            <GameLoadCard game={g} />
        ));
    }

    return (
        <div>
            <div>
                <div>
                    <center>
                        <button type="button" className="btn p-3 btn-lrg btn-danger">
                            Edit Profile
                        </button> </center>
                </div>
                <div>
                    <center>
                        <button type="button" className="btn btn-lrg btn-info" onClick={()=> {newGame()}} >
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