import { useEffect, useState } from "react";
import { findAllPlayers, findPlayerByUsername } from "../services/player-api";


function LeaderBoard() {
    const RANK = {
        username: "",
        score: 0
    }




    const [players, setPlayers] = useState([]);

    //const [rankings, setRankings] = useState([RANK]);

    const [user, setUser] = useState([]);

    useEffect(() => {
        findAllPlayers()
            .then(json => setPlayers(json))
            .catch(console.error)

    }, []);





    const currentRankings = () => {
        let rankings = [];

        for (let i = 0; i < players.length; i++) {
            let high_score = 0;
            for (let g = 0; g < players[i].games.length; g++) {
                if (players[i].games[g].score > high_score) {
                    high_score = players[i].games[g].score
                }
            }

            const newRanking = {
                username: players[i].username,
                score: high_score
            }
            rankings.push(newRanking);
        }
        rankings.sort((a, b) => { return b.score - a.score })
        console.log(rankings);

        return rankings.map(r => (

            <>

                <tr>
                    <th scope="row">1</th>
                    <td>{rankings.username}</td>
                    <td>{rankings.score}</td>
                </tr>
                {/* <tr>
                <th scope="row">2</th>
                <td>{rankings[1].username}</td>
                <td>{rankings[1].score}</td>
        </tr>
        <tr>
                <th scope="row">3</th>
                <td>{rankings[2].username}</td>
                <td>{rankings[2].score}</td>
        </tr>
        <tr>
                <th scope="row">4</th>
                <td>{rankings[3].username}</td>
                <td>{rankings[3].score}</td>
        </tr> */}
            </>




        )
        );



    };





    const renderScoresByUser = () => {
    }










    return (

        <>
            <center><h1 style={{ color: 'white' }}>LeaderBoard!</h1></center>

            <table class="table table-bordered table-dark">
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Username</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRankings()}
                </tbody>
            </table>

            <div>
                <button type="submit" class="button btn-lg btn-danger">
                    <span class="button__text" >View Scores By Username</span>
                </button>
            </div>


        </>
    )

}

export default LeaderBoard;