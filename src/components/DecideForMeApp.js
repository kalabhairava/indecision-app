import React from 'react';
import Header from './Header';
import ActionButton from './ActionButton';
import Options from './Options';
import AddOption from './AddOption';
import ResultModal from './ResultModal';

class DecideForMeApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  // ----------------------------------------------------------------------------
  // Class Methods
  //-----------------------------------------------------------------------------
  onAddOption = (option) => {
    const { options } = this.state;

    if (!option) {
      return 'Option cannot be empty.';
    } else if (options.includes(option)) {
      return 'Option already exists. Please enter a new one.';
    }

    const updatedOptions = [...options, option];
    this.setState({ options: updatedOptions });
  };

  onChooseWhatToDo = () => {
    const { options } = this.state;
    const selectedOptionIndex = Math.floor(Math.random() * options.length);
    this.setState({ selectedOption: options[selectedOptionIndex] });
  };

  onRemoveAll = () => this.setState({ options: [] });

  onRemove = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }));
  };

  onClearSelectedOption = () => this.setState({ selectedOption: undefined });

  // ----------------------------------------------------------------------------
  // Lifecycle methods
  //-----------------------------------------------------------------------------
  render() {
    return (
      <div>
        <Header
          title="DECIDE IT FOR ME"
          subtitle="Don't spend your mental energy on things that don't matter."
        />
        <div className="container">
          <ActionButton
            onChooseWhatToDo={this.onChooseWhatToDo}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              onRemove={this.onRemove}
              onRemoveAll={this.onRemoveAll}
            />
            <AddOption onAddOption={this.onAddOption} />
          </div>
        </div>
        <ResultModal
          selectedOption={this.state.selectedOption}
          onClearSelectedOption={this.onClearSelectedOption}
        />
      </div>
    );
  }

  componentDidMount() {
    const options = JSON.parse(localStorage.getItem('options')) || [];
    this.setState(() => ({
      options
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    // Prevent unnecessary UI re-renderings
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem('options', JSON.stringify(this.state.options));
    }
  }
}

export default DecideForMeApp;
