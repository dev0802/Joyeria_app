import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
function Header() {
  return (
    <header id="header">
      <div className="container">
        <div id="logo">
        <Link to="/">
        {/* <img src="/logo-joyeria.png" alt="logo" /> */}
        </Link>
        </div>
        <div className="right-links">
          <ul>
            <li><Link to={Cart}><span className="ico-products"></span><i className="bi bi-cart-fill"></i>3 products, $4 500.00</Link></li>
            <li><Link to="/"><span className="ico-account"></span>Account</Link></li>
            <li><Link to="/"><span className="ico-signout"></span>Sign out</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
