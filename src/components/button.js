import React from "react";
import { Button } from "reactstrap"

import "../styles/layout.css";

const button = (props) => (
	<Button className="button-layout" 
		to={props.go}
		style={{ padding: props.size}}
		
		>
		{props.label}
	</Button>
)

export default button
