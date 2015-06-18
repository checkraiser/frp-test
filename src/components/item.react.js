
var React = require('react');

const Item = React.createClass({
	render: function() {
		return (
			<div>{this.props.item.text}<br/>
			<button onClick={() => this.props.actions.removeItem.push(this.props.item.id)}>Remove</button></div>
		)
	}
});

module.exports = Item;
