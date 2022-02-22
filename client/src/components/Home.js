import { BrowserRouter as Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "./Login";


function Home() {

    return (
        <div>

            <h1><strong><center>WELCOME TO ROGUELIKE!</center></strong></h1>
            <div>
                <center>
                    <img src="diagrams/website_logo.jpg" alt="Game image"></img>
                </center>
            </div>

            <div>
                <Login />
            </div>

            <br></br>
            <div>
                <center>
                    <button type="button" class="btn btn-lrg btn-danger">
                        Click to Play!
                    </button></center>
            </div>

        </div>
    )
}

export default Home;