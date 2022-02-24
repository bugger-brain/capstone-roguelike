import { useState, useEffect, useContext  } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard() {

    const navigate = useNavigate();
    const player = JSON.parse(localStorage.getItem("player"));
    const games = player.games;

    function displayGames() {
        // TODO: create a component for this
        return games.map(g => (
            <>
                <p className="login-text">Game Id: {g.gameId}</p>
                <p className="login-text">Score: {g.score}</p>
                <button onClick={() => loadGame(g)}>Load</button>
            </>
        ));
    }

    function loadGame(game) {
        localStorage.setItem("game", JSON.stringify(game));
        navigate("/play");
    }

    return (
        <div>
            <div>
                <div>
                    <center>
                        <button type="button" className="btn btn-lrg btn-danger">
                            Edit Profile
                        </button></center>
                </div>
                <div>
                    <center>
                        <button type="button" className="btn btn-lrg btn-info">
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