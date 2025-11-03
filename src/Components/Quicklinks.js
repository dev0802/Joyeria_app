import { Link } from "react-router-dom";

function QuickLinks() {
  return (
    <section className="quick-links">
      <article style={{ backgroundImage: "url('images/2.jpg')" }}>
        <Link className="table">
          <div className="cell">
            <div className="text">
              <h4>Lorem ipsum</h4>
              <hr />
              <h3>Dolor sit amet</h3>
            </div>
          </div>
        </Link>
      </article>

      <article className="red" style={{ backgroundImage: "url('images/3.jpg')" }}>
        <Link className="table">
          <div className="cell">
            <div className="text">
              <h4>consequatur</h4>
              <hr />
              <h3>voluptatem</h3>
              <hr />
              <p>Accusantium</p>
            </div>
          </div>
        </Link>
      </article>

      <article style={{ backgroundImage: "url('images/4.jpg')" }}>
        <Link className="table">
          <div className="cell">
            <div className="text">
              <h4>culpa qui officia</h4>
              <hr />
              <h3>magnam aliquam</h3>
            </div>
          </div>
        </Link>
      </article>
    </section>
  );
}

export default QuickLinks;
