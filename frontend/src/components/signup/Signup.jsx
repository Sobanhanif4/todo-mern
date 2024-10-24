import HeadingComp from "./HeadingComp"
import "./signup.css"
const Signup = () => {
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
                placeholder="Enter Your Name" />
              <input
                type="username"
                name="username"
                className="p-2 my-3 input-signup"
                placeholder="Enter Your Username" />
              <input
                type="password"
                name="password"
                className="p-2 my-3 input-signup"
                placeholder="Enter Your Password" />
              <button className="btn-signup p-2">Sign Up</button>
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
