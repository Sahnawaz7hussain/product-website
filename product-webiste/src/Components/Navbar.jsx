import React from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import Styles from "./navbar.module.css";
export const Navbar = () => {
  return (
    <>
      <div className={Styles.navCont}>
        {" "}
        <i>
          <h3 className={Styles.text_logo} style={{ color: "#fff" }}>
            Product App
          </h3>
        </i>
        <ul className={Styles.navLinks}>
          <Link to="/">
            <li className={Styles.navOneLink}>Products</li>
          </Link>
          <li className={Styles.navOneLink}>
            <Link to="/cart">
              {" "}
              <BsCart4 />{" "}
            </Link>
          </li>
          {/* <li className={Styles.navOneLink}>
            {/* <Link to="/blogs">Blogs</Link> 
            Blogs
          </li> */}
        </ul>
      </div>
    </>
  );
};
