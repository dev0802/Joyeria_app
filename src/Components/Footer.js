import React from "react";
function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="cols">
          <div className="col">
            <h3>Frequently Asked Questions</h3>
            <ul>
              <li>Fusce eget dolor adipiscing</li>
              <li>Posuere nisl eu venenatis gravida</li>
              <li>Morbi dictum ligula mattis</li>
              <li>Etiam diam vel dolor luctus dapibus</li>
              <li>Vestibulum ultrices magna</li> 
            </ul>
          </div>

          <div className="col media">
            <h3>Social media</h3>
            <ul className="social">
              <li><span className="ico ico-fb"></span>Facebook</li>
              <li><span className="ico ico-tw"></span>Twitter</li>
              <li><span className="ico ico-gp"></span>Google+</li>
              <li><span className="ico ico-pi"></span>Pinterest</li>
            </ul>
          </div>

          <div className="col contact">
            <h3>Contact us</h3>
            <p>Joyeria INC.<br />54233 Avenue Street<br />New York</p>
            <p><span className="ico ico-em"></span>contact@dianasjewelry.com</p>
            <p><span className="ico ico-ph"></span>(590) 423 446 924</p>
          </div>

          <div className="col newsletter">
            <h3>Join our newsletter</h3>
            <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium.</p>
            <form>
              <input type="text" placeholder="Your email address..." />
              <button type="submit">
                <i className="bi bi-plus"></i>
              </button>
            </form>
          </div>
        </div>
        <p className="copy">Copyright 2025 Jewelry. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
