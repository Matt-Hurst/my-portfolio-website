import React, { useState } from "react";
import Header from "./header";
import work from "../work";
import Piece from "./piece";



const Portfolio = (props)=> {

    const createPiece = (piece)=> {
        return (
            <Piece 
                key={piece.id}
                name={piece.name}
                img={piece.img}
                tech={piece.tech}
                desc={piece.desc}
            />
        )
    }

    return (
        <div>
            <Header 
                homeClick = {props.homeClick}
                portfolioClick={props.portfolioClick}
                cvClick={props.cvClick}
                interestsClick={props.interestsClick}
                contactClick={props.contactClick}                
            />
            <div className="title-row">
                <h1 className="title">Portfolio</h1>
            </div>
            <div className="row">
                <div>{work.map(createPiece)}</div>
            </div>
        </div>
    )
}

export default Portfolio;