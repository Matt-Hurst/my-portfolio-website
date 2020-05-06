import React, { useState } from "react"
import "./interests.css"

import FtPic from "../img/football.jpg"
import SurfPic from "../img/surfing.jpg"
import TravPic from "../img/travel2.jpg"
import FoodPic from "../img/sushi.jpeg"
import BookPic from "../img/books.jpg"
import ChallPic from "../img/toughmudder.jpg"

const Interests = () => {
        const [imageClicked, setImageClicked] = useState("none");
        const [message, setMessage] = useState(<p className="welcome p-interests">Welcome to my interests page. Simply click on any image below to find out more.</p>);
   

    // handleClick function for each image, changing the message (setMessage) to <p>hobby info<p>
    const footballClicked = ()=> {
        setImageClicked("football")
        setMessage(<p className="p-interests">I have been playing (low level) competitive football since I was five, a career that culminated last year with my 11-a-side team being crowned champions of London South's Seventh Division. Autographs available upon request..</p>)
    }
    const surfClicked = ()=> {
        setImageClicked("surf")
        setMessage(<p className="p-interests">Whilst on a trip to Bali in 2012 I tried surfing for the first time and was hooked. Since then I have thrown myself at waves across the UK, Portugal, and Central America.</p>)
    }
    const travelClicked = ()=> {
        setImageClicked("travel")
        setMessage(<p className="p-interests">I love travelling to new places and experiencing different cultures. My travels have taken me to Kyrgyzstan for the World Nomad Games, through Central America, and to South East Asia four times.</p>)
    }
    const bookClicked = ()=> {
        setImageClicked("book")
        setMessage(<p className="p-interests">There is no greater entertainment than a good book. I'm a big fan of historical fiction, sci-fi, and learning new things through non-fiction. My favourite author is James Clavell and I am always open to book recommendations.</p>)
    }
    const challengeClicked = ()=> {
        setImageClicked("challenge")
        setMessage(<p className="p-interests">As someone who is always looking to push myself and improve, I like to have clear physical goals and a deadline to hit. I've completed three Tough Mudders and two half-marathons.</p>)
    }
    const foodClicked = ()=> {
        setImageClicked("food")
        setMessage(<p className="p-interests">Certainly someone who lives to eat, I love eating good food - both going out to eat with friends and family and cooking at home with my girlfriend. Japanese cuisine is my favourite, especially Sushi and Ramen.</p>)
    }

    return (
        <div className="interest-page">
            <div className="title-row">
                <h1 className="title">Interests</h1>
            </div>
            <div className="row interest-text">
                {message}
            </div>
            <div className="interests">
                <ul className="interests-showcase">
                    <li>
                        <figure className={ imageClicked === "football" ? "selected interest-pic" : "interest-pic" }
                        onClick={()=> {
                            footballClicked();
                         }}
                        >
                            <img src={FtPic}></img>
                        </figure>
                    </li>
                    <li>
                        <figure className={ imageClicked === "surf" ? "selected interest-pic" : "interest-pic" }
                        onClick={()=> {
                            surfClicked();
                         }}
                         >
                            <img src={SurfPic}></img>
                        </figure>
                    </li>
                    <li>
                        <figure className={ imageClicked === "travel" ? "selected interest-pic" : "interest-pic" }
                        onClick={()=> {
                            travelClicked();
                         }}
                        >
                            <img src={TravPic}></img>
                        </figure>
                    </li>
                    <li>
                        <figure className={ imageClicked === "book" ? "selected interest-pic" : "interest-pic" }
                        onClick={()=> {
                            bookClicked();
                         }}
                        >
                            <img src={BookPic}></img>
                        </figure>
                    </li>
                    <li>
                        <figure className={ imageClicked === "challenge" ? "selected interest-pic" : "interest-pic" }
                        onClick={()=> {
                            challengeClicked();
                         }}
                        >
                            <img src={ChallPic}></img>
                        </figure>
                    </li>
                    <li>
                        <figure className={ imageClicked === "food" ? "selected interest-pic" : "interest-pic" }
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