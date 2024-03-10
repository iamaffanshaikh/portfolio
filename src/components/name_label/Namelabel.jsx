import React from 'react'

// css importing
import '../name_label/namelabel.css'

// img importing
import affan_shaikh_logo from "../../static/images/affan_shaikh_logo.png"
 
const namelabel = () => {
  return (
    <>
        <div className="namelabelcontainer">
            <div className="strip">
                <img src={affan_shaikh_logo}/>
            </div>
        </div>
    </>
  )
}

export default namelabel