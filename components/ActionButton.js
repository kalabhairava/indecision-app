import React from 'react';

const ActionButton = function({ onChooseWhatToDo, hasOptions }) {
	return (
		<button onClick={onChooseWhatToDo} disabled={!hasOptions}>
			What should I do?
		</button>
	);
};

export default ActionButton;
