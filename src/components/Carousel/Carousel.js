import React from 'react'
import "./Carousel.css";


const ImageSlide = ({ url }) => {
    const styles = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  
    return (
      <div className="image-slide" style={styles}></div>
    );
  }

function Carousel() {
    return (
        <div className="carousel">
    
        </div>
    )
}

export default Carousel
