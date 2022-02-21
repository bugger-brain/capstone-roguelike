import { Route } from "react-router";


function Home() {

    return (
        <div>
            <div>
                <h1><strong><center>WELCOME TO ROGUELIKE!</center></strong></h1>

                <br></br>
                
                <h4>
                    Looking to kill 10 minutes? Play our game! Roguelikes are a popular genre of game
                    where the game resets each time you die. Our game is an adventure game based on
                    four elements: air, water, earth, and fire. Solve the puzzles, collect the treasure,
                    and beat the boss to win!
                </h4>
                <h4>
                    Make an account and login to save your score, or play as a guest. If you get stuck,
                    save your progress and come back later.
                </h4>

                <br></br>

                <h4>
                    Objective:
                </h4>
                <p>
                    Collect all elements, defeat monsters and collect the ultimate treasure
                </p>
                <h4>
                    How Elements Work:
                </h4>
                <p>
                    Air - Allows hero push monster back three spaces back.
                </p>
                <p>
                    Water - Allows hero to walk on water.
                </p>
                <p>
                    Earth - Allows hero to pick up rocks and throw at monster to defeat.
                </p>
                <p>
                    Fire - Allows hero to burn walls.
                </p>

                <h4>
                    How Scoring Works:
                </h4>
                <p>
                    Defeating Monster - 50 points
                </p>
                <p>
                    Collecting Element - 100 points
                </p>
                <p>
                    Collecting Ultimate Treasure - 200 points
                </p>

                <h4>
                    Lives:
                </h4>
                <p>Get 100 Gold - Get another life Lose Live When Hero Runs Into Monster</p>

                <h4>
                    What to Avoid:
                </h4>
                <p>
                    Monsters
                </p>
                <p>
                    Water (if you do not have the water element)
                </p>

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