// documentation link -
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/en/authorize"

const redirectURI = "http://localhost:3000/";

const clientId = "c235905ad42c49d59fc1485c725fbb9b";

const scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-private",
    "playlist-read-collaborative",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial
        }, {});
}

export const loginurl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`;