import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import './Home.css';
import Play from "./Play";


function Home() {
    let hitRegisterButton = false;
    function onClickRegister() {
        hitRegisterButton = true;
    }

    return (
        <body class="body">
            <div class="container">
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

                        <div id="accountHelp" className="form-text">No account? No problem! Click below to join now.</div>
                        <br></br>
                        <button type="create" onClick={onClickRegister} className="btn btn-sm btn-danger">Create Account</button>
                    </center>
                </div>

                <br></br>

                <div>
                    {/* <center>
                        <Link to="/play" className="btn btn-danger">Click to Play!</Link>
                    </center> */}
                </div>
            </div>
        </body>

    )
}

export default Home;