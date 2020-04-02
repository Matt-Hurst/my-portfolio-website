import React, { useState } from "react";
import Header from "./header";
import Home from "./home";
import Portfolio from "./portfolio";
import CV from "./cv";
import Interests from "./interests";
import Contact from "./contact";

const App = ()=> {
    
    const [home, setHome] = useState(false);
    const [portfolio, setPortfolio] = useState(true);
    const [cv, setCv] = useState(false);
    const [interests, setInterests] = useState(false);
    const [contact, setContact] = useState(false);
    
    
    const homeClicked = () => {
        setHome(true);
        setPortfolio(false);
        setCv(false);
        setInterests(false);
        setContact(false);
    } 

    const portfolioClicked = () => {
        setHome(false);
        setPortfolio(true);
        setCv(false);
        setInterests(false);
        setContact(false);
    }

    const cvClicked = () => {
        setHome(false);
        setPortfolio(false);
        setCv(true);
        setInterests(false);
        setContact(false);
    }

    const interestsClicked = () => {
        setHome(false);
        setPortfolio(false);
        setCv(false);
        setInterests(true);
        setContact(false);
    }

    const contactClicked = () => {
        setHome(false);
        setPortfolio(false);
        setCv(false);
        setInterests(false);
        setContact(true);
    }
    
    
    return (
        <div>
            {home && <Home 
                homeClick={homeClicked}
                portfolioClick={portfolioClicked}
                cvClick={cvClicked}
                interestsClick={interestsClicked}
                contactClick={contactClicked}            
            />}
            {portfolio &&  <Portfolio 
                homeClick={homeClicked}
                portfolioClick={portfolioClicked}
                cvClick={cvClicked}
                interestsClick={interestsClicked}
                contactClick={contactClicked}
            />}
            {cv &&  <CV 
                homeClick={homeClicked}
                portfolioClick={portfolioClicked}
                cvClick={cvClicked}
                interestsClick={interestsClicked}
                contactClick={contactClicked}
            />}
            {interests &&  <Interests 
                homeClick={homeClicked}
                portfolioClick={portfolioClicked}
                cvClick={cvClicked}
                interestsClick={interestsClicked}
                contactClick={contactClicked}
            />}
            {contact &&  <Contact 
                homeClick={homeClicked}
                portfolioClick={portfolioClicked}
                cvClick={cvClicked}
                interestsClick={interestsClicked}
                contactClick={contactClicked}
            />}            
        </div>  
    )
}


export default App;