import React from "react";
import location from "../image/18-location-pin-outline.gif"
import email from "../image/1141-email-outline.gif"
import call from "../image/1676-telephone-call-hand-outline.gif"
import time from "../image/45-clock-time-outline.gif"
function Contact()
{
    return(
        <>

            <div className="contact" id="contact">
        <div className="container">



            <div className="form">
                <h1>Contact</h1>
                <br /><br />
            </div>



            <div className="contact-in">


                <div className="box-1">

                    <div className="location">

                        <div className="image">
                            <img src={location} alt="" />

                        </div>

                        <div className="text">
                            <h1>Location:</h1>

                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>

                    </div>


                    <div className="location">

                        <div className="image">
                          <img src={email} alt="" />
                        </div>

                        <div className="text">
                            <h1>Email:</h1>

                            <p>info@example.com</p>
                        </div>

                    </div>



                    <div className="location">

                        <div className="image">
                         <img src={call} alt="" />
                        </div>

                        <div className="text">
                            <h1>Call:</h1>

                            <p>+1 5589 55488 55</p>
                        </div>

                    </div>

                    <div className="location">

                        <div className="image">
                       <img src={time} alt="" />
                        </div>

                        <div className="text">
                            <h1>Open Hours:</h1>

                            <p>Mon-Sat: 11AM - 23PM</p>
                        </div>

                    </div>

                </div>


                <div className="box-2">

                    <div className="input">

                        <input className="inp" type="text" name="name" placeholder="Your Name"/>
                        <input className="inp" type="email" placeholder="Your E-mail"/>
                    </div>

                    <div className="subject">
                        <input className="sub" type="text" placeholder="Subject"/>
                    </div>

                    <div className="textarea">
                        <textarea className="ta" cols="30" rows="10" placeholder="Message"></textarea>
                    </div>
                    <div className="bt">
                        <button>Send Message</button>
                    </div>
                </div>


            </div>


        </div>
    </div>
        </>
    )
}
export{Contact}