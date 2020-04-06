import React, { useState } from "react";
import Header from "./header"

const Contact = (props)=> {


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
                <h1 className="title">Contact</h1>
            </div>
            <div class="row">
                <form action="#" method="post">
                    <div class="row">
                        <div class="col-form span-1-of-3">
                            <label for="name">Name:</label>
                        </div>
                        <div class="col-form span-2-of-3">
                           <input type="text" id="name" name="user_name" placeholder="name"></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-form span-1-of-3">
                            <label for="email">Email:</label>
                        </div>
                        <div class="col-form span-2-of-3">
                          <input type="email" id="email" name="user_email" placeholder="email"></input>
                        </div>
                    </div>    
                    <div class="row">
                        <div class="col-form span-1-of-3">
                           <label for="msg">Message:</label>
                        </div>
                        <div class="col-form span-2-of-3">
                            <textarea id="msg" name="user_message" placeholder="your message"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-form span-1-of-3">
                            <label>&nbsp;</label>
                        </div>
                        <div class="col-form span-2-of-3">
                            <input type="submit" value="Submit"></input>
                        </div>
                    </div>                    
                </form>
            </div>
        </div>
    )
}

export default Contact;