import React from 'react'

// css importing
import "../about/about.css"

// img immporting
import dp from '../../static/images/dp.png'

const about = () => {
  return (
    <div>
        <div className="aboutconatainer">

            <div className="mecontainer">
                <h6>me.</h6>
            </div>

            <div className="aboutmain">

                <div className="dpanddetail">

                    <img src={dp}/>

                    <div className="detail">
                        <h5>Affan Shaikh</h5>
                        <h6>Designer & Developer, 19</h6>
                    </div>

                </div>

                <div className="description">

                    <h5>Navigating a competitive landscape, brands often grapple with the challenge of establishing a unique visual identity.</h5>

                    <h4>In the realm of design, the vision extends beyond mere visuals; it's about turning concepts into unforgettable images. From shaping impactful Brand Identities and user-friendly UI/UX designs to driving Front-End web development, the focus is not just on catching attention but on leaving a lasting mark on your audience.</h4>

                </div>

            </div>

        </div>
    </div>
  )
}

export default about