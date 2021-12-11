import React from 'react'
import '../Css/App.css'
import '../Css/SectionWithImage.css'

function SectionWithImage(props) {
    return (
        <section className="section-with-image">
            <div className="content">
                <div className="section-with-image-content" style={{order:"0"}}>
                    <div className="text-section">
                        <h2>{props.h2}</h2>
                        <h3>{props.h3}</h3>
                    </div>
                    <div className="img-section" style={{order: `${props.order}`}}>
                      <img src={props.img1} alt="Assemble" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionWithImage
