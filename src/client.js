

var React = require('react/addons');
var TodoActions = require('./actions/todo-actions');
var TodoStore = require('./stores/todo-store')(TodoActions);
var List = require('./components/list.react');

React.render(<List store={TodoStore} actions={TodoActions} />, document.getElementById('spotapp'));

