function Rules() {
    return (
    <div>
                <h1 className ="rules-text"><strong><center>WELCOME TO ROGUELIKE!</center></strong></h1>

                <br></br>
                
                <h4 className ="rules-text">
                    Looking to kill 10 minutes? Play our game! Roguelikes are a popular genre of game
                    where the game resets each time you die. Our game is an adventure game based on
                    four elements: air, water, earth, and fire. Solve the puzzles, collect the treasure,
                    and beat the boss to win!
                </h4>
                <h4 className="rules-text">
                    Make an account and login to save your score, or play as a guest. If you get stuck,
                    save your progress and come back later.
                </h4>

                <br></br>

                <h4 className="rules-text">
                    Objective:
                </h4>
                <p>
                    Collect all elements, defeat monsters and collect the ultimate treasure
                </p>
                <h4 className="rules-text">
                    How Elements Work:
                </h4>
                <p className="rules-text">
                    Air - Allows hero push monster back three spaces back.
                </p>
                <p className="rules-text">
                    Water - Allows hero to walk on water.
                </p>
                <p className="rules-text">
                    Earth - Allows hero to pick up rocks and throw at monster to defeat.
                </p>
                <p className="rules-text">
                    Fire - Allows hero to burn walls.
                </p>

                <h4 className="rules-text"> 
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
    )
}

export default Rules;