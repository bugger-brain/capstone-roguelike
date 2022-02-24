
function Register() {


    const onSubmit = (event) => {
        event.preventDefault();
        // login(candidate);
    }


    return (
        <div>
            <center>
                <form onSubmit={onSubmit}>
                    <div className="w-25 p-3">
                        <label for="registerUsername" className="form-label">Username</label>
                        <input type="username" className="form-control" id="registerUsername" required></input>
                    </div>
                    <div className="w-25 p-3">
                        <label for="registerPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="registerPassword" required></input>
                    </div>
                    <div className="w-25 p-3">
                        <label for="registerRepassword" className="form-label">Re-enter Password</label>
                        <input type="password" className="form-control" id="registerRepassword" required></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </center>
        </div>
    )
}

export default Register;