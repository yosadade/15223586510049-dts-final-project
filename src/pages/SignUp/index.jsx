import React from "react";
import "./styles.css";

const SignUp = () => {
  return (
    <div className="containers forms">
      <div className="form login">
        <div className="form-content">
          <div className="wrapperTitle">
            <h1 className="title">Kabar</h1>
            <h1 className="title2">Jogja</h1>
          </div>
          <form action="#">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>

            <div className="field input-field">
              <input
                type="password"
                placeholder="Password"
                className="password"
              />
              <i className="bx bx-hide eye-icon"></i>
            </div>

            <div className="field button-field">
              <button>Register</button>
            </div>
          </form>

          <div className="form-link">
            <span>
              Already have an account?
              <a href="#" className="link signup-link">
                Signin
              </a>
            </span>
          </div>
        </div>

        <div className="line"></div>

        <div className="media-options">
          <a href="#" className="field google">
            <img src="images/google.png" alt="" className="google-img" />
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
