import { useState, useEffect } from "react";


function Play() {

    const [game, setGame] = useState(JSON.parse(localStorage.getItem("game")));

    const maps = game.maps;
    const hero = game.hero;
    console.log(game);
    let heroTileId = game.hero.tile.tileId;
    let mapHeroIsOn = loadMapHeroIsOn();

    function loadMapHeroIsOn() {
        for (let i = 0; i < maps.length; i++) {
            const map = maps[i];
            const tiles = map.tiles;
            for (let j = 0; j < tiles.length; j++) {
                const tile = tiles[j];
                if (tile.tileId == heroTileId) {
                    return map;
                }
            }
        }
    }

    function displayHero() {
        const t = hero.tile;
        return (
            <>
                <p className="login-text">hero{hero.heroId}</p>
                <p className="login-text">hp: {hero.hp}</p>
                <p className="login-text">lives: {hero.lives}</p>
                {/* <p class="login-text">elements: {hero. display truthy in map }</p> */}
                <p className="login-text">gold: {hero.gold}</p>
                <p className="login-text">loc: {t.tileId}{t.type}{t.x}{t.y}</p>
            </>
        );
    }

    // TODO: replace w component
    function displayMap() {
        return mapHeroIsOn.tiles.map(t => (
            <>
                <p className="login-text">tile:{t.tileId}{t.type}{t.x}{t.y}</p>
            </>
        ));
    }

    function findMapByXY(x, y) {
        for (let i = 0; i < maps.length; i++) {
            let map = maps[i];
            if (map.x == x && map.y == y) {
                return map;
            }
        }
        return null;
    }

    function findTileOnMapByXY(map, x, y) {
        console.log({map, x, y});
        // debugger;
        for (let i = 0; i < map.tiles.length; i++) {
            let tile = map.tiles[i];
            if (tile.x == x && tile.y == y) {
                console.log("found:", tile)
                return tile;
            }
        }
        return hero.tile;
    }

    function moveHero(direction) {
        let nextX = hero.tile.x;
        let nextY = hero.tile.y;
        switch (direction) {
            case 'up':
                nextY--;
                break;
            case 'down':
                nextY++;
                break;
            case 'left':
                nextX--;
                break;
            case 'right':
                nextX++;
                break;
        }

        const nextTile = findTileOnMapByXY(mapHeroIsOn, nextX, nextY);
        hero.tile = nextTile;

        const clone = { ...game };
        clone.hero = hero;
        localStorage.setItem("game", JSON.stringify(clone));
        setGame(clone);
    }

    function onkeydown(e) {
        switch (e.key) {
            case 'ArrowUp':
                moveHero('up');
                break;
            case 'ArrowDown':
                moveHero('down');
                break;
            case 'ArrowLeft':
                moveHero('left');
                break;
            case 'ArrowRight':
                moveHero('right');
                break;
        }
    }

    useEffect(() => {
        mapHeroIsOn = loadMapHeroIsOn();

        document.addEventListener('keydown', onkeydown);
        return () => document.removeEventListener("keydown", onkeydown);
    }, []);



    return (
        <div>
            <div>
                {displayHero()}
                <br /><br />

                {displayMap()}
            </div>
        </div>
    );
}

export default Play;