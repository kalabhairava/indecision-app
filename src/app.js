import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      newOption: '',
      choosenOption: ''
    };

    this.onAddOption = this.onAddOption.bind(this);
    this.onChooseWhatToDo = this.onChooseWhatToDo.bind(this);
    this.onClearAll = this.onClearAll.bind(this);
  }

  render() {
    return (
      <div>
        <Header title="Indecision App" subtitle="Put yourself in the hands of computer" />
        <ActionButton
          onChooseWhatToDo={this.onChooseWhatToDo}
          hasOptions={this.state.options.length > 0}
        />
        <Options options={this.state.options} />
        <AddOption
          onAddOption={this.onAddOption}
          newOption={this.state.newOption}
          onAddOptionChange={this.onAddOptionChange}
        />
        <button onClick={this.onClearAll}> Clear all </button>
      </div>
    );
  }

  onAddOption(event) {
    event.preventDefault();

    let { options, newOption } = this.state;
    newOption = newOption.trim();

    if (newOption) {
      if (options.includes(newOption)) {
        alert('Option already exists');
        this.setState({ newOption: '' });
      } else {
        const updatedOptions = [...options, newOption];
        this.setState({ options: updatedOptions, newOption: '' });
      }
    }
  }

  onChooseWhatToDo() {
    const { options } = this.state;

    if (options.length === 0) {
      alert('Add some options');
    } else {
      const choosenOption = Math.floor(Math.random() * options.length);
      alert(`You should do ${options[choosenOption]}`);
    }
  }

  onClearAll() {
    this.setState({ options: [] });
  }
}

function Header({ title, subtitle }) {
  return (
    <div>
      <h1> {title} </h1>
      <h3> {subtitle} </h3>
    </div>
  );
}

function ActionButton({ onChooseWhatToDo, hasOptions }) {
  return (
    <button onClick={onChooseWhatToDo} disabled={hasOptions}>
      What should I do?
    </button>
  );
}

function Options({ options }) {
  return options.map((option) => <li key={option}> {option} </li>);
}

class AddOption extends React.Component {
  constructor(props) {
    const { onAddOption, newOption, onAddOptionChange } = props;

    this.state = {
      error: undefined
    };

    this.onAddOptionChange = this.onAddOptionChange.bind(this);
  }

  render() {
    return (
      <form onSubmit={onAddOption}>
        <input
          type="text"
          value={newOption}
          onChange={onAddOptionChange}
          placeholder="Enter option"
          name="option"
        />
        <button type="submit"> Add </button>
        {this.state.error && <p>{this.state.error}</p>}
      </form>
    );
  }

  onAddOptionChange(event) {
    this.setState({ newOption: event.target.value });
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
