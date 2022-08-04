import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { app } from "../../authentication/firebase";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    phone: "",
    password: "",
  });

  const { email, username, phone, password } = form;
  const navigate = useNavigate();

  const onHandleSignUp = async (email, password) => {
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === "auth/wrong-password") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "wrong password!",
          });
        }
        if (errorCode === "auth/user-not-found") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "user not found!",
          });
        }
      });
  };

  const onHandleSignIn = () => {
    navigate("/signin");
  };

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
              <a href="#" className="link signup-link" onClick={onHandleSignIn}>
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
