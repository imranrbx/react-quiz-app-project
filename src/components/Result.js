import React from "react";

const Result = ({ result, onFinish }) => {
	return (
		<React.Fragment>
			<h2>Result: {result}</h2>
			<button
				onClick={() => {
					onFinish(false);
				}}
			>
				Play Again
			</button>
		</React.Fragment>
	);
};

export default Result;
