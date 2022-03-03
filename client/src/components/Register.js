import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { createPlayer } from '../services/player-api';

function Register() {


    const [player, setPlayer] = useState({
        username: "",
        passwordHash: "",
        confirmPassword: ""
    });
    const [err, setErr] = useState();

    const navigate = useNavigate();

    const onChange = (evt) => {
        const clone = { ...player };
        clone[evt.target.name] = evt.target.value;
        setPlayer(clone);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        if (player.passwordHash !== player.confirmPassword) {
            setErr("passwords do not match");
        } else {
            console.log(player);
            createPlayer(player)
                .then(() => {
                    navigate("/dashboard");
                    localStorage.setItem("player", JSON.stringify(player));
                })
                .catch(err => {
                    if (err.status === 400) {
                        setErr(err.messages[0]);
                    } else {
                        navigate("/register", err.toString());
                    }
                });
        }
    }

    return (
        <div>
            <center>
                <form className="register-form" onSubmit={onSubmit}>
                    <h2 className='register-text'>Register</h2>
                    <div className="w-25 p-3">
                        <label for="registerUsername" className="form-label" className="register-text">Username</label>
                        <input type="text" name="username" className="form-control" id="registerUsername" required
                            value={player.username} onChange={onChange} />
                    </div>
                    <div className="w-25 p-3">
                        <label for="registerPassword" className="form-label" className="register-text">Password</label>
                        <input type="password" name="passwordHash" className="form-control" id="registerPassword" required
                            value={player.passwordHash} onChange={onChange} />
                    </div>
                    <div className="w-25 p-3">
                        <label for="registerRepassword" className="form-label" className="register-text">Confirm Password</label>
                        <input type="password" name="confirmPassword" className="form-control" id="registerRepassword" required
                            value={player.confirmPassword} onChange={onChange} />
                    </div>

                    {err && <div className="alert alert-danger">{err}</div>}
                    <div className="mb-2">
                        <button type="submit" className="btn btn-primary me-1">Submit</button>
                        {/* <Link to="/login" className="btn btn-secondary">Cancel</Link> */}
                    </div>
                </form>
            </center>
        </div >
    )
}

export default Register;