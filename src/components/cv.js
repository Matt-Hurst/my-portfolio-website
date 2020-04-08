import React, { useState } from "react";
import Header from "./header"

const Certificate = (props)=> {


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
                <h1 className="title">CV & CERTIFICATE PAGE</h1>
            </div>
            <div>
                <a href="../img/WebDevBoot.pdf">Click here to view</a>
            </div>

        </div>
    )
}

export default Certificate;