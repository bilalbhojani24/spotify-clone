import React from 'react'

function SingleRow({ track, playSong }) {
    return (
        // <div className="song_row">
        //     <img className="songrow_album" src={track.album.images[0].url} alt="" />
        //     <div className="songrow_info">
        //         <h1>{track.name}</h1>
        //         <p>
        //             {
        //                 track.artists.map((artist) => artist.name).join(", ")
        //             }
        //             {
        //                 track.album.name
        //             }
        //         </p>
        //     </div>
        // </div>

        <div className="song_row" onClick={() => playSong(track.id)}>
            <img className="songrow_album" src={track.album.images[0].url} alt="" />
            <div className="songrow_info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SingleRow
