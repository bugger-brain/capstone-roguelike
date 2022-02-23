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

    const onSubmit = (event) => {
        event.preventDefault();
        login(candidate);
    }

    const onChange = (event) => {
        const lookupCandidate = { ...candidate };

        lookupCandidate[event.target.name] = event.target.value;
        setCandidate(lookupCandidate);

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
                    <div class="mb-3">
                        <label for="loginUsername" class="form-label">Username</label>
                        <input type="username" class="form-control" id="loginUsername"
                            onChange={onChange} value={candidate.username} required />
                    </div>
                    <div class="mb-3">
                        <label for="loginPassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="loginPassword"
                            onChange={onChange} value={candidate.password} required />
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    {hasError && <div className="alert alert-danger">Bad credentials...</div>}
                </form>
            </center>
        </div>
    )
}

export default Login;