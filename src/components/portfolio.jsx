import React from "react"
import work from "../work";
import "./portfolio.css"

const Portfolio = () => {
    return (
    <div className="portfolio-page">
        <div className="title-row">
            <h1 className="title">Portfolio</h1>
        </div>
        <div className="work">
            <div>{work.map( (piece, index) => {
                return (
                <div className="work__container" key={index}>    
                    <div className="work__img">
                        <a href={piece.website} target="blank">
                            <img className="portfolio-img" src={piece.img} alt={piece.alt} />
                        </a>
                    </div>
                    <div className="work__text">
                            <h3>{piece.name}</h3>
                            <p>Built with {piece.tech}</p>
                            <p><em>{piece.desc}</em></p>
                    </div>
                </div>
                )
            }
            )}</div>
        </div>
    </div>



    )
}

export default Portfolio;