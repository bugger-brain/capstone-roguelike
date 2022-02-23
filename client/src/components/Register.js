
function Register() {


    const onSubmit = (event) => {
        event.preventDefault();
        // login(candidate);
    }


    return (
        <div>
            <center>
                <form onSubmit={onSubmit}>
                    <div class="w-25 p-3">
                        <label for="registerUsername" class="form-label">Username</label>
                        <input type="username" class="form-control" id="registerUsername" required></input>
                    </div>
                    <div class="w-25 p-3">
                        <label for="registerPassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="registerPassword" required></input>
                    </div>
                    <div class="w-25 p-3">
                        <label for="registerRepassword" class="form-label">Re-enter Password</label>
                        <input type="password" class="form-control" id="registerRepassword" required></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </center>
        </div>
    )
}

export default Register;