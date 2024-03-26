import React from 'react'
import '../moderndesigns/moderndesign.css'
import moderndesignsbg from '../../static/images/moderndesignsbg.jpg'
import moderndesignvector from '../../static/images/moderdesignsvector.svg'


const moderndesigns = () => {
  return (
    
    <div className="morderndcontainer">
        {/* <img src={moderndesignsbg} /> */}
        <img className='vector' src={moderndesignvector} alt="" />
    </div>

  )
}

export default moderndesigns