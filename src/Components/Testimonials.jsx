import React from "react";
import test from "../image/IMG-20230531-WA0044.jpg"

function Testimonials()
{
    return(
        <>
        <div className="test">
            <div className="container">
                <div className="test-in">
                    <p>People Says</p>
                    <br />
                    <h1>Testimonials</h1>
                    <br />

                    <img src={test} alt="test" />

                 <div className="ptag">
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sint deserunt,  minima iste commodi, <br /> quo mollitia delectus adipisci magnam repellat vero ratione praesentium eius.  Delectus dolorum dignissimos<br /> eos possimus expedita?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nulla possimus labore tenetur facilis similique"
                    </p>

                    <p className="tag">Jhon Smith</p>
                    </div>

                   

                </div>

            </div>

        </div>
        
        </>
    )
}
export{Testimonials}