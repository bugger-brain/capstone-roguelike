import { useNavigate } from "react-router-dom";


function GameLoadCard({ game }) {

    const navigate = useNavigate();

    function loadGame(game) {
        localStorage.setItem("game", JSON.stringify(game));
        navigate("/play");
    }

    function deleteGame(game) {
        // under construction
    }

    function calculateGameProgress(game) {
        return "under construction";
    }

    return (
        <div className="card bg-info w-25 p-3">
            {/* <p><b>Game Id: {game.gameId}</b></p> */}
            <p><b>Game progress: {calculateGameProgress(game)}</b></p>
            <p><b>Score: {game.score}</b></p>
            <div className="btn-group">
                <button type="button" className="btn w-25 btn-success" onClick={() => loadGame(game)}>Load</button>
                <button type="button" className="btn w-25 btn-warning" onClick={() => deleteGame(game)}>Delete</button>
            </div>
        </div>

    );
}

export default GameLoadCard;