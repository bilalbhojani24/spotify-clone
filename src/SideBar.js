import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

const SidebarOpions = ({ option, Icon }) => {
    return (
        <div className="sidebar_option">
            {Icon && <Icon className="sidebar_option_icon" />}
            {Icon ? <h4>{option}</h4> : <p>{option}</p>}
        </div>
    )
}

function SideBar() {
    const [{ playlists_full }, dispatch] = useDataLayerValue()
    return (
        <div className="sidebar">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify image" className="sidebar__logo" />
            <SidebarOpions option="Home" Icon={HomeIcon} />
            <SidebarOpions option="Search" Icon={SearchIcon} />
            <SidebarOpions option="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />
            <div className="sidebar_btm">
                {
                    playlists_full?.items?.map(playlist => {
                        return (
                            <div>
                                <SidebarOpions option={playlist.name} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SideBar
