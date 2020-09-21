import React from 'react'
import './Header.css'

import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton"
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>

            <img 
            className="header__logo"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WLBYGv8C4NJTAg7X0QDIJAHaEK%26pid%3DApi&f=1" alt=""/>

            <IconButton>
                <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
            
        </div>
    )
}

export default Header
