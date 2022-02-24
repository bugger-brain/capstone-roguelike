import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav(){

    const [player, setPlayer] = useState(JSON.parse(localStorage.getItem("game")));

    function logout() {

        //clear local storage
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="/website_logo.jpg" alt="Game Image" width="50" height="50"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/play">Play Game</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/leaderboard">LeaderBoard</a>
                        </li>
                    </ul>
                    <div className="justify-content-end">
                        {player && <>
                            <h2>{player.username}</h2>
                            <button className="btn btn-dark me-2" onClick={logout}>Logout</button>
                        </>}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;