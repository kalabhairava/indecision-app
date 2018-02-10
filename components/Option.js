import React from 'react';

const Option = function({ optionText, onRemove }) {
	return (
		<li>
			{optionText}
			<button onClick={() => onRemove(optionText)}>Remove</button>
		</li>
	);
};

export default Option;
