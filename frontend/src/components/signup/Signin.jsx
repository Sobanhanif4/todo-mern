import React from 'react'
import HeadingComp from "./HeadingComp"

const Signin = () => {
  return (
    <div>
      <div className="signup">
      <div className="container">
        <div className="row">
        <div className="col-lg-4 col-left d-flex justify-content-center column align-items-center">
            <HeadingComp first="Sign" second="In"/>
          </div>
          <div className="col-lg-8 d-flex justify-content-center column align-items-center">
            <div className="d-flex flex-column w-100 p-5">
              <input
                type="email"
                name="email"
                className="p-2 my-3 input-signup"
                placeholder="Enter Your Name" />
              
              <input
                type="password"
                name="password"
                className="p-2 my-3 input-signup"
                placeholder="Enter Your Password" />
              <button className="btn-signup p-2">Sign In</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signin
