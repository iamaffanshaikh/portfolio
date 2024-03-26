import React from 'react'
import '../designations/designation.css'

const Designations = () => {
  return (
    <div className="designationcontainer">

        <div className="headingofdsgn">
            <h4>usually known for</h4>
        </div>

        <div className="edesignationcon">

            <div className="exactdesignations">
                <h2> <span>Brand Identity</span> <br/> Designing </h2>
            </div>

            <div className="exactdesignations">
                <h2> <span> UI/UX  </span> <br/> Designing </h2>
            </div>

            <div className="exactdesignations">
                <h2> <span> Frontend </span> <br/> Web Development </h2>
            </div>

        </div>

    </div>
  )
}

export default Designations