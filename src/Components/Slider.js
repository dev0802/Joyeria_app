import React from "react";
// import './App.css';
import { Link } from "react-router-dom";
function Slider() {
  return (
    <div id="slider">
		<ul>
			<li className="di">
				<h3>Make your life better</h3>
				<h2>Genuine diamonds</h2>
				<Link to="#" className="btn-more">Read more</Link>
			</li>
			<li className="purple">
				<h3>She will say “yes”</h3>
				<h2>engagement ring</h2>
				<Link to="#" className="btn-more">Read more</Link>
			</li>
			<li className="yellow" >
				<h3>You deserve to be beauty</h3>
				<h2>golden bracelets</h2>
				<Link to="#" className="btn-more">Read more</Link>
			</li>
		</ul>
	</div>
  );
}

export default Slider;
