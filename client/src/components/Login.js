import { useState, useEffect, useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { findPlayerByUsername } from "../services/player-api";

const blankCandidate = {
    username: "",
    password: ""
};

function Login() {

    const [candidate, setCandidate] = useState(blankCandidate);

    const [hasError, setHasError] = useState(false);
    const authContext = useContext(AuthContext);

    const onSubmit = event => {
        event.preventDefault();
        login(candidate);
    };

    const onChange = event => {
        const next = { ...candidate };
        next[event.target.name] = event.target.value;
        setCandidate(next);
    };

    function login(candidate) {
        findPlayerByUsername(candidate.username)
            .then(player => {
                // console.log(player)
                localStorage.setItem("player", JSON.stringify(player));
            })
            .catch(() => setHasError(true));
    }

    function whoami() {
        const p = JSON.parse(localStorage.getItem("player"));
        console.log(p);
    }


    return (
        <div>
            <center>
                <form onSubmit={onSubmit}>
                    <div className="w-25">
                        <label htmlFor="loginUsername" className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" id="loginUsername"
                            onChange={onChange} value={candidate.username} required />
                    </div>
                    <div className="w-25 p-3">
                        <label htmlFor="loginPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="loginPassword"
                            onChange={onChange} value={candidate.password} required />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div>
                        <button type="button" onClick={whoami} className="btn btn-primary">whoami</button>
                    </div>
                    {hasError && <div className="alert alert-danger">Bad credentials...</div>}
                </form>
            </center>
        </div>
    )
}

export default Login;