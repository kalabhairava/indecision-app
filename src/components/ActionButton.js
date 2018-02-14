import React from 'react';

const ActionButton = props => (
	<button
		onClick={props.onChooseWhatToDo}
		disabled={!props.hasOptions}
		className="button-large button-large--action-button"
	>
		What should I do?
	</button>
);

export default ActionButton;
