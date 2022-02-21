const baseUrl = `http://localhost:8080/api/monster`

export async function findAll() {
    

    const response = await fetch(baseUrl);
    if (response.status === 200){
        return response.json();
    } else if (response.status === 403) {
        return Promise.reject(403);
    }
    return Promise.reject("Could not fetch monsters. ");
}