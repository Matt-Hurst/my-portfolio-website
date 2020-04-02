import React, { useState } from "react";
import LinkedIn from "../img/li-white.png"
import Github from "../img/GitHub-Mark-Light-64px.png"

const Header = (props)=> {
    
    const [click, setClick] = useState(null);
    

    // const homeClicked = ()=> (props.homeChange)
        
    
    
    return(
        <header>
            <div className="row-header">
                <a href="#" 
                onClick={()=> {
                   props.homeClick();
                }}
                >
                <h1 className="name">Matthew Hurst</h1>
                </a>
                <ul className="nav">
                    <li>
                        <a href="#"
                           onClick={()=> {
                            props.portfolioClick();
                        }}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                         <a href="#"
                            onClick={()=> {
                                props.cvClick();
                            }}
                         >
                            CV
                        </a>
                    </li>
                    <li>
                         <a href="#"
                           onClick={()=> {
                            props.interestsClick();
                        }}                         
                         >
                            Interests
                        </a>
                    </li>
                    <li>
                         <a href="#"
                           onClick={()=> {
                            props.contactClick();
                        }}                         
                         >
                            Contact
                        </a>
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