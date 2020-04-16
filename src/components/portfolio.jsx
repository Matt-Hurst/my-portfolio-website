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
            <div>{work.map( (piece) => {
                return (
                <div className="work__container">    
                    <div className="work__img">
                        <a href={piece.website} target="blank">
                            <img class="portfolio-img" src={piece.img} alt={piece.alt} />
                        </a>
                    </div>
                    <div className="work__text">
                            <h3>{piece.name}</h3>
                            <p>Built with {piece.tech}</p>
                            <p><em>{piece.desc}</em></p>
                    </div>
                    {/* <div className="clearfix"></div> */}
                </div>
                )
            }
            )}</div>
        </div>
    </div>



    )
}

export default Portfolio;