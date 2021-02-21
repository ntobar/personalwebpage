import React from 'react';
import "./Preview.css";
import mypic from "../../assets/profile_picture.jpg";


function Preview() {
    return (
        <div className="preview_container">
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={mypic}  style={{ width:"300px" ,height:"200px" }} />
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={mypic}  style={{ width:"300px" ,height:"200px" }} />
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={mypic}  style={{ width:"300px" ,height:"200px" }} />
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
</div>
    )
}

export default Preview
