import React, {useState} from "react";
import { onHandleSignInWithEmailAndPassword } from "../../authentication/firebase";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const {email, password} = form

  const navigate = useNavigate();

  const onHandleSignIn = () => {
    onHandleSignInWithEmailAndPassword(email, password);
  };

  const onHandleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="containers forms">
      <div className="form login">
        <div className="form-content">
          <div className="wrapperTitle">
            <h1 className="title">Seputar</h1>
            <h1 className="title2">Jogja</h1>
          </div>
          <form action="#">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input"
                value={email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="field input-field">
              <input
                type="password"
                placeholder="Password"
                className="password"
                value={password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <i className="bx bx-hide eye-icon"></i>
            </div>

            <div className="field button-field">
              <button onClick={onHandleSignIn}>Login</button>
            </div>
          </form>

          <div className="form-link">
            <span>
              Don't have an account?{" "}
              <a href="*" className="link signup-link" onClick={onHandleSignUp}>
                Signup
              </a>
            </span>
          </div>
        </div>

        {/* <div className="line"></div> */}

        {/* <div className="media-options">
          <a href="#" className="field google">
            <img src="images/google.png" alt="" className="google-img" />
            <span>Login with Google</span>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default SignIn;
