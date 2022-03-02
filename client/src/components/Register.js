import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { createUser } from '../services/user-api';

function Register() {


    const [user, setUser] = useState({
        username: "",
        passwordHash: "",
        confirmPassword: ""
    });
    const [err, setErr] = useState();

    const navigate = useNavigate();

    const onChange = (evt) => {
        const clone = { ...user };
        clone[evt.target.name] = evt.target.value;
        setUser(clone);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        if (user.passwordHash !== user.confirmPassword) {
            setErr("passwords do not match");
        } else {
            createUser(user)
                .then(() => navigate.push("/login"))
                .catch(err => {
                    if (err.status === 400) {
                        setErr(err.messages[0]);
                    } else {
                        navigate.push("/error", err.toString());
                    }
                });
        }
    }


    return (
        <div>
            <center>
                <form onSubmit={onSubmit}>
                    <h2 className='register-text'>Register</h2>
                    <div className="w-25 p-3">
                        <label for="registerUsername" className="form-label" className="register-text">Username</label>
                        <input type="username" name="username" className="form-control" id="registerUsername" required
                            value={user.username} onChange={onChange} />
                    </div>
                    <div className="w-25 p-3">
                        <label for="registerPassword" className="form-label" className="register-text">Password</label>
                        <input type="password" name="passwordHash" className="form-control" id="registerPassword" required
                            value={user.passwordHash} onChange={onChange} />
                    </div>
                    <div className="w-25 p-3">
                        <label for="registerRepassword" className="form-label" className="register-text">Re-enter Password</label>
                        <input type="password" name="confirmPassword" className="form-control" id="registerRepassword" required
                            value={user.confirmPassword} onChange={onChange} />
                    </div>

                    {err && <div className="alert alert-danger">{err}</div>}
                    <div className="mb-2">
                        <button type="submit" className="btn btn-primary me-1">Submit</button>
                        <Link to="/" className="btn btn-secondary">Cancel</Link>
                    </div>
                </register-form>
            </center>
        </div >
    )
}

export default Register;