
var React = require('react');

const Item = React.createClass({
	render: function() {
		return (
			<div>{this.props.item.text}<br/>
			<button onClick={() => this._onRemove}>Remove</button></div>
		)
	},
	_onRemove: function() {
		this.props.actions.removeItem.push(this.props.item.id);
	}
});

module.exports = Item;