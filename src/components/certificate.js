import React, { useState } from "react";
import Header from "./header";
import { Document, Page } from "react-pdf";

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
                <h1 className="title">CERTIFICATES</h1>
            </div>
            <div className="row">
                <div className="container">    
                        <div className="tile">
                            <div className="col span-1-of-2 span-1-of-1">
                            <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="blank">
                                 <img id="cert-img1" src={require("../img/BootCamp.jpg")}></img>
                             </a>
                            </div>
                            <div className="col span-1-of-2 span-1-of-1" id="cert-text1">
                                <h3>The Web Developer Bootcamp</h3>
                                <p>Content Length: 47 Hours</p>
                                <p><em>Front and backend coding course covering a wide range of areas including: HTML5, CSS3, JS, Bootstrap, SemanticUI, DOM Manipulation, jQuery, Command Line, NodeJS, NPM, ExpressJS, REST, MongoDB, Database Associations, Authentication, PassportUS, Authorization</em></p>
                            </div>
                         </div>
                         <div className="clearfix"></div>
                         <div className="tile">
                            <div className="col span-1-of-2 span-1-of-1">
                            <a href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/" target="blank">
                                 <img id="cert-img2" src={require("../img/CSSHTML-Course-1.jpg")}></img>
                             </a>
                            </div>
                            <div className="col span-1-of-2 span-1-of-1" id="cert-text2">
                                <h3>Build Responsive Real World Websites with HTML5 and CSS3</h3>
                                <p>Content Length: 12 Hours</p>
                                <p><em>Front end web design course covering web design, responsive web design, jQuery, and animation effects.</em></p>
                            </div>
                         </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            
            
            {/* CSSHTML-Course-1.jpg */}
            
            
            
            
{/*             
            <div className="cert-container">
                <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="blank">
                    <img className="cert-img" src={require("../img/BootCamp.PNG")}></img>
                </a>
            </div> */}

        </div>
    )
}

export default Certificate;