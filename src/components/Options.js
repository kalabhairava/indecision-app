import React from 'react';
import Option from './Option';

const Options = props => {
	if (props.options.length > 0) {
		return (
			<div>
				<p> Here are your options:</p>
				<ol>
					{props.options.map(option => (
						<Option
							key={option}
							optionText={option}
							onRemove={props.onRemove}
						/>
					))}
				</ol>
			</div>
		);
	} else {
		return <p>Enter some options</p>;
	}
};

export default Options;
