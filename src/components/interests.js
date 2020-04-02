import React, { useState } from "react";
import Header from "./header"

const Interests = (props)=> {


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
                <h1 className="title">interests</h1>
            </div>
        </div>
    )
}

export default Interests;