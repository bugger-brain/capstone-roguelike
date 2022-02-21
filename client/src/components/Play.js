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
            {players.map(p =>
                <div>
                    <h3>Player: {p.username}</h3>
                    {p.games.map(g =>
                        <div>
                            <h3>Unique Game ID: {g.gameId}</h3>
                            <h3>Score: {g.score}</h3>
                            {g.maps.map(m =>
                                <div>
                                    <h3>Map{m.x}{m.y}:</h3>
                                    {m.tiles.map(t =>
                                        <div>
                                            <p>type: {t.type}, x:{t.x}, y:{t.y}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Play;