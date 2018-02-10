import React from 'react';

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

export default AddOption;
