import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
        <IconButton>
            <PersonIcon fontSize="large" className="header_icon"/>
        </IconButton>
        
        <img src="https://wallpapercave.com/wp/wp2552200.jpg" alt="logo" className="header_image" />

        <IconButton>
            <ForumIcon fontSize="large" className="header_icon"></ForumIcon>
        </IconButton>
        
        </div>
    )
}

export default Header
