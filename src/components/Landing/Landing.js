import React from 'react'
import Spinner from "../Spinner/Spinner";
import About from "../About/About";
import Projects from "../Projects/Projects";
import "./Landing.css"
import Particles from "react-particles-js";

function Landing() {
    return (

       

        <div className="outer_container">
             
   

            {/* Container for Spinner */}

            <div className="title_container">
           
                <Spinner />

                </div>

                {/* Container for About section */}

                <div className="about_container">

                    <About />


                </div>

                <div className="portfolio_container">

                    <Projects />


                </div>


         
            
            
        </div>

   
    )
}

export default Landing
