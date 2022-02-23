import { Route } from "react-router-dom";
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
                    <img src="/website_logo.jpg" alt="Game Image"></img>
                </center>
            </div>

            <br></br>

            <div>
                <center>

                    {hitRegisterButton ? <Register /> : <Login />}

                    <br></br>

                    <div id="accountHelp" class="form-text">No account? No problem! Click below to join now.</div>
                    <button type="create" onClick={onClickRegister} class="btn btn-sm btn-primary">Create Account</button>


                    {console.log(hitRegisterButton)}

                </center>

            </div>

            <br></br>
            <div>
                <center>
                    <button type="button" onClick={<Play />} class="btn btn-lrg btn-danger">
                        Click to Play!
                    </button>
                </center>
            </div>

        </div>
    )
}

export default Home;