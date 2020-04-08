import React from "react";
import London from "../img/london.jpg";
import "./home.css";
import LinkedIn from "../img/li-white.png";
import Github from "../img/GitHub-Mark-Light-64px.png"
import Header from "./header"


const Home = (props)=> {
    return (
        <div className="home">
            <Header 
                homeClick = {props.homeClick}
                portfolioClick={props.portfolioClick}
                certsClick={props.certsClick}
                interestsClick={props.interestsClick}
                contactClick={props.contactClick}       
            />
            <div className="home-row">
            {/* <ul className="nav">
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
                        {<img src={LinkedIn} className="logo"></img>}
                    </li>
                    <li>
                        {<img src={Github} className="logo"></img>}
                    </li>
                </ul> */}
                <div className="home-text">
                    <p>Welcome. This website showcases Matthew Hurst's </p>
                    <p>portfolio, cv, and interests.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;