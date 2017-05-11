import React  from 'react';

class Header extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.onSubmit}>
				<label>
					<input
						type="text"
						placeholder="What needs to be done?"
						value={this.props.value}
						onChange={this.props.onChange}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default Header;
