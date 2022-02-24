import { useNavigate } from "react-router-dom";
import Login from "./Login";
import './Home.css';


function Home() {

    const navigate = useNavigate();
    let hitRegisterButton = false;

    function onClickRegister() {
        hitRegisterButton = true;
    }

    function onClickPlayAsGuest() {
        alert("Greetings! As a guest, you will not be able to save your game or register your high score to the leaderboard.");
        navigate("/play");
    }



    return (
        <body className="body">
            <div className="container">
                <h1><strong><center>WELCOME TO ROGUELIKE!</center></strong></h1>
                <div>
                    <center>
                        <img src="/banner.jpg" alt="Game Image" width="734" height="189"></img>
                    </center>
                </div>
                <br></br>
                <div id="login">
                    <center>
                        {hitRegisterButton ? <Register /> : <Login />}
                        
                        <div id="accountHelp" className="form-text">No account? No problem! Click below to join now or play as a guest.</div>
                        <br></br>
                        <button type="create" onClick={onClickRegister} className="btn btn-sm btn-danger">Create Account</button> <button type="create" onClick={onClickPlayAsGuest} className="btn btn-sm btn-success">Play As Guest</button>
                    </center>
                </div>
                <br></br>
            </div>
        </body>

    )
}

export default Home;