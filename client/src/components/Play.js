function Play() {

    const game = JSON.parse(localStorage.getItem("game"));
    const hero = game.hero;
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

    function displayHero() {
        return (
            <>
                <p class="login-text">hero:{hero.heroId}</p>
            </>
        );
    }

    function displayMap() {
        return mapHeroIsOn.tiles.map(t => (
            <>
                <p class="login-text">tile:{t.tileId}{t.type}{t.x}{t.y}</p>
            </>
        ));
    }

    document.addEventListener('keydown', function (e) {
        switch (e.key) {
            case 'ArrowUp':
                alert('up');
                break;
            case 'ArrowDown':
                alert('down');
                break;
            case 'ArrowLeft':
                alert('left');
                break;
            case 'ArrowRight':
                alert('right');
                break;

        }
    });

    return (
        <div>
            <div>
                {displayHero()}
                {displayMap()}
            </div>
        </div>
    );
}

export default Play;