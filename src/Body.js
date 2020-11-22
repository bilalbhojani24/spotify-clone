import React from 'react'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SingleRow from './SingleRow'


function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    const playSong = (id) => {
        spotify
            .play({
                uris: [`spotify:track:${id}`],
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body_text">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="body_shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {/* list of songs */}
                {discover_weekly?.tracks.items.map((item) => {
                    return (
                        <SingleRow track={item.track} playSong={playSong} />
                    )
                })}
            </div>
        </div>
    )
}

export default Body
