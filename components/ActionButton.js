import React from 'react';

const ActionButton = props => (
	<button onClick={props.onChooseWhatToDo} disabled={!props.hasOptions}>
		What should I do?
	</button>
);

export default ActionButton;
