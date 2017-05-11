import React, { Component } from 'react';
import Header from './header';
import ListItem from './listItem';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			value: '',
			items: [
				{
					id: 1,
					text: 'Hallo',
					completed: false,
				},
				{
					id: 2,
					text: 'Welt',
					completed: true,
				},
				{
					id: 3,
					text: 'Berlin',
					completed: false,
				}
			],
		};

		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleComplete = this.toggleComplete.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	handleInput(event) {
		this.setState({
			value: event.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		if (!this.state.value) {
			return;
		}

		let items = [
			...this.state.items,
			{
				id: Date.now(),
				text: this.state.value,
				completed: false,
			}
		];

		this.setState({
			value: '',
			items
		});
	}

	toggleComplete(event, id) {
		const newItems = this.state.items.map((item) => {
			if (item.id !== id) {
				return item;
			}

			console.log(item.text, id, event.target.checked);

			return {
				...item,
				completed: event.target.checked,
			};
		});

		this.setState({
			items: newItems
		});
	}

	handleRemove(id) {
		const items = this.state.items.filter((item) => {
			return (item.id !== id);
		});

		console.log(items);

		this.setState({
			items
		});
	}

	render() {
		const items = this.state.items.map((item) => (
			<ListItem
				key={item.id}
				onComplete={this.toggleComplete}
				onRemove={this.handleRemove}
				{...item}
			/>
		));

		return (
			<div className="App">
				<Header
					value={this.state.value}
					onChange={this.handleInput}
					onSubmit={this.handleSubmit}
				/>
				{items}
			</div>
		);
	}
}

export default App;
