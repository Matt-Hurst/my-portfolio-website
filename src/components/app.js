import React, { useState } from "react";
import Home from "./home";
import Portfolio from "./portfolio";
import Certificate from "./certificate";
import Interests from "./interests";
import Contact from "./contact";
import "../queries.css"

const App = ()=> {
    
    const [home, setHome] = useState(true);
    const [portfolio, setPortfolio] = useState(false);
    const [certs, setCerts] = useState(false);
    const [interests, setInterests] = useState(false);
    const [contact, setContact] = useState(false);
    
    
    const homeClicked = () => {
        setHome(true);
        setPortfolio(false);
        setCerts(false);
        setInterests(false);
        setContact(false);
    } 

    const portfolioClicked = () => {
        setHome(false);
        setPortfolio(true);
        setCerts(false);
        setInterests(false);
        setContact(false);
    }

    const certsClicked = () => {
        setHome(false);
        setPortfolio(false);
        setCerts(true);
        setInterests(false);
        setContact(false);
    }

    const interestsClicked = () => {
        setHome(false);
        setPortfolio(false);
        setCerts(false);
        setInterests(true);
        setContact(false);
    }

    const contactClicked = () => {
        setHome(false);
        setPortfolio(false);
        setCerts(false);
        setInterests(false);
        setContact(true);
    }
    
    
    return (
        <div>
            {home && <Home 
                homeClick={homeClicked}
                portfolioClick={portfolioClicked}
                certsClick={certsClicked}
                interestsClick={interestsClicked}
                contactClick={contactClicked}            
            />}
            {portfolio &&  <Portfolio 
                homeClick={homeClicked}
                portfolioClick={portfolioClicked}
                certsClick={certsClicked}
                interestsClick={interestsClicked}
                contactClick={contactClicked}
            />}
            {certs &&  <Certificate 
                homeClick={homeClicked}
                portfolioClick={portfolioClicked}
                certsClick={certsClicked}
                interestsClick={interestsClicked}
                contactClick={contactClicked}
            />}
            {interests &&  <Interests 
                homeClick={homeClicked}
                portfolioClick={portfolioClicked}
                certsClick={certsClicked}
                interestsClick={interestsClicked}
                contactClick={contactClicked}
            />}
            {contact &&  <Contact 
                homeClick={homeClicked}
                portfolioClick={portfolioClicked}
                certsClick={certsClicked}
                interestsClick={interestsClicked}
                contactClick={contactClicked}
            />}            
        </div>  
    )
}


export default App;