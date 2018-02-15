import React from 'react';

const Option = props => (
	<div className="option">
		<span className="option__text">
			{props.index}. {props.optionText}
		</span>
		<button
			onClick={() => props.onRemove(props.optionText)}
			className="button button--link"
		>
			Remove
		</button>
	</div>
);

export default Option;
