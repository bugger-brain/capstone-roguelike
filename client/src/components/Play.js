import { useState, useEffect } from "react";
import "./Play.css";



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

    function adjustHero(direction, x, y) {
        switch (direction) {
            case 'up':
                y = mapSize;
                break;
            case 'down':
                y = 0;
                break;
            case 'left':
                x = mapSize;
                break;
            case 'right':
                x = 0;
                break;
        }
        traverseTile(x, y);
    }

    function traverseMap(x, y) {
        const nextMap = findMapByXY(x, y);
        mapHeroIsOn = nextMap;

        const clone = { ...game };
        clone.hero = hero;
        setHeroState({ ...hero });

        localStorage.setItem("game", JSON.stringify(clone));
        setGame(clone);
    }

    function traverseTile(x, y) {
        const nextTile = findTileOnMapByXY(mapHeroIsOn, x, y);
        hero.tile = nextTile;

        const clone = { ...game };
        clone.hero = hero;
        setHeroState({ ...hero });

        localStorage.setItem("game", JSON.stringify(clone));
        setGame(clone);
    }

    function decideMovement(direction) {
        let tileCords = nextCords(direction, hero.tile);
        let nextX = tileCords.x;
        let nextY = tileCords.y;
        let mapEdge = hitWhichEdgeOf(mapSize, nextX, nextY);
        if (mapEdge === '' || mapEdge === "") {
            // let  = analyseTile();
            traverseTile(nextX, nextY);
        } else {
            let mapCords = nextCords(direction, mapHeroIsOn);
            let nextMapX = mapCords.x;
            let nextMapY = mapCords.y;
            let gameEdge = hitWhichEdgeOf(gameSize, nextMapX, nextMapY);
            debugger;
            if (gameEdge === '' || gameEdge == "") {
                traverseMap(nextMapX, nextMapY);
                adjustHero(direction, nextX, nextY);
            } else {
                // do nothing
                console.log("hit game edge");
            }
        }
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

        let rtn = {
            x: nextX,
            y: nextY
        };
        return rtn;

    }

    function hitWhichEdgeOf(size, x, y) {
        if (x > size) {
            return 'right';
        } else if (x < 0) {
            return 'left';
        } else if (y > size) {
            return 'down';
        } else if (y < 0) {
            return 'up';
        } else {
            return '';
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