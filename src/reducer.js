export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove token after inishing project
    // token: 'BQC9nmfwcBLUfQmKmLTwtOdBPK5E6jpBShf2s4FeKYmAvzSSiO5us5HiZGBo3Z14ZaFqg2TV9kPqpCiK0oh5U8jHUHzjXPZKv-SNY--7x1zshef2Q2xPzTZR3qLGq3uOKglxrEW1HsbhYeV18dOcA0OE3zcixuEFFRaiF8pcuxU1I7VG9wai',
    // token: null,
    discover_weekly: null,

};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists_full: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
}

export default reducer;