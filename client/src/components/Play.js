import { useState, useEffect } from "react";
import "./Play.css";
// import { Grid } from '@react-ui-org/react-ui';
<<<<<<< HEAD
//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
//import { Grid } from "@material-ui/core";
// import Placeholder from "@material-ui/core";
//import Paper from '@material-ui/core/Paper';
=======
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import { Grid } from "@material-ui/core";
// import Placeholder from "@material-ui/core";
// import Paper from '@material-ui/core/Paper';
>>>>>>> aae6629a72371499c7c980bdfd26eaaa465c70f7


function Play() {

    const mapSize = 3;
    const gameSize = 3;

    const [game, setGame] = useState(JSON.parse(localStorage.getItem("game")));

    const maps = game.maps;
    const hero = game.hero;
    let heroTileId = game.hero.tile.tileId;
    let mapHeroIsOn = loadMapHeroIsOn();
    const mapgrid = document.getElementById("mapgrid");

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

    function moveMap(direction) {
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

        // Check if hero has gone off the map
        let nextMap = null;
        if (nextX > mapSize) {
            nextMap = moveMap('right');
            nextX = 0;
        } else if (nextX < 0) {
            nextMap = moveMap('left');
            nextX = mapSize;
        } else if (nextY > mapSize) {
            nextMap = moveMap('down');
            nextY = 0;
        } else if (nextY < 0) {
            nextMap = moveMap('up');
            nextY = mapSize;
        }

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
            {displayHero()}
            <br /><br />
            {/* <Grid className="mapgrid" columns="1fr 2fr" >
                <Grid className="tilegrid">
                    <p>1</p>
                </Grid>
                <Grid className="tilegrid">
                    <p>2</p>
                </Grid>
                <Grid className="tilegrid">
                    <p>3</p>
                </Grid>
                <Grid className="tilegrid">
                    <p>4</p>
                </Grid>
            </Grid> */}
            {/* <Grid className="mapgrid" columns="1fr 2fr" rows="auto 200px auto">
                <p bordered>Grid item</p>
                <p bordered>Grid item</p>
                <p bordered>Grid item</p>
                <p bordered>Grid item</p>
                <p bordered>Grid item</p>
                <p bordered>Grid item</p>
            </Grid> */}
            {/* <div className="text-center">
                <div className="mapgrid justify-content-center row row-cols-2 col-md-1">
                    <div className="tilegrid">1</div>
                    <div className="tilegrid">2</div>
                    <div className="tilegrid">3</div>
                    <div className="tilegrid">4</div>
                </div>
            </div> */}
            <h3 className="login-text">Map {mapHeroIsOn.x}{mapHeroIsOn.y}</h3>
            {displayMapTiles()}
        </div>
    );
}

export default Play;