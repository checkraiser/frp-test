
var Bacon = require('baconjs');
var uuid = require('uuid');
var es6 = require('es6-promise');
var fetch = require('isomorphic-fetch');
var Immutable = require('immutable');

es6.polyfill();



module.exports = function(actions) {
	var addItem = actions.addItem.flatMap(
			(item) =>
				Bacon.fromPromise(
					fetch('/todos',
					{
						method: 'post',
						headers: {
					    'Accept': 'application/json',
					    'Content-Type': 'application/json'
					  },
						body: JSON.stringify(
							{text: item}
						)
					}).
					then(
						(response) => response.json()
					)
				).map(
					(json) => json
				)
		)
		.log()

	var getItems = actions.getItems.flatMap(
			() =>
				Bacon.fromPromise(
					fetch(
						'/todos'
					).
					then(
						(response) => response.json()
					)
				).map(
					(json) => json
				)
		)

	var removeItem = actions.removeItem.flatMap(
		(item_id) =>
				Bacon.fromPromise(
					fetch(
						  '/todos/' + item_id,
						  {
						  	method: 'DELETE',
						  	headers: {
						  		'Accept': 'application/json',
					    		'Content-Type': 'application/json'
						  	}
						  }
					).
					then(
						(response) => response.json()
					)
				).map(
					(json) => json
				)
	)
	var updatedTodoItems = Bacon.update(
		Immutable.List(),
		getItems, (oldList, items) => items,
		addItem, (oldList, items) => items,
		removeItem, (oldList, items) => items
	)
	return {
		items: updatedTodoItems
	}
}
