import { useState, useEffect } from "react";
import "./Play.css";
// import { Grid } from '@react-ui-org/react-ui';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import { Grid } from "@material-ui/core";
// import Placeholder from "@material-ui/core";
// import Paper from '@material-ui/core/Paper';


function Play() {

    const mapSize = 3;
    const gameSize = 3;

    const [game, setGame] = useState(JSON.parse(localStorage.getItem("game")));

    const maps = game.maps;
    const hero = game.hero;
    let mapHeroIsOn = loadMapHeroIsOn(game.hero.tile);
    const mapgrid = document.getElementById("mapgrid");

    function loadMapHeroIsOn(heroTile) {
        let heroTileId = heroTile.tileId;
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
                {/* <p className="login-text">elements: {hero. display truthy in map }</p> */}
                <p className="login-text">gold: {hero.gold}</p>
                <p className="login-text">loc: {t.tileId}{t.type}{t.x}{t.y}</p>
            </>
        );
    }

    // TODO: replace w component
    function displayMapTiles() {
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
        for (let i = 0; i < map.tiles.length; i++) {
            let tile = map.tiles[i];
            if (tile.x == x && tile.y == y) {
                return tile;
            }
        }
        return hero.tile;
    }

    function traverseMap(direction) {
        let nextMapX = mapHeroIsOn.x;
        let nextMapY = mapHeroIsOn.y;
        switch(direction) {
            case 'up':
                nextMapY--;
                break;
            case 'down':
                nextMapY++;
                break;
            case 'left':
                nextMapX--;
                break;
            case 'right':
                nextMapX++;
                break;
        }

        // Check if Hero has hit the edge of the game
        if (nextMapX < 0
            || nextMapX > gameSize
            || nextMapY < 0
            || nextMapY > gameSize) {
            return mapHeroIsOn;
        }

        return findMapByXY(nextMapX, nextMapY);

    }

    function traverseTile(direction) {
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

        // Check if hero has gone off the map
        let heroLeftTheMap = checkIfHeroLeftTheMap(nextX, nextY);

    
        if (nextMap) {
            mapHeroIsOn = nextMap;
        }

        const nextTile = findTileOnMapByXY(mapHeroIsOn, nextX, nextY);
        hero.tile = nextTile;

        const clone = { ...game };
        clone.hero = hero;
        localStorage.setItem("game", JSON.stringify(clone));
        setGame(clone);
    }

    function findTileOnMapByXY(x, y) {
        let nextMap = null;
        if (x > mapSize) {
            nextMap = traverseMap('right');
            x = 0;
        } else if (x < 0) {
            nextMap = traverseMap('left');
            x = mapSize;
        } else if (nextY > mapSize) {
            nextMap = traverseMap('down');
            y = 0;
        } else if (y < 0) {
            nextMap = traverseMap('up');
            y = mapSize;
        }
    }

    function decideMovement() {
        // check to see if hero stayed on the map
        

    }

    function onkeydown(e) {
        switch (e.key) {
            case 'ArrowUp':
                traverseTile('up');
                break;
            case 'ArrowDown':
                traverseTile('down');
                break;
            case 'ArrowLeft':
                traverseTile('left');
                break;
            case 'ArrowRight':
                traverseTile('right');
                break;
        }
    }

    useEffect(() => {
        mapHeroIsOn = loadMapHeroIsOn(hero.tile);
        document.addEventListener('keydown', onkeydown);
        return () => document.removeEventListener("keydown", onkeydown);
    }, []);

    return (
        <div>
            {displayHero()}
            <br /><br />
            <h3 className="login-text">Map {mapHeroIsOn.x}{mapHeroIsOn.y}</h3>
            {displayMapTiles()}
        </div>
    );
}

export default Play;