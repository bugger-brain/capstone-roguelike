import { Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";


function Home() {

    let hitRegisterButton = false;

    function onClick() {
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

            <div>

                {hitRegisterButton ? <Register /> : <Login />}

                <div id="accountHelp" class="form-text">No account? No problem! Click below to join now.</div>
                <button type="create" onClick={onClick} class="btn btn-sm btn-primary">Create Account</button>


                {console.log(hitRegisterButton)}

            </div>

            <br></br>
            <div>
                <center>
                    <button type="button" class="btn btn-lrg btn-danger">
                        Click to Play!
                    </button>
                </center>
            </div>

        </div>
    )
}

export default Home;