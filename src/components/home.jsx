import React from "react"
import "./home.css"


const Home = () => {
    return (
        <div>
            <div className="home">
                <h1>Welcome</h1>
                <h2>Please explore my portfolio and interests</h2>
            </div>

            <div className="home-text">
                <h2 className="about">About Me</h2>
                <p className="homeP">Hi, I'm Matt, a London based web developer.</p>
                <p className="homeP">I'm a full stack software engineer experienced in the JavaScript eco-system who loves to build great applications with TypeScript, React, Redux, Express, and both SQL and NoSQL databases.</p>
                <p className="homeP">I'm looking for a job where I can deliver great products whilst continuing to learn and advance my skillset.</p>
            </div>
        </div>       
    )
}

export default Home;
