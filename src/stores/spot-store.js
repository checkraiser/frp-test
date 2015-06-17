var Bacon = require('baconjs')
var _     = require('lodash')
var Immutable = require('immutable');
require('es6-promise').polyfill()
require('isomorphic-fetch')
var METADATA_URL = 'http://rata.digitraffic.fi/api/v1/metadata/station'

var empty = () => [];

module.exports = function(actions) {
  var ajax = Bacon.fromPromise(fetch(METADATA_URL)).flatMap(response => Bacon.fromPromise(response.json()));
  var fetchStations = actions.fetch.flatMap(ajax);
  var clearProperty = actions.clear.map(empty);
  var stations = fetchStations.merge(clearProperty).toProperty([]);
  return {
    stations: stations
  }

}
