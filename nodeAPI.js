const dadosAPI = {
    client_id: "09047a2b-a16d-48de-9c6b-eb8b506725c8",
    client_secret: "87ba5dbd-a503-4899-88b4-b18df52edbf5",
    token: "MDkwNDdhMmItYTE2ZC00OGRlLTljNmItZWI4YjUwNjcyNWM4Ojg3YmE1ZGJkLWE1MDMtNDg5OS04OGI0LWIxOGRmNTJlZGJmNQ=="
}
const options = {
    method: "POST",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Authorization': 'Basic ' + dadosAPI.token,

    },
    body:'grant_type=client_credentials'
}

const urlHM = "https://api-sec-vlc.hotmart.com/security/oauth/token"
const response = await fetch(urlHM, options)
console.log(response)
const data = await response.json()
console.log(data)
