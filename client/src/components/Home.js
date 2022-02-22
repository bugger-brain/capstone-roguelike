import { Route } from "react-router";


function Home() {

    return (
        <div>

            <h1><strong><center>WELCOME TO ROGUELIKE!</center></strong></h1>
            <div>
                <center>
                <img src="Diagrams/website_logo.jpg" alt="Game image"></img>
                </center>
            </div>

            <div>
                <center>
                    <form>
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="username" class="form-control" id="username" ></input>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password"></input>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <div id="accountHelp" class="form-text">No account? No problem! Click below to join now.</div>
                        <button type="create" class="btn btn-sm btn-primary">Create Account</button>
                    </form>
                </center>
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