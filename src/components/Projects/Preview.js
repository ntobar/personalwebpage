import React from 'react';
import "./Preview.css";
import mypic from "../../assets/profile_picture.jpg";
import { NearMe } from '@material-ui/icons';


function Preview({ name, image, description, tech}) {
    return (
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
        <p className="name">
            {name}
        </p>
      <img src={image}  style={{ width:"300px" ,height:"200px" }} />
    </div>
    <div class="flip-card-back">
      <h1>{description}</h1>
      <p>{tech}</p>
    </div>
  </div>
</div>

    )
}

export default Preview
