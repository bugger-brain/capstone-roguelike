    import { useEffect, useState } from "react";
    import { findAllPlayers, findPlayerByUsername } from "../services/player-api";


    function LeaderBoard(){
        const RANK = {
            username: "",
            score: 0
        }

        const PLAYERS = {
            playerId: 1,
            username: 'testytest',
            password: '1234',
            hero: {},
            games:[]
        }

        const [players, setPlayers] = useState([PLAYERS]);

        const [rankings, setRankings] = useState([RANK]);
    

        
    
        
        
//for some reason player is undefined here 
//don't know where to call this
        const currentRankings = () => {
            useEffect(() => {
                findAllPlayers()
                .then(json => setPlayers(json))
                .catch(console.error)
    
            }, []);
            
        for(let i = 0; i < players.length; i++){
            let high_score = 0;
            for(let g = 0; g < players.games.length; g++){
                if (players[i].games[g].score > high_score){
                    high_score = players[i].games[g].score

                    console.log(players[i].games[g].length);
                    console.log(players.length)
            
                }
            }
        
            const newRanking = {
                username: players[i].username,
                score: high_score
            }
            setRankings([...rankings, newRanking]);
        }

        setRankings(rankings.sort((a,b) => {return b.score - a.score}));
        
    };
    

    
    

        const renderScoresByUser = (event) => {
            //find player by username api function

            useEffect(() => {
                findPlayerByUsername()
                .then(json => setPlayers(json))
    
            }, []);
            
    

        }

        
        
        
return(
            
    <>  
        <center><h1>LeaderBoard!</h1></center>
        <table class="table table-bordered table-light">
        <thead>
            <tr>
                <th scope="col">Rank</th>
                <th scope="col">Username</th>
                <th scope="col">Score</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>{rankings[0].username}</td>
                <td>{rankings[0].score}</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td ></td>
                </tr>
            <tr>
                <th scope="row">4</th>
                <td ></td>
                </tr>
            <tr>
                <th scope="row">5</th>
                <td> </td>
            </tr>
            <tr>
                <th scope="row">6</th>
                <td > </td>
            </tr>
        </tbody>
        </table>
        <div>
        <form onSubmit={renderScoresByUser()}>

            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="username" class="form-control" id="username" ></input>
            </div>
            <div>
            <button type="submit"  class="button btn-lg btn-warning">
                        <span class="button__text">View My Scores</span>
                    </button>
                </div>
            </form>

            </div>
        </>
            )
            
        }

    export default LeaderBoard;