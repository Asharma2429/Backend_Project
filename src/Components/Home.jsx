import React from "react";
import { Nav } from "./Nav";
import { Api } from "./Api";
import { Slider } from "./Slider";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Testimonials } from "./Testimonials";
import { About } from "./About";
import { AboutProducts } from "./AboutProducts";

function Home()
{
    return(
        <>
       <Nav/>
       <Slider/>
       <Api/>
       <Testimonials/>
       <About/>
       <AboutProducts/>
       <Contact/>
       <Footer/>
        </>
    )
}
export{Home}