import { useState, useEffect } from "react";
import "./Play.css";
// import { Grid } from '@react-ui-org/react-ui';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import { Grid } from "@material-ui/core";
// import Placeholder from "@material-ui/core";
// import Paper from '@material-ui/core/Paper';


function Play() {

    const mapSize = 1;
    const gameSize = 3;

    const [game, setGame] = useState(JSON.parse(localStorage.getItem("game")));

    const maps = game.maps;
    const hero = game.hero;
    let mapHeroIsOn = loadMapHeroIsOn(game.hero.tile);

    const [heroState, setHeroState] = useState(hero);

    useEffect(() => {
        mapHeroIsOn = loadMapHeroIsOn(hero.tile);
        document.addEventListener('keydown', onkeydown);
        return () => document.removeEventListener("keydown", onkeydown);
    }, []);

    useEffect(() => {
        displayMapTiles();
    }, [heroState]);

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

        let tableHtml = '<table style="border: 1px solid black;"><tbody>';

        //need to change loops to be map dimensions
        for (let row = 0; row <= mapSize; row++) {
            tableHtml += "<tr>";

            for (let col = 0; col <= mapSize; col++) {
                let heroTile = game.hero.tile;
                let tile = findTileOnMapByXY(mapHeroIsOn, col, row);
                if (heroTile.x == col && heroTile.y == row) {
                    tableHtml += `<td id="td${col}_${row}" class="hero"></td>`;
                }
                else if (tile.type == 'water') {
                    tableHtml += `<td id="td${col}_${row}" class="water"></td>`;
                }
                else if (tile.type == 'stone') {
                    tableHtml += `<td id="td${col}_${row}" class="stone"></td>`;
                }
                else if (tile.type == 'grass') {
                    tableHtml += `<td id="td${col}_${row}" class="grass"></td>`;
                }
                else if (tile.type == 'wall') {
                    tableHtml += `<td id="td${col}_${row}" class="wall"></td>`;
                }
                else if (tile.type == 'floor') {
                    tableHtml += `<td id="td${col}_${row}" class="floor"></td>`;
                }
                else if (tile.type == 'monster') {
                    tableHtml += `<td id="td${col}_${row}" class="monster"></td>`;
                }
                else {
                    tableHtml += `<td id="td${col}_${row}" class="blank"></td>`;
                }
            }
            tableHtml += "</tr>"
        }
        tableHtml += "</tbody></table>"
        document.getElementById("grid").innerHTML = tableHtml;
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

        // call setCurMap update curMap which will trigger rerender display

        let nextMapX = mapHeroIsOn.x;
        let nextMapY = mapHeroIsOn.y;
        switch (direction) {
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

    function traverseTile(nextX, nextY) {

        const nextTile = findTileOnMapByXY(mapHeroIsOn, nextX, nextY);
        hero.tile = nextTile;

        console.log(hero);

        const clone = { ...game };
        clone.hero = hero;
        setHeroState({ ...hero });

        localStorage.setItem("game", JSON.stringify(clone));
        setGame(clone);
    }

    function nextCords(direction, obj) {
        let nextX = obj.x;
        let nextY = obj.y;
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

        return { nextX, nextY };
    }

    function hitWhichEdgeOf(size, x, y) {
        if (x > size) {
            return 'right';
            // x = 0;
        } else if (x < 0) {
            return 'left';
            // x = size;
        } else if (y > size) {
            return 'down';
            // y = 0;
        } else if (y < 0) {
            return 'up';
            // y = size;
        } else {
            return '';
        }
    }

    function decideMovement(direction) {
        let { nextX, nextY } = nextCords(direction, hero.tile);
        let mapEdge = hitWhichEdgeOf(mapSize, nextX, nextY);

        if (mapEdge === '') {
            // let  = analyseTile()
            traverseTile(nextX, nextY);
        } else {
            let { nextMapX, nextMapY } = nextCords(direction, mapHeroIsOn);
            let gameEdge = hitWhichEdgeOf(gameSize, nextMapX, nextMapY);
            if (gameEdge === '') {

            }

        }
    }

    function onkeydown(e) {
        switch (e.key) {
            case 'ArrowUp':
                decideMovement('up');
                break;
            case 'ArrowDown':
                decideMovement('down');
                break;
            case 'ArrowLeft':
                decideMovement('left');
                break;
            case 'ArrowRight':
                decideMovement('right');
                break;
        }
    }

    return (
        <div>
            {displayHero()}
            <br /><br />

            <h3 className="login-text">Map {mapHeroIsOn.x}{mapHeroIsOn.y}</h3>
            <div id="grid">
            </div>
        </div>



    );
}

export default Play;