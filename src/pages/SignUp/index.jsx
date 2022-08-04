import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onHandleSignUpWithEmailAndPassword } from "../../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";
import "./styles.css";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    phone: "",
    password: "",
  });

  const { email, username, phone, password } = form;
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const onHandleSignUp = async () => {
    await onHandleSignUpWithEmailAndPassword(email, password);
  };

  const onSignIn = () => {
    navigate("/signin");
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
            <h1 className="title">Seputar</h1>
            <h1 className="title2">Jogja</h1>
          </div>

          <div className="field input-field">
            <input
              type="email"
              placeholder="Email"
              className="input"
              value={email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="field input-field">
            <input
              type="text"
              placeholder="Username"
              className="input"
              value={username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>

          <div className="field input-field">
            <input
              type="tel"
              placeholder="Phone Number"
              className="input"
              value={phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
          </div>

          <div className="field button-field">
            <button onClick={onHandleSignUp}>Register</button>
          </div>

          <div className="form-link">
            <span>
              Already have an account?{" "}
              <a href="*" className="link signup-link" onClick={onSignIn}>
                Signin
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
