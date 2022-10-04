import React from "react";
// import { Link } from "react-router-dom";
import Styles from "./navbar.module.css";
export const Navbar = () => {
  return (
    <>
      <div className={Styles.navCont}>
        <h3>
          <i>Logo</i>
        </h3>
        <ul className={Styles.navLinks}>
          <li className={Styles.navOneLink}>
            {/* <Link to="/">Products</Link> */}
            Products
          </li>
          <li className={Styles.navOneLink}>
            {/* <Link to="/cart">Cart</Link> */}
            Cart
          </li>
          <li className={Styles.navOneLink}>
            {/* <Link to="/blogs">Blogs</Link> */}
            Blogs
          </li>
        </ul>
      </div>
    </>
  );
};
