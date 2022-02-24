import { Link } from "react-router-dom";
import Login from "./Login";
import './Home.css';


function Home() {

    return (
        <body class="body">
            <div class="header-text">
                <br></br>
                <h1><strong><center>WELCOME TO ROGUELIKE!</center></strong></h1>
                <div>
                    <center>
                        <img src="/banner.jpg" alt="Game Image" width="734" height="189"></img>
                    </center>
                </div>
                <br></br>

                <div id="login">
                    <center>
                        <Login />
                        <div id="accountHelp" className="form-text">No account? No problem! Click below to join now.</div>
                        <br></br>
                        <Link to="/register" className="btn btn-sm btn-danger">Create Account</Link>
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