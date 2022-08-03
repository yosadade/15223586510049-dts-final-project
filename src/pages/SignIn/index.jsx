import React from "react";
import "./styles.css";

const SignIn = () => {
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
              <button>Login</button>
            </div>
          </form>

          <div className="form-link">
            <span>
              Don't have an account?{" "}
              <a href="#" className="link signup-link">
                Signup
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

export default SignIn;
