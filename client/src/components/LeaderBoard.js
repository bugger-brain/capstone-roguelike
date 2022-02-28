import { useEffect, useState } from "react";
import { findAllPlayers} from "../services/player-api";


function LeaderBoard() {
    const RANK = {
        username: "",
        score: 0
    }




    const [players, setPlayers] = useState([]);

   

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
        let tableHtml; //'<table><tbody>';
        for (let row = 0; row < rankings.length; row++) {
            tableHtml += "<tr>";
            for (let col = 0; col < 3; col++) {
                if(col == 1 ){
                    tableHtml +=  `<td id="td${row}_${col}">${rankings[row].username}</td>`;
                }else if(col ==2){
                    tableHtml += `<td id="td${row}_${col}">${rankings[row].score}</td>`;
                }else{
                    tableHtml += `<td id="td${row}_${col}">${row +1}</td>`;
                }
            }
            tableHtml += "</tr>"

        }
        //tableHtml += "</tbody></table>"
        document.getElementById("board").innerHTML = tableHtml;

    }
        // return rankings.map(r => (
            
        //     <>

        //         <tr>
        //             <th scope="row">1</th>
        //             <td>{rankings[0].username}</td>
        //             <td>{rankings[0].score}</td>
        //         </tr>
                {/* {/* <tr>
          
          
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
        </tr> </> */}
        
            
        













    return (

        <>
            <center><h1 style={{ color: 'white' }}>LeaderBoard!</h1></center>

            <table className="table table-bordered table-dark">
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Username</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody id="board">
                    {currentRankings()}
                </tbody>
            </table>
            {/* <div id="board"></div> */}

            <div>
                <button type="submit" className="button btn-lg btn-danger">
                    <span className="button__text" >View Scores By Username</span>
                </button>
            </div>


        </>
    )

}

export default LeaderBoard;