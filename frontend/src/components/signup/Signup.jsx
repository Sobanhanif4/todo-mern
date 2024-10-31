import { useState } from "react";
import HeadingComp from "./HeadingComp"
import "./signup.css"
const Signup = () => {
  const [Inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(Inputs);
    setInputs({
      email: "",
      username: "",
      password: "",
    })
  } 
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 d-flex justify-content-center column align-items-center">
            <div className="d-flex flex-column w-100 p-5">
              <input
                type="email"
                name="email"
                className="p-2 my-3 input-signup"
                placeholder="Enter Your Name"
                onChange={change}
                value={Inputs.email} />
              <input
                type="username"
                name="username"
                className="p-2 my-3 input-signup"
                placeholder="Enter Your Username"
                onChange={change}
                value={Inputs.username} />

              <input
                type="password"
                name="password"
                className="p-2 my-3 input-signup"
                placeholder="Enter Your Password"
                onChange={change}
                value={Inputs.password} />

              <button className="btn-signup p-2" onClick={submit}>Sign Up</button>
            </div>
          </div>
          <div className="col-lg-4 col-left d-flex justify-content-center column align-items-center">
            <HeadingComp first="Sign" second="Up" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
