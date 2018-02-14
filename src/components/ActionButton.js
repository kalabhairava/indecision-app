import React from 'react';

const ActionButton = (props) => (
  <button className="button-big" onClick={props.onChooseWhatToDo} disabled={!props.hasOptions}>
    What should I do?
  </button>
);

export default ActionButton;
