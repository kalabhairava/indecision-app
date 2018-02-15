import React from 'react';
import Option from './Option';

const Options = props => {
	return (
		<div>
			{props.options.length === 0 && (
				<p className="widget-header__message">
					Please add some options to get started
				</p>
			)}

			{props.options.length > 0 && (
				<div>
					<div className="widget-header">
						<h3 className="widget-header__title">Your Options</h3>
						<button className="button button--link" onClick={props.onRemoveAll}>
							Remove all
						</button>
					</div>
					<div>
						{props.options.map((option, index) => (
							<Option
								key={option}
								index={index + 1}
								optionText={option}
								onRemove={props.onRemove}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Options;
