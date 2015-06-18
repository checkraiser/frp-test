

var React = require('react');

var AddItemComponent = React.createClass({
  getInitialState: function()  {
    return { newItemText: ''}
  },

  render: function() {
    return (
      <div>
        <input type="text" onChange={(e) => this.setState({newItemText: e.target.value})} value={this.state.newItemText}></input>
        <button onClick={() => this.props.actions.addItem.push(this.state.newItemText)}>Add item</button>
      </div>
    )
  }
});

module.exports = AddItemComponent;
