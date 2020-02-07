import React from "react";
import "../styles/layout.css";

const button = (props) => (
	<button className="button-layout" onClick={() => props.onClick()}>
		{props.label}
	</button>
)

export default button
