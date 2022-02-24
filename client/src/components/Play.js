function Play() {

    const game = JSON.parse(localStorage.getItem("game"));
    const maps = game.maps;
    const heroTileId = game.hero.tile.tileId;
    const mapHeroIsOn = loadMapHeroIsOn();

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

    function displayMap() {
        return mapHeroIsOn.tiles.map(t => (
            <>
                <p class="login-text">tile:{t.tileId}{t.type}{t.x}{t.y}</p>
            </>
        ));
    }

    return (
        <div>
            <div>
                {displayMap()}
            </div>
        </div>
    );

}

export default Play;