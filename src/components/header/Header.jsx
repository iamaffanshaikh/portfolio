import React from 'react'

// css importing
import '../header/header.css'

// img importing
import uiux_represent_img from '../../static/images/uiux_represent.png'
import branding_represent_img from '../../static/images/branding_represent.png'

const Header = () => {
  return (
    <div>
        <div className="headercontainer">

            <img className='uiux_represent_img' src={uiux_represent_img}/>
            
            <div className="maintext">
              <h6>Elegance Unleashed:</h6>
              <h5>Branding Precision and UI/UX Ingenuity - Unveiling a Dual <span>Creative</span> Blend.</h5>
            </div>

            <img className='branding_represent_img' src={branding_represent_img}/>

            <div className="meaningcontainer">

              <div className="meaning">
                <h4>Ingenuity</h4>
                <h3>Resourcefulness / Creativity</h3>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Header