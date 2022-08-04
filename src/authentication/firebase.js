// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmcwrtfu1xmKNf6I1uQ9Tf_3Q58p2Jo2I",
  authDomain: "seputar-jogja.firebaseapp.com",
  projectId: "seputar-jogja",
  storageBucket: "seputar-jogja.appspot.com",
  messagingSenderId: "1090760864681",
  appId: "1:1090760864681:web:6d9fb98a299d1cba7f4ab8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const onHandleSignUpWithEmailAndPassword = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      const navigate = useNavigate();
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

const onHandleSignInWithEmailAndPassword = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log(res);
      const navigate = useNavigate();
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);

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

const onHandleResetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email)
    .then((res) => console.log(res))
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    });
};

const onHandleSignOut = async () => {
  await signOut(auth)
    .then((res) => {
      console.log("success logout", res);
    })
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    });
};

export {
  auth,
  onHandleSignInWithEmailAndPassword,
  onHandleSignUpWithEmailAndPassword,
  onHandleResetPassword,
  onHandleSignOut,
};
