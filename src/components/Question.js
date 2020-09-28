import React from "react";

const Question = ({ question }) => {
	return (
		<h3
			className="card-title"
			dangerouslySetInnerHTML={{ __html: question }}
		></h3>
	);
};

export default Question;
