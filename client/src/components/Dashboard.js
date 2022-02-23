import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";


function Dashboard() {

    const player = JSON.parse(localStorage.getItem("player"));
    const games = player.games;

    function displayGames() {

        // TODO: create a component for this
        return games.map(g => (
            <>
                <p>Game Id: {g.gameId}</p>
                <p>Score: {g.score}</p>
                <button onClick={() => loadGame(g)}>Load</button>
            </>
        ));
    }

    function loadGame(game) {
        // console.log(game);
        localStorage.setItem("game", JSON.stringify(game));
        <Link to="/play" />
    }





    // edit profile button -> bring to form to change username / password / dob / email

    // render


    //start a new game button


    // load games

    // display unique game id
    // display score

    // display completed games
    // if none, hide this 



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