import { useState, useEffect, useContext  } from "react";
import { useNavigate } from "react-router-dom";
import GameLoadCard from "./GameLoadCard";
import { addGame, findGameById } from "../services/game-api";
import { addMap } from "../services/map-api";
import { addTile } from "../services/tile-api";
import { addHero } from "../services/hero-api";

function Dashboard() {

    const navigate = useNavigate();
    const player = JSON.parse(localStorage.getItem("player"));
    const games = player.games;
    const [defaultGame, setDefaultGame] = useState({
        score: 0,
        blueprint: "true"
    });
    const [game, setGame] = useState({});
    const newGame ={
        score: 0,
        isBlueprint: false
    }
    const [maps, setMaps] = useState([]);

    useEffect(() => {
        findGameById(1)
           .then(json => setDefaultGame(json))
           .catch(console.error)
    }, []); 

    useEffect(() => {
        addGame(newGame)
           .then(json => setGame(json))
           .catch(console.error)
    }, []); 

    function postMap(postingMap){
        addMap(postingMap)
            .then(json => setMaps([...maps, json]))
            .catch(console.error)
    

       

    }
    function createNewGame() {
        
        //map post 
        console.log(defaultGame);
        //console.log(game);
        //changing gameIds in Maps
        // let newMaps = [];
        // for(let i=0; i<defaultGame.maps.length; i++){
        //     const newMap = {
        //         gameId: game.gameId,
        //         x: defaultGame.maps[i].x,
        //         y: defaultGame.maps[i].y
        //     }
        
        //     newMaps.push(addMap(newMap)) 
        //     console.log(newMaps);
        // }

        

        //changing mapIds in tiles
        // let newTiles = [];
        // for(let i=0; i<defaultGame.maps; i++){
        //     for(let k = 0; k<defaultGame.maps[i].tiles.length; k++){
        //         const newTile = {
        //             type: defaultGame.maps[i].tiles[k].type,
        //             mapId: newMaps[i].mapId,
        //             x: defaultGame.maps[i].tiles[k].x,
        //             y: defaultGame.maps[i].tiles[k].y
        //         }
        //         newTiles.push(addTile(newTile)) 
        //     }
  
        // }

        // console.log(newTiles)

    //    const newHero = {
    //        gameId: game.gameId,
    //        hp: 500,                     //whatever baseline we want
    //        lives: 3,
    //        air: "false",
    //        water: "false",
    //        earth: "false",
    //        fire: "false",
    //        gold: 0,
    //        tile: defaultGame.hero.tile //don't know if this will work
    //    };
    //    let hero = addHero(newHero); 
    //    let heroId = hero.heroId;
    //    console.log(findGameById(game.gameId))
     
      
       
    
        

    // } 
    }

    function saveGame(){

    }

    function displayGames() {
        // display default if games == null
      
        return games.map(g => (
            <GameLoadCard game={g} />
        ));
    }

    return (
        <div>
            <div>
                <br></br>
                <div>
                    {/* <center>
                        <button type="button" className="btn p-3 btn-lrg btn-danger">
                            Edit Profile
                        </button> </center> */}
                </div>
                <div>
                    <center>
                        <button type="button" className="btn btn-lrg btn-info" onClick={()=> {createNewGame()}} >
                            Start a New Game!
                        </button></center>
                </div>
                <div>
                    {displayGames()}
                </div>


            </div>
        </div>
    );
}

export default Dashboard;