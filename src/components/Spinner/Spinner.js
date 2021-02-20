import React from 'react'
import "./Spinner.css";
import Particles from "react-particles-js";


import { useDencrypt } from "use-dencrypt-effect";


const values = ["Software Developer"];

function Spinner() {
    const { result, dencrypt } = useDencrypt();

    React.useEffect(() => {
        let i = 0;
    
        const action = setInterval(() => {
          dencrypt(values[i]);
    
          i = i === values.length - 1 ? 0 : i + 1;
        }, 2000);
    
        return () => clearInterval(action);
      }, []);


    return (
        <div className="spinner_container">
                   <div className="name_container">

                   <Particles />

                       


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

     

            </div>

            <div className="dencrypt_container">
                <h1 className="description">
                    {result}
                </h1>
            </div>

        </div>
    )
}

export default Spinner
