const baseUrl = `http://localhost:8080/rl/player`

export async function findAll() {
    
    // const init = { method: "GET" };
    const response = await fetch(baseUrl);
    if (response.status === 200){
        return response.json();
    } else if (response.status === 403) {
        return Promise.reject(403);
    }
    return Promise.reject("Could not fetch players. ");
}

// export async function findById(id) {

// }