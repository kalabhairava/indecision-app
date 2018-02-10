import React from 'react';
import Modal from 'react-modal';

const ResultModal = props => (
	<Modal
		isOpen={!!props.selectedOption}
		onRequestClose={props.onClearSelectedOption}
		contentLabel="Selected Choice"
	>
		<h3> You should do {props.selectedOption}</h3>
		<button onClick={props.onClearSelectedOption}>Whoo hoo!!</button>
	</Modal>
);

export default ResultModal;
