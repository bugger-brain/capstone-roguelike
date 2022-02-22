import { useEffect, useState } from "react";
import { findAllPlayers } from "../services/player-api";


function Play() {

    const [players, setPlayers] = useState([]);
    const [hero, setHero] = useState({
        heroId: 1,
        hp: 3,
        lives: 10,
        air: false,
        water: false,
        earth: false,
        fire: false,
        keys: 0,
        gold: 50,
        tile: {
            tileId: 1,
            type: "grass",
            x: 0,
            y: 0
        }

    });

    function checkKey(e) {
        var event = window.event ? window.event : e;
        // 39 = right arrow key
        console.log(event.keyCode == 39)
    }

    useEffect(() => {
        findAllPlayers()
            .then(json => {
                setPlayers(json);
                setHero(json[0].games[0].hero)
            })
            .catch(console.error)

    }, []);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
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
            <div>
                <h3>Unique Hero ID: {hero.heroId}</h3>
                <p>HP: {hero.hp}</p>
                <div>
                    {hero.tile.tileId}
                    {hero.tile.type}
                    {hero.tile.x}
                    {hero.tile.y}

                </div>
            </div>
        </div>


    );
}

export default Play;