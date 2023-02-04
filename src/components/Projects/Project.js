import React from 'react'
import "./Project.css"

function Project({ title, pic, desc }) {
    return (
        <div className="project_container">

            <div className="title_container">

                <h1 className="desc_header">
                    {title}
                </h1>

            </div>

            <div className="picture_container">

                <div className="picture">

                    <img src={pic} alt="" className="picture_css"/>

                </div>


            </div>

            <div className="description_container">

                <p className="description">
                    {desc}
                </p>

            </div>
            
        </div>
    )
}

export default Project
