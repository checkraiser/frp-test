
var Bacon = require('baconjs');
var uuid = require('uuid');
var es6 = require('es6-promise');
var fetch = require('isomorphic-fetch');
var Immutable = require('immutable');

es6.polyfill();

var createItem = function(text) {
	return {
		id: uuid.v1(),
		text: text
	}
}

module.exports = function(actions) {
	var addItem = actions.addItem.map(createItem).flatMap(
			(item) =>
				Bacon.fromPromise(
					fetch('/todos', 
					{
						method: 'post',
						body: item
					})
				)
		).map(
				 response => response.status === 200 ? response.json() : new Bacon.Error(response.statusText)
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
	var updatedTodoItems = Bacon.update(
		Immutable.List(),
		getItems, (oldList, items) => {console.log(items); return items},
		addItem, (oldList, newItem) => oldList.concat(newItem)
	)
	return {
		items: updatedTodoItems
	}
}