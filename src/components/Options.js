import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button button--link" onClick={props.onRemoveAll}>
          Remove all
        </button>
      </div>

      {props.options.length === 0 && (
        <p className="widget-header__message">Please add some options to get started</p>
      )}
      <ol>
        {props.options.map((option) => (
          <Option key={option} optionText={option} onRemove={props.onRemove} />
        ))}
      </ol>
    </div>
  );
};

export default Options;
