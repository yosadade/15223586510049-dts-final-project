import React, {useEffect, useState} from "react";
import { onHandleSignInWithEmailAndPassword } from "../../authentication/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../authentication/firebase";
import "./styles.css";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const {email, password} = form
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const onHandleSignIn = async () => {
    await onHandleSignInWithEmailAndPassword(email, password);
    navigate("/");
  };


  useEffect(() => {
    if (user) {
      navigate("/");
      return;
    }
  }, [navigate, user]);

  if (loading) {
    return;
  }

  return (
    <div className="containers forms">
      <div className="form login">
        <div className="form-content">
          <div className="wrapperTitle">
            <h1 className="title">Antara</h1>
            <h1 className="title2">News</h1>
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
              <Link to="/signup">
                Signup
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
