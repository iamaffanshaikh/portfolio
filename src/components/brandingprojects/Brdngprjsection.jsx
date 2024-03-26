import React from 'react'
import '../brandingprojects/brdngprjsection.css'
import gradient_01 from '../../static/images/01_gradient.svg'
import gradient_02 from '../../static/images/02_gradient.svg' 

const brdngprjsection = () => {
  return (
    <div className="brdngprjsection">

        <div className="brandingheading">
            <h1>Branding  <br/> <span> Projects </span> </h1>
        </div>

        <div className="showcasesection">

          <div className="projectscontainer">

            <div className="cardcontainer">
              
              <div className="card">

              </div>

              <div className="headingcontainer">
                <h5>MetalHive</h5>
                <h6>Fabrication Company</h6>
              </div>

            </div>

            <div className="cardcontainer">
              
              <div className="card">

              </div>

              <div className="headingcontainer">
                <h5>MetalHive</h5>
                <h6>Fabrication Company</h6>
              </div>

            </div>

            <div className="cardcontainer">
              
              <div className="card">

              </div>

              <div className="headingcontainer">
                <h5>MetalHive</h5>
                <h6>Fabrication Company</h6>
              </div>

            </div>

          </div>

            <img  className='gradient_01' src={gradient_01}/>
            <img className='gradient_02' src={gradient_02}/>

        </div>

    </div>
  )
}

export default brdngprjsection