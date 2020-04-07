import React, { useState } from "react";
import LinkedIn from "../img/li-white.png"
import Github from "../img/GitHub-Mark-Light-64px.png"
import "../queries.css"

const Header = (props)=> {
    
    // const [click, setClick] = useState(null);
    

    // const homeClicked = ()=> (props.homeChange)
        
    
    
    return(
        <header>
            <div className="row-header">
                <p className="name" 
                    onClick={()=> {
                        props.homeClick();
                        }}
                        >
                Matthew Hurst</p>
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
                            props.contactClick();
                        }}     
                        >
                            Contact
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
        </header>
    )
}


export default Header;