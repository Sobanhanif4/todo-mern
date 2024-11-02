import React from 'react'
import HeadingComp from "./HeadingComp"
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
const Signin = () => {
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:1000/api/v1/signin", Inputs).then((response) => {
      console.log((response.data.others._id));
      history("/todo")
    });
  }
  return (
    <div>
      <div className="signup">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-left d-flex justify-content-center column align-items-center">
              <HeadingComp first="Sign" second="In" />
            </div>
            <div className="col-lg-8 d-flex justify-content-center column align-items-center">
              <div className="d-flex flex-column w-100 p-5">
                <input
                  type="email"
                  name="email"
                  className="p-2 my-3 input-signup"
                  placeholder="Enter Your Name"
                  value={Inputs.email}
                  onChange={change}
                />

                <input
                  type="password"
                  name="password"
                  className="p-2 my-3 input-signup"
                  placeholder="Enter Your Password"
                  value={Inputs.password}
                  onChange={change}
                />
                <button className="btn-signup p-2" onClick={submit}>Sign In</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
