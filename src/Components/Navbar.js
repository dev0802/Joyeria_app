import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav id="menu">
      <div className="container">
        <ul>
          <li className="nc"><Link to="products" >New collection</Link></li>
          <li className="nek"><Link to="products">Necklaces</Link></li>
          <li className="earin"><Link to="products">Earrings</Link></li>
          <li className="ring"><Link to="products">Rings</Link></li>
          <li className="gc"><Link to="products">Gift cards</Link></li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
