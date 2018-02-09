import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: []
		};

		this.onAddOption = this.onAddOption.bind(this);
		this.onChooseWhatToDo = this.onChooseWhatToDo.bind(this);
		this.onClearAll = this.onClearAll.bind(this);
	}

	render() {
		return (
			<div>
				<Header
					title="Indecision App"
					subtitle="Put yourself in the hands of computer"
				/>
				<ActionButton
					onChooseWhatToDo={this.onChooseWhatToDo}
					hasOptions={this.state.options.length > 0}
				/>
				<Options options={this.state.options} />
				<AddOption onAddOption={this.onAddOption} />
				<button onClick={this.onClearAll}> Clear all </button>
			</div>
		);
	}

	onAddOption(option) {
		const { options } = this.state;

		if (!option) {
			return 'Option cannot be empty';
		} else if (options.includes(option)) {
			return 'Option already exists. Please enter a new one.';
		}

		const updatedOptions = [...options, option];
		this.setState({ options: updatedOptions });
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
		<button onClick={onChooseWhatToDo} disabled={!hasOptions}>
			What should I do?
		</button>
	);
}

function Options({ options }) {
	return options.map(option => <li key={option}> {option} </li>);
}

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			option: '',
			error: undefined
		};

		this.onAddOptionChange = this.onAddOptionChange.bind(this);
		this.onAddOption = this.onAddOption.bind(this);
	}

	render() {
		return (
			<form onSubmit={this.onAddOption}>
				<input
					type="text"
					value={this.state.option}
					onChange={this.onAddOptionChange}
					placeholder="Enter option"
					name="option"
				/>
				<button type="submit"> Add </button>
				{this.state.error && <p>{this.state.error}</p>}
			</form>
		);
	}

	onAddOptionChange(event) {
		this.setState({ option: event.target.value });
	}

	onAddOption(event) {
		event.preventDefault();

		const option = event.target.elements.option.value.trim();
		const error = this.props.onAddOption(option);

		this.setState({ option: '', error });
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
