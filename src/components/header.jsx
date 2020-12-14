import React from 'react';
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet"
import LinkedIn from "../img/li-white.png"
import Github from "../img/GitHub-Mark-Light-64px.png"
import favicon from "../img/laptop.png"

import "./header.css"
import { useState } from 'react';


const Header = ()=> {
    
    const [dropMenu, setDropMenu] = useState(false)  
  
    const handleClick = () => { dropMenu ? setDropMenu(false): setDropMenu(true)  }
    const handleLinkClick = () => { setDropMenu(false) }
    
    
    //By default want the drop menu icon showing, and to return drop menu (sepereate function) if clicked.
    //Also have a navbar element
    //When reaches certain screen size add className="hidden" to dropmenu and remove from navbar

    const DropDownNav = () => {
        return (
            <nav className="hamburger-nav">
                <div className="drop-down-menu">
                    <ul>
                        <Link to="/portfolio">
                            <li onClick={handleLinkClick}>Portfolio</li>
                        </Link>
                        <Link to="/interests">
                            <li onClick={handleLinkClick}>Interests</li>
                        </Link>
                        <div className="logo-links">
                            <a href="https://www.linkedin.com/in/matthew-a-hurst/" target="blank">
                            {<img src={LinkedIn} className="drop-logo" alt="LinkedIn logo"></img>}
                            </a>
                            <a href="https://github.com/Matt-Hurst" target="blank">
                            {<img src={Github} className="drop-logo" alt="Github logo"></img>}
                            </a>
                        </div>
                    </ul>
                </div>
            </nav>
            
        )
    }

    return (
        <div>
            <Helmet>
                <link rel="icon" href={favicon} />
            </Helmet>  
            <div className="header-container">
                <div>
                    <Link className="name" to="/" onClick={handleLinkClick}>Matt Hurst</Link>
                </div>
                <div className="hamburger">
                    <div className="ham-icon" onClick={handleClick}>&#9776;</div>
                </div>             
              
                <nav className="navbar">
                    <ul>
                        <Link to="/portfolio">
                            <li>Portfolio</li>
                        </Link>
                        <Link to="/interests">
                            <li>Interests</li>
                        </Link>
                        <a href="https://www.linkedin.com/in/matthew-a-hurst/" target="blank">
                        {<img src={LinkedIn} className="logo" alt="LinkedIn logo"></img>}
                        </a>
                        <a href="https://github.com/Matt-Hurst" target="blank">
                        {<img src={Github} className="logo" id="github-logo" alt="Github logo"></img>}
                        </a>
                    </ul>
                </nav>
            </div>
            { dropMenu && <DropDownNav />}
        </div> 
    )
}

export default Header;