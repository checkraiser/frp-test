

var React = require('react');
var Item = require('./item.react');
var AddItemComponent = require('./add-item-component.react')
var List = React.createClass({
	getInitialState: function()  {
		return {items: [], newItemText: ''}
	},
	componentDidMount: function() {
		this._unsubscribe = this.props.store.items.onValue(items => this.setState({items: items}));
		this.props.actions.getItems.push();
	},
	componentWillUnmount: function() {
		this._unsubscribe();
	},
	render: function() {
		var items = this.state.items.map(item => <Item item={item} actions={this.props.actions} key={item.id} />);
		return <div>{items}
				<br/>
				<AddItemComponent actions={this.props.actions} />
			</div>
	}
});

module.exports = List;
