import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Play from "./Play";


function Home() {

    let hitRegisterButton = false;

    function onClickRegister() {
        hitRegisterButton = true;
    }


    return (
        <div>

            <h1><strong><center>WELCOME TO ROGUELIKE!</center></strong></h1>
            <div>
                <center>
                    <img src="/website_logo.jpg" alt="Game Image" width="400" height="400"></img>
                </center>
            </div>

            <br></br>

            <div>
                <center>

                    {hitRegisterButton ? <Register /> : <Login />}

                    <div id="accountHelp" className="form-text">No account? No problem! Click below to join now.</div>
                    <br></br>
                    <button type="create" onClick={onClickRegister} className="btn btn-sm btn-primary">Create Account</button>

                </center>

            </div>

            <br></br>

            <div>
                <center>
                    <Link to="/play" className="btn btn-danger">Click to Play!</Link>
                </center>
            </div>

        </div>
    )
}

export default Home;