import React from "react";
// import "./App.css";
import { Link } from "react-router-dom";
import Products from "./Products";
const Cart = () => {
  return (
    <>
      <header id="header">
        <div className="container">
          <span id="logo" title="Joyeria">
            <img src="/logo-joyeria.png" alt="logo"/>Joyeria
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
              <Link to={Products}>New collection</Link>
            </li>
            <li>
              <Link to={Products}>Necklaces</Link>
            </li>
            <li>
              <Link to={Products}>Earrings</Link>
            </li>
            <li>
              <Link to={Products}>Rings</Link>
            </li>
            <li>
              <Link to={Products}>Gift cards</Link>
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
            <li>Cart</li>
          </ul>
        </div>
      </div>

      <div id="body">
        <div className="container">
          <div id="content" className="full">
            <div className="cart-table">
              <table>
                <thead>
                  <tr>
                    <th className="items">Items</th>
                    <th className="price">Price</th>
                    <th className="qnt">Quantity</th>
                    <th className="total">Total</th>
                    <th className="delete"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="items">
                      <div className="image">
                        <img src="/images/6.jpg" alt="Item 1" />
                      </div>
                      <h3>
                        <Link to="/">Lorem ipsum dolor</Link>
                      </h3>
                      <p>
                        Dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias
                        excepturi sint occaecati cupiditate non provident,
                        similique sunt in culpa qui officia deserunt mollitia animi.
                      </p>
                    </td>
                    <td className="price">$1 350.00</td>
                    <td className="qnt">
                      <select>
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </td>
                    <td className="total">$1 350.00</td>
                    <td className="delete">
                      <Link className="ico-del"></Link>
                    </td>
                  </tr>

                  <tr>
                    <td className="items">
                      <div className="image">
                        <img src="/images/61.jpg" alt="Item 2" />
                      </div>
                      <h3>
                        <Link to="/">illum qui dolorem eum fugiat</Link>
                      </h3>
                      <p>
                        Quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                        aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt.
                      </p>
                    </td>
                    <td className="price">$2 100.00</td>
                    <td className="qnt">
                      <select>
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </td>
                    <td className="total">$2 100.00</td>
                    <td className="delete">
                      <Link className="ico-del"></Link>
                    </td>
                  </tr>

                  <tr>
                    <td className="items">
                      <div className="image">
                        <img src="/images/62.jpg" alt="Item 3" />
                      </div>
                      <h3>
                        <Link to="/">accusantium doloremque laudantium</Link>
                      </h3>
                      <p>
                        Quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                        aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt.
                      </p>
                    </td>
                    <td className="price">$1 050.00</td>
                    <td className="qnt">
                      <select>
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </td>
                    <td className="total">$1 050.00</td>
                    <td className="delete">
                      <Link className="ico-del"></Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="total-count">
              <h4>Subtotal: $4 500.00</h4>
              <p>+shipment: $30.00</p>
              <h3>
                Total to pay: <strong>$4 530.00</strong>
              </h3>
              <Link className="btn-grey">
                Finalize and pay
              </Link>
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
                <Link to="mailto:contact@dianasjewelry.com">
                  contact@dianasjewelry.com
                </Link>
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
              <form>
                <input type="text" placeholder="Your email address..." />
                <button type="submit"></button>
              </form>
            </div>
          </div>

          <p className="copy">
            Copyright 2013 Jewelry. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Cart;