import { useState, useEffect, useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { findPlayerByUsername } from "../services/player-api";

function Login() {

    const [candidate, setCandidate] = useState({
        username: "",
        password: ""
    });

    const [hasError, setHasError] = useState(false);
    const authContext = useContext(AuthContext);

    function onSubmit (event) {
        event.preventDefault();
        login(candidate);
    }

    function onChange (event)  {
        const next = { ...candidate };
        next[event.target.name] = event.target.value;
        setCandidate(next);
    }

    function login(candidate) {
        findPlayerByUsername(candidate.username)
            .then(player => {
                localStorage.setItem("player", player);
            })
            .catch(() => setHasError(true));
    }

    return (
        <div>
            <center>
                <form onSubmit={onSubmit}>
                    <div className="w-25">
                        <label htmlFor="loginUsername" className="form-label">Username</label>
                        <input type="text" className="form-control" id="loginUsername"
                            onChange={onChange} value={candidate.username} required />
                    </div>
                    <div className="w-25 p-3">
                        <label htmlFor="loginPassword" className="form-label">Password</label>
                        <input type="text" className="form-control" id="loginPassword"
                            onChange={onChange} value={candidate.password} required />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    {hasError && <div className="alert alert-danger">Bad credentials...</div>}
                </form>
            </center>
        </div>
    )
}

export default Login;