var React = require('react/addons');
var SpotContext = require('./contexts/spot-context');
var Bacon = require('baconjs');
var StationList = require('./components/station-list');


React.render(React.createElement(StationList, {
  context: SpotContext()
}), document.getElementById('spotapp'));
