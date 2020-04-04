import React from "react";


const Piece = (props) => {
    return (
        <div className="tile col span-1-of-2">
            <div className="row">
                <h3>{props.name}</h3>
            </div>
            <img className="port-img" src={props.img} />
            <h4>{props.tech}</h4>
            <p>{props.desc}</p>
        </div>
    )
}


export default Piece;
