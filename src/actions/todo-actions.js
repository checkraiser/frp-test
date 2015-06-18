var Bacon = require('baconjs');
module.exports = {
	getItems: new Bacon.Bus(),
	addItem: new Bacon.Bus(),
	removeItem: new Bacon.Bus()
}