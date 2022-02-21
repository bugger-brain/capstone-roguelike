import { useEffect, useState } from "react";
import { findAll } from "../services/player-api";


function Play() {

    const [players, setPlayers] = useState([]);


    useEffect(() => {
        findAll()
        .then(json => setPlayers(json))
        .catch(console.error)
    }, []); 

    return (
        <div>
            {players.map(p => <div>{p.username}</div>)}
        </div>
    );
}

export default Play;