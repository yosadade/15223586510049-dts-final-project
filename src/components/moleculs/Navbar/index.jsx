import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { onHandleSignOut } from "../../../authentication/firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await onHandleSignOut();
    navigate("/signin");
  }

  return (
    <>
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/politics">Politik</Link>
              </li>
              <li>
                <Link to="/lifestyle">Lifestyle</Link>
              </li>
              <li>
                <Link to="/sport">Olahraga</Link>
              </li>
              <li style={{marginLeft: 'auto'}} onClick={logoutHandler}>
                Logout
              </li>
            </ul>          
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
