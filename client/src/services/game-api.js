const baseUrl = `${window.API_URL}/api/game`

export async function findAllGames() {
    

    const response = await fetch(baseUrl);
    if (response.status === 200){
        let j = response.json();
        return j;
    } else if (response.status === 403) {
        return Promise.reject(403);
    }
    return Promise.reject("Could not fetch games. ");
}


export async function findGameById(id) {
    const response = await fetch(`${baseUrl}/${id}`);
    if (response.status === 200){
        return response.json();
    } else if (response.status === 404) {
        return Promise.reject(404);
    }
    return Promise.reject("Game not found");
}

export async function addGame(game) {
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(game)
    }

    const response = await fetch(`${baseUrl}`, init);
    if (response.status === 201) {
        return Promise.resolve();
    } else if (response.status === 400) {
        const messages = await response.json();
        return Promise.reject({ status: response.status, messages });
    }

    return Promise.reject({ status: response.status });
}

async function updateGame(game) {
    const init = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(game)
    };
    const response = await fetch(`${baseUrl}/${game.id}`, init);
    if (response.status === 204) {
        return Promise.resolve();
    } else if (response.status === 403) {
        return Promise.reject(403);
    }
    return Promise.reject("Could not save game.");
}



export async function saveGame(game) {
    return game.id > 0 ? updateGame(game) : addGame(game);
}


export async function deleteGameById(id) {
    const init = { 
        method: "DELETE"}
    const response = await fetch(`${baseUrl}/${id}`, init);
    if (response.status === 204) {
        return Promise.resolve();
    } else if (response.status === 403) {
        return Promise.reject(403);
    }
    return Promise.reject("Could not delete game.");
}

