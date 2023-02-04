import React from 'react'
import "./About.css"
import SurfPic from "../../assets/surf1.jpg";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Particles from "react-particles-js";


function About() {
    return (
        <div className="first_container">

            <div className="picture_container">

            <img src={SurfPic} class="surf" alt/>
      




            </div>


            <div className="about_container">
            <h1>About Me</h1>
            <KeyboardArrowDownIcon />

            

            <div className="bio_sec">

            <p> Hi, Im Nicolás Tobar.  I was born in Ecuador and am currently a fourth year
					International Student at Northeastern University
					pursuing a Major in Computer Science
					and Philosophy, and a Minor in
					Entrepreneurship.
					Im passionate about generating crazy ideas in
					my mind, while having the power to create them through programming.
					Im a full-stack Developer with a drive to innovate and create things from scratch.
				</p>

                </div>

            </div>
        </div>
    )
}

export default About

