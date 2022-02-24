import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
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
                localStorage.setItem("player", JSON.stringify(player));
                // console.log("link");
                <Link to="/play" ></Link>
            })
            .catch(() => setHasError(true));
    }

    return (
        <div>
            <center>
                <form onSubmit={onSubmit}>
                    <div className="w-25 ">
                        <label htmlFor="loginUsername" className="form-label" class="login-text">Username</label>
                        <input type="text" className="form-control" name="username" id="loginUsername"
                            onChange={onChange} value={candidate.username} required />
                    </div>
                    <div className="w-25 p-3">
                        <label htmlFor="loginPassword" className="form-label" class="login-text">Password</label>
                        <input type="password" className="form-control" name="password" id="loginPassword"
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