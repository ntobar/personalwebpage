import React from 'react'
import Spinner from "../Spinner/Spinner";
import About from "../About/About";
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


            
            
        </div>
    )
}

export default Landing
