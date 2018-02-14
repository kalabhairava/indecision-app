import React from 'react';

class AddOption extends React.Component {
  state = {
    option: '',
    error: undefined
  };

  onAddOptionChange = (event) => {
    this.setState({ option: event.target.value });
  };

  onAddOption = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.onAddOption(option);

    if (error) {
      this.setState({ error }); // don't reset the input box if there is an error
    } else {
      this.setState({ option: '', error });
    }
  };

  render() {
    return (
      <form onSubmit={this.onAddOption} autoComplete="off">
        <input
          type="text"
          value={this.state.option}
          onChange={this.onAddOptionChange}
          placeholder="Enter option"
          name="option"
        />
        <button className="button"> Add </button>
        {this.state.error && <p>{this.state.error}</p>}
      </form>
    );
  }
}

export default AddOption;
