import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			options: [],
			newOption: '',
			choosenOption: ''
		};

		this.onAddOption = this.onAddOption.bind(this);
		this.onChooseWhatToDo = this.onChooseWhatToDo.bind(this);
		this.onAddOptionChange = this.onAddOptionChange.bind(this);
		this.onClearAll = this.onClearAll.bind(this);
	}

	render() {
		return (
			<div>
				<Header />
				<ActionButton onChooseWhatToDo={this.onChooseWhatToDo} />
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

		const { options, newOption } = this.state;
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

	onAddOptionChange(event) {
		this.setState({ newOption: event.target.value });
	}

	onClearAll() {
		this.setState({ options: [] });
	}
}

function Header() {
	return (
		<div>
			<h1> Indecision App </h1>
			<h3> Put yourself at the hands of a computer </h3>
		</div>
	);
}

function ActionButton({ onChooseWhatToDo }) {
	return <button onClick={onChooseWhatToDo}> What should I do? </button>;
}

function Options({ options }) {
	return options.map(option => <li key={option}> {option} </li>);
}

function AddOption({ onAddOption, newOption, onAddOptionChange }) {
	return (
		<form onSubmit={onAddOption}>
			<input
				type="text"
				value={newOption}
				onChange={onAddOptionChange}
				placeholder="Enter option"
			/>
			<button type="submit"> Add </button>
		</form>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
