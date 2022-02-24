import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";


function Dashboard() {

    const player = JSON.parse(localStorage.getItem("player"));
    const games = player.games;

    function displayGames() {
        // TODO: create a component for this
        return games.map(g => (
            <>
                <p class="login-text">Game Id: {g.gameId}</p>
                <p class="login-text">Score: {g.score}</p>
                <button onClick={() => loadGame(g)}>Load</button>
            </>
        ));
    }

    function loadGame(game) {
        localStorage.setItem("game", JSON.stringify(game));
        <Link to="/play" />
    }

    return (
        <div>
            <div>
                <div>
                    <center>
                        <button type="button" class="btn btn-lrg btn-danger">
                            Edit Profile
                        </button></center>
                </div>
                <div>
                    <center>
                        <button type="button" class="btn btn-lrg btn-info">
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