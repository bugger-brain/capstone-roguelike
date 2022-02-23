function Nav(){

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-danger">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Rogue</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/play">Play Game</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/leaderboard">LeaderBoard</a>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    );


}

export default Nav;