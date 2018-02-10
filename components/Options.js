import React from 'react';
import Option from './Option';

const Options = function({ options, onRemove }) {
	if (options.length > 0) {
		return (
			<div>
				<p> Here are your options:</p>
				<ol>
					{options.map(option => (
						<Option key={option} optionText={option} onRemove={onRemove} />
					))}
				</ol>
			</div>
		);
	} else {
		return <p>Enter some options</p>;
	}
};

export default Options;
