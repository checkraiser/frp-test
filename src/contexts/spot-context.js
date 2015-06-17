var SpotStore = require('../stores/spot-store');
var SpotActions = require('../actions/spot-actions');

module.exports = function() {

    var actions =  SpotActions();

    var stores =  SpotStore(actions);

    return {actions, stores};
};
