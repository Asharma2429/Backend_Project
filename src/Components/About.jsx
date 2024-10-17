import React from "react";
import about from "../image/IMG-20230531-WA0037.jpg"
function About()
{
    return(
        <>
        <div className="About" id="About">
            <div className="container">
                <div className="About-in" >

                    <div className="left-box">
                        <img src={about} alt="About" />
                       

                        <div className="abs">
                            <h1>Trusted Merchant</h1>

                        </div>

                    </div>

                    

                    <div className="right-box">
                        <h2>MERCHANT COMPANY</h2>
                        <h1>About Us</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quidem vel dolor dolorum excepturi at ipsum suscipit voluptatem, beatae adipisci, ratione vero eveniet nam voluptatibus facilis velit quam molestias illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aspernatur eius assumenda</p> 


                        <button>LEARN MORE</button>
                    </div>

                </div>

            </div>

        </div>
        
        </>
    )
}
export{About}