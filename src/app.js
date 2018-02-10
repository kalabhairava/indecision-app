import React from 'react';
import ReactDOM from 'react-dom';

// ----------------------------------------------------------------------------
// Main Container Component
//-----------------------------------------------------------------------------
class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: []
		};

		this.onAddOption = this.onAddOption.bind(this);
		this.onChooseWhatToDo = this.onChooseWhatToDo.bind(this);
		this.onRemoveAll = this.onRemoveAll.bind(this);
		this.onRemove = this.onRemove.bind(this);
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

	componentDidUpdate() {
		localStorage.setItem('options', JSON.stringify(this.state.options));
	}

	// ----------------------------------------------------------------------------
	// Class Methods
	//-----------------------------------------------------------------------------
	onAddOption(option) {
		const { options } = this.state;

		if (!option) {
			return 'Option cannot be empty.';
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

	onRemoveAll() {
		this.setState({ options: [] });
	}

	onRemove(optionToRemove) {
		this.setState(prevState => ({
			options: prevState.options.filter(option => option !== optionToRemove)
		}));
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

Header.defaultProps = {
	title: 'Indecision App'
};

function ActionButton({ onChooseWhatToDo, hasOptions }) {
	return (
		<button onClick={onChooseWhatToDo} disabled={!hasOptions}>
			What should I do?
		</button>
	);
}

function Options({ options, onRemove }) {
	if (options.length > 0) {
		return (
			<div>
				<p> Here are your options:</p>
				<ol>
					{options.map(option => (
						<Option key={option} optionText={option} onRemove={onRemove} />
					))}
				</ol>
			</div>
		);
	} else {
		return <p>Enter some options</p>;
	}
}

function Option({ optionText, onRemove }) {
	return (
		<li>
			{optionText}
			<button onClick={() => onRemove(optionText)}>Remove</button>
		</li>
	);
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
			<form onSubmit={this.onAddOption} autoComplete="off">
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

		if (error) {
			this.setState({ error }); // don't reset the input box if there is an error
		} else {
			this.setState({ option: '', error });
		}
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
