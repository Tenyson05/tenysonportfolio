import React from "react"

import "../styles/hamburger.css"
import $ from "jQuery"
// var $ = require('jquery');

// remember to try somethyign out with JQuery eventlistener on click

const hamToggle = props => {
	// if(props.sidebarclicker) {
	// 	$('.hamburger-sub').toggleClass('hamburger-sub-open');
	// }else {
	// 	$('.hamburger-sub-open').toggleClass('hamburger-sub');
	// }
	// $('.hamburger').click(function() {
	// 	// $(this).removeClass('hamburger-sub');
	// 	$('.hamburger-sub').toggleClass('hamburger-sub-open');
	// 	$('.hamburger-sub-open').toggleClass('hamburger-sub');
	// });
	return (
		<div className="hamburger" onClick={props.sidebarclicker}>
			<div className="hamburger-list">
				<div className="hamburger-sub" >

				</div>
			</div>

		</div>
	)

}

export default hamToggle;

