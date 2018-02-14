import React from 'react';

const Option = (props) => (
  <li>
    {props.optionText}
    <button onClick={() => props.onRemove(props.optionText)} className="button button--link">
      Remove
    </button>
  </li>
);

export default Option;
