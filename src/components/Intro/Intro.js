import React, { useState } from 'react'
import "./Spinner.css"
import { useDencrypt } from "use-dencrypt-effect";


const values = ["Software Developer"];
const options = {
    chars: ["1", "2" , "3", "4", "5", "6", "7", "8", "9", "0", "$", "*", ">", "<"],
};

const options1 = {
    chars: ["1", "0"]
};

function Spinner({ visible }) {
    const { result, dencrypt } = useDencrypt();

    React.useEffect(() => {
        let i = 0;
    
        const action = setInterval(() => {
          dencrypt(values[i]);
    
          i = i === values.length - 1 ? 0 : i + 1;
        }, 2000);
    
        return () => clearInterval(action);
      }, []);

    //   if (!isVisible) return null 
      
    //   if(isVisible) 

    // if (!isVisible) return null 
      
    // if(isVisible) {
    //     setTimeout(() => {
    //         setVisibility(false);
    //     }, 10000)

  return (

    <div className="outer_container1">

<p aria-label="CodePen">
<span data-text="N">N</span>
  <span data-text="I">I</span>
  <span data-text="C">C</span>
  <span data-text="O">O</span>
  <span data-text="L">L</span>
  <span data-text="A">A</span>
  <span data-text="S">S</span>
  </p>

<p>
  <span data-text="T">T</span>
  <span data-text="O">O</span>
  <span data-text="B">B</span>
  <span data-text="A">A</span>
  <span data-text="R">R</span>
</p>



    <h1 className="description">{result}</h1>

    </div>

 

    //   <div className="outer_container">
    //       <div className="inner_container">
    //       <img
    //       className="profile"
    //       src={profileImg}
    //       alt=""
    //     />
    //       <h1 className="nicolas_tobar">Nicolás Tobar</h1>
    //       {/* <div className="nickers">
    //           <h1 className="nictest">Nicolas Tobar</h1>
    //       </div> */}
    //       <h1 className="description">{result}</h1>
    //       </div>
          
    //   </div>
  )
    //}
}

export default Spinner
