import React from "react";
import Header from "./header";
import work from "../work";
<<<<<<< HEAD
import Piece from "./piece";
// import Quiz from "../img/quiz.PNG"
// import Colour from "../img/colour.PNG"
// import Cheese from "../img/cheese-blog.PNG"
=======

>>>>>>> portfolio-page-design



const Portfolio = (props)=> {

<<<<<<< HEAD
//     const createPiece = (piece)=> {
//         return (
//             <Piece 
//                 key={piece.id}
//                 name={piece.name}
//                 img={piece.img}
//                 tech={piece.tech}
//                 desc={piece.desc}
//             />
//         )
//     }
=======
>>>>>>> portfolio-page-design

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
<<<<<<< HEAD
                <div>{work.map(
                    (piece) => {
                        return (
                            <div className="tile col span-1-of-2" key={piece.id}>
                                <h2>{piece.name}</h2>
                                <div className="picture">
                                    <a href={piece.href} target="blank">    
                                        <img className="port-img" src={piece.img} href={piece.href} />
                                    </a>
                                </div>
                                <h4>Built with: &nbsp; {piece.tech}</h4>
                                <p>{piece.desc}</p>
                            </div>
                        )
                } ) }
            
=======
                <div>{work.map( (piece) => {
                    return (
                    <div className="container">    
                        <div className="tile">
                            <div className="col span-1-of-2">
                                <a href={piece.website} target="blank">
                                    <img src={piece.img} alt={piece.alt} />
                                </a>
                            </div>
                            <div className="col span-1-of-2x">
                                <h3>{piece.name}</h3>
                                <p>Built with {piece.tech}</p>
                                <p><em>{piece.desc}</em></p>
                            </div>
                         </div>
                        <div className="clearfix"></div>
                    </div>
                    )
                }
                )}</div>
>>>>>>> portfolio-page-design
            </div>
        </div>
    </div>
    )
}

export default Portfolio;