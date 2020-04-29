import React from "react"
import "./home.css"


const Home = () => {
    return (
        <div>
            <div className="home">
                <h1>Welcome</h1>
                <h2>Please explore my portfolio, interests, and certificates</h2>
            </div>

            <div className="home-text">
                <h2 className="about">About Me</h2>
                <p>Hi, I'm Matt, a West London based web developer.</p>
                <p>In a previous life I worked in sales, but once I tried coding I was hooked. I love solving puzzles, logic problems, and above all creating things!</p>
                <p>I have learnt to code through online resources, including paid courses from Udemy, and by pestering my web developer friends for hints and tips.</p>
                <p>I'm looking for a job where I can deliver great products whilst continuing to learn and advance my skillset.</p>
            </div>
        </div>

       
    )
}

export default Home;