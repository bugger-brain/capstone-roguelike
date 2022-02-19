
function Home() {

    return (
        <div>
            <h1><strong><center>WELCOME TO ROGUELIKE!</center></strong></h1>

            <p>Looking to kill 10 minutes? Play our game! Roguelikes are a popular genre of game 
                where the game resets each time you die. Our game is an adventure game based on 
                four elements: air, water, earth, and fire. Solve the puzzles, collect the treasure, 
                and beat the boss to win!

                Make an account and login to save your score, or play as a guest. If you get stuck, 
                save your progress and come back later.
            </p>

            <p>
            Objective: Collect all elements, defeat monsters and collect the ultimate treasure

            How Elements Work: 
            Air - Allows hero push monster back three spaces back. 
            Water - Allows hero to walk on water. 
            Earth - Allows hero to pick up rocks and throw at monster to defeat. 
            Fire - Allows hero to burn walls.

            How Scoring Works: 
            Defeating Monster - 50 points 
            Collecting Element - 100 points 
            Collecting Ultimate Treasure - 200 points

            Lives: Get 100 Gold - Get another life Lose Live When Hero Runs Into Monster

            What to Avoid: 
            Monsters 
            Water (if you do not have the water element)
            </p>

            <Route path="/" exact>
                <LoginForm />
            </Route>

            <Route path="/" exact>
                <PlayButton />
            </Route>

            <Route path="/play" exact>
                <Game />
            </Route>

        </div>
    )
}

export default Home;