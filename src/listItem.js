import React from 'react';
import './listItem.css';

class ListItem extends React.Component {
	render() {
		return (
			<div className="ListItem">
				<div className="toggle">
					<input type="checkbox" checked={this.props.completed} onChange={(event) => {
						this.props.onComplete(event, this.props.id);
					}}/>
				</div>
				<div className="label">{this.props.text}</div>
				<div className="delete">
					<button onClick={() => {
						this.props.onRemove(this.props.id);
					}}>X
					</button>
				</div>
			</div>
		);
	}
}

export default ListItem;
