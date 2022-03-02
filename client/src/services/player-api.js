const baseUrl = `${window.API_URL}/api/player`
// const baseUrl = `http://localhost:8080/api/player`

export async function findAllPlayers() {
    
    // const init = { method: "POST" };
    const response = await fetch(baseUrl);
    if (response.status === 200){
        return response.json();
    } else if (response.status === 403) {
        return Promise.reject(403);
    }
    return Promise.reject("Could not fetch players. ");
}   

export async function findPlayerByUsername(username) {
    const response = await fetch(`${baseUrl}/${username}`);
    if (response.status === 200){
        return response.json();
    } else if (response.status === 404) {
        return Promise.reject(404);
    }
    return Promise.reject("Invalid username.");
}

async function updatePlayer(player) {
    const init = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("BG_TOKEN")}`
        },
        body: JSON.stringify(player)
    };
    const response = await fetch(`${baseUrl}/${player.username}`, init);
    if (response.status === 204) {
        return Promise.resolve();
    } else if (response.status === 403) {
        return Promise.reject(403);
    }
    return Promise.reject("Could not save player.");
}

export async function deleteByUsername(username) {
    const init = { method: "DELETE", headers: { 
        "Authorization": `Bearer ${localStorage.getItem("BG_TOKEN")}` 
    
    } };
    const response = await fetch(`${baseUrl}/${username}`, init);
    if (response.status === 204) {
        return Promise.resolve();
    } else if (response.status === 403) {
        return Promise.reject(403);
    }
    return Promise.reject("Could not delete player.");
}


// export async function findById(id) {

// }