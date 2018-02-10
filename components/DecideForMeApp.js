import React from 'react';
import Header from './Header';
import ActionButton from './ActionButton';
import Options from './Options';
import AddOption from './AddOption';

class DecideForMeApp extends React.Component {
	state = {
		options: []
	};

	// ----------------------------------------------------------------------------
	// Class Methods
	//-----------------------------------------------------------------------------
	onAddOption = option => {
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

		if (options.length === 0) {
			alert('Add some options');
		} else {
			const choosenOption = Math.floor(Math.random() * options.length);
			alert(`You should do ${options[choosenOption]}`);
		}
	};

	onRemoveAll = () => {
		this.setState({ options: [] });
	};

	onRemove = optionToRemove => {
		this.setState(prevState => ({
			options: prevState.options.filter(option => option !== optionToRemove)
		}));
	};

	render() {
		return (
			<div>
				<Header
					title="Decide for me app"
					subtitle="Put yourself in the hands of computer"
				/>
				<ActionButton
					onChooseWhatToDo={this.onChooseWhatToDo}
					hasOptions={this.state.options.length > 0}
				/>
				<Options options={this.state.options} onRemove={this.onRemove} />
				<AddOption onAddOption={this.onAddOption} />
				<button onClick={this.onRemoveAll}> Remove all </button>
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
