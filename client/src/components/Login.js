import { useState, useEffect, useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function Login() {

    const [candidate, setCandidate] = useState({
        username: "",
        password: ""
    });
    const [hasError, setHasError] = useState(false);

    const authContext = useContext(AuthContext);

    const onSubmit = (event) => {
        event.preventDefault();
        // login(candidate);
    }

    
    // function login(candidate) {
    // }


    return (
        <div>
            <center>
                <form onSubmit={onSubmit}>
                    <div class="w-25 p-3">
                        <label for="loginUsername" class="form-label">Username</label>
                        <input type="username" class="form-control" id="loginUsername" required></input>
                    </div>
                    <div class="w-25 p-3">
                        <label for="loginPassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="loginPassword" required></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </center>
        </div>
    )
}

export default Login;