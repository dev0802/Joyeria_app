import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // your original css
import "../images/11.jpg"; // ensures Webpack includes images

function Products() {
  return (
    <>
      <div id="breadcrumbs">
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Product results</li>
          </ul>
        </div>
      </div>

      <div id="body">
        <div className="container">
          <div className="pagination">
            <ul>
              <li><Link to="#"><span className="ico-prev"></span></Link></li>
              <li><Link to="#">1</Link></li>
              <li className="active"><Link to="#">2</Link></li>
              <li><Link to="#">3</Link></li>
              <li><Link to="#">4</Link></li>
              <li><Link to="#">5</Link></li>
              <li><Link to="#"><span className="ico-next"></span></Link></li>
            </ul>
          </div>

          <div className="products-wrap">
            <aside id="sidebar">
              <div className="widget">
                <h3>Products per page:</h3>
                <fieldset>
                  <input defaultChecked type="checkbox" />
                  <label>8</label>
                  <input type="checkbox" />
                  <label>16</label>
                  <input type="checkbox" />
                  <label>32</label>
                </fieldset>
              </div>
              <div className="widget">
                <h3>Sort by:</h3>
                <fieldset>
                  <input defaultChecked type="checkbox" />
                  <label>Popularity</label>
                  <input type="checkbox" />
                  <label>Date</label>
                  <input type="checkbox" />
                  <label>Price</label>
                </fieldset>
              </div>
              <div className="widget">
                <h3>Condition:</h3>
                <fieldset>
                  <input defaultChecked type="checkbox" />
                  <label>New</label>
                  <input type="checkbox" />
                  <label>Used</label>
                </fieldset>
              </div>
              <div className="widget">
                <h3>Price range:</h3>
                <fieldset>
                  <div id="price-range"></div>
                </fieldset>
              </div>
            </aside>

            <div id="content">
              <section className="products">
                <article>
                  <Link to="/product"><img src={require("../images/11.jpg")} alt="" /></Link>
                  <h3><Link to="/product">Lorem ipsum dolor</Link></h3>
                  <h4><Link to="/product">$990.00</Link></h4>
                  <Link to="/cart" className="btn-add">Add to cart</Link>
                </article>

                <article>
                  <Link to="/product"><img src={require("../images/12.jpg")} alt="" /></Link>
                  <h3><Link to="/product">cupidatat non proident</Link></h3>
                  <h4><Link to="/product">$1 200.00</Link></h4>
                  <Link to="/cart" className="btn-add">Add to cart</Link>
                </article>

                <article>
                  <Link to="/product"><img src={require("../images/13.jpg")} alt="" /></Link>
                  <h3><Link to="/product">Duis aute irure</Link></h3>
                  <h4><Link to="/product">$2 650.00</Link></h4>
                  <Link to="/cart" className="btn-add">Add to cart</Link>
                </article>

                <article>
                  <Link to="/product"><img src={require("../images/14.jpg")} alt="" /></Link>
                  <h3><Link to="/product">magna aliqua</Link></h3>
                  <h4><Link to="/product">$3 500.00</Link></h4>
                  <Link to="/cart" className="btn-add">Add to cart</Link>
                </article>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
