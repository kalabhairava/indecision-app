import React from 'react';
import Modal from 'react-modal';

const ResultModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.onClearSelectedOption}
    contentLabel="Selected Choice"
    ariaHideApp={false}
    className="modal"
  >
    <h3 className="modal__title"> You should do: </h3>
    <h3 className="modal__option"> {props.selectedOption}</h3>
    <button className="button" onClick={props.onClearSelectedOption}>
      Whoo hoo!!
    </button>
  </Modal>
);

export default ResultModal;
