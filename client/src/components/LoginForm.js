function LoginForm() {

    return (
        <div>
            <center>
                <form>
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="username" class="form-control" id="username" ></input>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password"></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <div id="accountHelp" class="form-text">No account? No problem! Click below to join now.</div>
                    <button type="create"  onClick={} class="btn btn-primary">Create Account</button>
                </form>
            </center>
        </div>
    )
}

export default LoginForm;