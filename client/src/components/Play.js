import { useState, useEffect } from "react";
import "./Play.css";
// import { Grid } from '@react-ui-org/react-ui';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import { Grid } from "@material-ui/core";
// import Placeholder from "@material-ui/core";
// import Paper from '@material-ui/core/Paper';


function Play() {

    const mapSize = 15;
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
       
        
        let tableHtml = '<table style="border: 1px solid black;"><tbody>';

        //need to change loops to be map dimensions
    for (let row = 0; row <= mapSize; row++) {
        tableHtml += "<tr>";
        
        for (let col = 0; col <= mapSize; col++) {
            let heroTile = game.hero.tile;
           let tile = findTileOnMapByXY(mapHeroIsOn, row, col);
            if(heroTile.x == col && heroTile.y == row){
                tableHtml +=  `<td id="td${row}_${col}" style="width:25px;height:25px;border:0px solid black;background-color:#8341be"></td>`;
            }
            else if(tile.type == 'water'){
                tableHtml +=  `<td id="td${row}_${col}" style="width:25px;height:25px;border:0px solid black;background-color:#36eaf0"></td>`;
            }
            else if(tile.type == 'stone'){
                tableHtml +=  `<td id="td${row}_${col}" style="width:25px;height:25px;border:0px solid black;background-color:#9e9b9b"></td>`;
            }
            else if(tile.type == 'grass'){
                tableHtml +=  `<td id="td${row}_${col}"style="width:25px;height:25px;border:0px solid black;background-color:#8af036"></td>`;
            }
            else if(tile.type == 'wall'){
                tableHtml +=  `<td id="td${row}_${col}" style="width:25px;height:25px;border:0px solid black;background-color:#6e320e"></td>`;
            }
            else if(tile.type == 'floor'){
                tableHtml +=  `<td id="td${row}_${col}" style="width:25px;height:25px;border:0px solid black;background-color:#030100"></td>`;
            }
            else if(tile.type == 'monster'){
                tableHtml +=  `<td id="td${row}_${col}" style="width:25px;height:25px;border:0px solid black;background-color:#f6270a"></td>`;
            }
            else{
                tableHtml += `<td id="td${row}_${col}" style="width:25px;height:25px;border:0px solid black;background-color:#ffffff"></td>`;
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
           
            <h3 className="login-text">Map {mapHeroIsOn.x}{mapHeroIsOn.y}</h3>
        <div id= "grid">
        {displayMapTiles()}
        </div>
        </div>
        

       
    );
}

export default Play;