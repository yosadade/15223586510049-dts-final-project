import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

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
            </ul>
            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
