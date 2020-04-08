import React from "react";
import Header from "./header";
import work from "../work";



const Portfolio = (props)=> {


    return (
        <div>
            <Header 
                homeClick = {props.homeClick}
                portfolioClick={props.portfolioClick}
                certsClick={props.certsClick}
                interestsClick={props.interestsClick}
                contactClick={props.contactClick}                
            />
            <div className="title-row">
                <h1 className="title">Portfolio</h1>
            </div>
            <div className="row">
                <div>{work.map( (piece) => {
                    return (
                    <div className="container">    
                        <div className="tile">
                            <div className="col span-1-of-2 span-1-of-1">
                                <h3>{piece.name}</h3>
                                <p>Built with {piece.tech}</p>
                                <p><em>{piece.desc}</em></p>
                            </div>
                            <div className="col span-1-of-2 span-1-of-1">
                                <a href={piece.website} target="blank">
                                    <img src={piece.img} alt={piece.alt} />
                                </a>
                            </div>
                         </div>
                        <div className="clearfix"></div>
                    </div>
                    )
                }
                )}</div>
            </div>
        </div>
    // </div>
    )
}

export default Portfolio;