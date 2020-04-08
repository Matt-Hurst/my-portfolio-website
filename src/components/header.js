import React, { useState } from "react";
import LinkedIn from "../img/li-white.png"
import Github from "../img/GitHub-Mark-Light-64px.png"
import "../queries.css"

const Header = (props)=> {
    
    const [hamClicked, setHamClicked] = useState(false);
           
    const hamClick = () => {
        hamClicked ? setHamClicked(false) : setHamClicked(true)
    };
    
    const DropMenu = ()=> {
        return (
            <div className="dropBackGround">
                <ul className="dropMenu">
                    <li
                        onClick={()=> {
                            props.portfolioClick();
                        }}
                        >
                            Portfolio
                    </li>
                    <li onClick={()=> {
                            props.interestsClick();
                        }}   
                        >
                            Interests
                    </li>
                    <li onClick={()=> {
                            props.certsClick();
                        }}     
                        >
                            Certificates
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/matthew-a-hurst/" target="blank">
                        {<img src={LinkedIn} className="logo"></img>}
                        </a>
                        <a href="https://github.com/Matt-Hurst" target="blank">
                            {<img src={Github} className="logo"></img>}
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

    return(
        <header>
            <div className="row-header">
                <p className="name" 
                    onClick={()=> {
                        props.homeClick();
                        }}
                        >
                Matthew Hurst</p>
                <div className="menu-wrap">
                    <div className="hamburger">
                        <h1 className="hamIcon" onClick={hamClick}>&#9776;</h1>
                    { hamClicked && <DropMenu />}
                    </div>
                    <div className="menu">
                            <ul className="nav">
                                <li
                                    onClick={()=> {
                                        props.portfolioClick();
                                    }}
                                    >
                                        Portfolio
                                </li>
                                <li onClick={()=> {
                                        props.interestsClick();
                                    }}   
                                    >
                                        Interests
                                </li>
                                <li onClick={()=> {
                                        props.certsClick();
                                    }}     
                                    >
                                        Certificates
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/matthew-a-hurst/" target="blank">
                                    {<img src={LinkedIn} className="logo"></img>}
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Matt-Hurst" target="blank">
                                        {<img src={Github} className="logo"></img>}
                                    </a>
                                </li>
                            </ul>
                    </div>
                    </div>
            </div>
        </header>
    )
}


export default Header;