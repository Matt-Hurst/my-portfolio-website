import React, { useState } from "react";
import Header from "./header"
import FtPic from "../img/football.jpg"
import SurfPic from "../img/surfing.jpg"
import TravPic from "../img/travel2.jpg"
import FoodPic from "../img/sushi.jpeg"
import BookPic from "../img/books.jpg"
import ChallPic from "../img/toughmudder.jpg"

const Interests = (props)=> {

    const [message, setMessage] = useState(<p class="welcome">Welcome to my interests page. Simply click on any image below to find out more.</p>);
   
    // handleClick function for each image, changing the message (setMessage) to <p>hobby info<p>
    const footballClicked = ()=> {
        setMessage(<p>I have been playing (low level) competitive football since I was five, a career that culminated last year with my 11-a-side team being crowned champions of London South's Seventh Division. Autographs available upon request..</p>)
    }
    const surfClicked = ()=> {
        setMessage(<p>Whilst on a trip to Bali in 2012 I tried surfing for the first time and was hooked. Since then I have thrown myself at waves across the UK, Portugal, and Central America.</p>)
    }
    const travelClicked = ()=> {
        setMessage(<p>I love travelling to new places and experiencing different cultures. My travels have taken me to Kyrgyzstan for the World Nomad Games, through Central America, and to South East Asia four times.</p>)
    }
    const bookClicked = ()=> {
    setMessage(<p>There is no greater entertainment than a good book. I'm a big fan of historical fiction, sci-fi, and learning new things through non-fiction. My favourite author is James Clavell and I am always open to book recommendations.</p>)
    }
    const challengeClicked = ()=> {
        setMessage(<p>As someone who is always looking to push myself and improve, I like to have clear physical goals and a deadline to hit. I've completed three Tough Mudders and two half-marathons.</p>)
    }
    const foodClicked = ()=> {
        setMessage(<p>Certainly someone who lives to eat, I love eating good food - both going out to eat with friends and family and cooking at home with my girlfriend. Japanese cuisine is my favourite, especially Sushi and Ramen.</p>)
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
                <h1 className="title">interests</h1>
            </div>
            <div className="row interest-text">
                {message}
            </div>
            <div className="interests row">
                <ul className="interests-showcase">
                    <li>
                        <figure className="interest-pic"
                        onClick={()=> {
                            footballClicked();
                         }}
                        >
                            <img src={FtPic}></img>
                        </figure>
                    </li>
                    <li>
                        <figure className="interest-pic"
                        onClick={()=> {
                            surfClicked();
                         }}
                         >
                            <img src={SurfPic}></img>
                        </figure>
                    </li>
                    <li>
                        <figure className="interest-pic"
                        onClick={()=> {
                            travelClicked();
                         }}
                        >
                            <img src={TravPic}></img>
                        </figure>
                    </li>
                    <li>
                        <figure className="interest-pic"
                        onClick={()=> {
                            bookClicked();
                         }}
                        >
                            <img src={BookPic}></img>
                        </figure>
                    </li>
                    <li>
                        <figure className="interest-pic"
                        onClick={()=> {
                            challengeClicked();
                         }}
                        >
                            <img src={ChallPic}></img>
                        </figure>
                    </li>
                    <li>
                        <figure className="interest-pic"
                        onClick={()=> {
                            foodClicked();
                         }}
                        >
                            <img src={FoodPic}></img>
                        </figure>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Interests;