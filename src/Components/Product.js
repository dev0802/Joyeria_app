import React from "react";

import { Link } from "react-router-dom";
import Cart from "./Cart";
const ProductPage = () => {
  return (
    <>
      <header id="header">
        <div className="container">
          <span id="logo" title="Joyeria">
            Joyeria
          </span>
          <div className="right-links">
            <ul>
              <li>
                <Link to={Cart}>
                  <span className="ico-products"></span>3 products, $4 500.00
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="ico-account"></span>Account
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="ico-signout"></span>Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <nav id="menu">
        <div className="container">
          <div className="trigger"></div>
          <ul>
            <li>
              <Link to="/" >New collection</Link>
            </li>
            <li>
              <Link to="/" >Necklaces</Link>
            </li>
            <li>
              <Link to="/" >Earrings</Link>
            </li>
            <li>
              <Link to="/" >Rings</Link>
            </li>
            <li>
              <Link to="/" >Gift cards</Link>
            </li>
            <li>
              <Link to="/" >Promotions</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div id="breadcrumbs">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Product page</li>
          </ul>
        </div>
      </div>

      <div id="body">
        <div className="container">
          <div id="content" className="full">
            <div className="product">
              <div className="image">
                <img src="/images/5.jpg" alt="Product" />
              </div>
              <div className="details">
                <h1>Lorem ipsum dolor</h1>
                <h4>$990.00</h4>
                <div className="entry">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <div className="tabs">
                    <div className="nav">
                      <ul>
                        <li className="active">
                          <Link to="/" >Description</Link>
                        </li>
                        <li>
                          <Link to="/">Specification</Link>
                        </li>
                        <li>
                          <Link to="/">Returns</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content active" id="desc">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                    <div className="tab-content" id="spec">
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                      </p>
                    </div>
                    <div className="tab-content" id="ret">
                      <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="actions">
                  <label>Quantity:</label>
                  <select>
                    <option>1</option>
                  </select>
                  <Link to="/" className="btn-grey">
                    Add to cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer">
        <div className="container">
          <div className="cols">
            <div className="col">
              <h3>Frequently Asked Questions</h3>
              <ul>
                <li>
                  <Link to="/">Fusce eget dolor adipiscing</Link>
                </li>
                <li>
                  <Link to="/">Posuere nisl eu venenatis gravida</Link>
                </li>
                <li>
                  <Link to="/">Morbi dictum ligula mattis</Link>
                </li>
                <li>
                  <Link to="/">Etiam diam vel dolor luctus dapibus</Link>
                </li>
                <li>
                  <Link to="/">Vestibulum ultrices magna</Link>
                </li>
              </ul>
            </div>

            <div className="col media">
              <h3>Social media</h3>
              <ul className="social">
                <li>
                  <Link to="/">
                    <span className="ico ico-fb"></span>Facebook
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="ico ico-tw"></span>Twitter
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="ico ico-gp"></span>Google+
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="ico ico-pi"></span>Pinterest
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col contact">
              <h3>Contact us</h3>
              <p>
                Diana’s Jewelry INC.
                <br />
                54233 Avenue Street
                <br />
                New York
              </p>
              <p>
                <span className="ico ico-em"></span>
                <Link to="/">contact@dianasjewelry.com</Link>
              </p>
              <p>
                <span className="ico ico-ph"></span>(590) 423 446 924
              </p>
            </div>

            <div className="col newsletter">
              <h3>Join our newsletter</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium.
              </p>
              <form action="#">
                <input type="text" placeholder="Your email address..." />
                <button type="submit"></button>
              </form>
            </div>
          </div>
          <p className="copy">Copyright 2025 Jewelry. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default ProductPage;
