var React = require('react/addons');
var _ = require('lodash');
var Bacon = require('baconjs');


var StationList = React.createClass({
  propTypes: {
    context: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    var stores = this.props.context.stores;
    var initialState;


    stores.stations.onValue(state => initialState = {allStations: state});
    return initialState;
  },

  componentDidMount: function() {
    var stores = this.props.context.stores;
    stores.stations.onValue(state => {this.setState({allStations: state}); alert(state);});
  },
  render: function() {
    if (this.state.allStations && this.state.allStations.length > 0){
      return <div>
        <button onClick={this._clear}>Clear</button>
        <ul>{(this.state.allStations[0].stationName)}</ul>
        </div>
    } else {

      return <div><button onClick={this._fetch}>Fetch</button>Waiting...</div>
    }
  },
  _clear: function(){
    this.props.context.actions.clear.push();
  },
  _fetch: function(){
    this.props.context.actions.fetch.push();
  }
});
module.exports = StationList;
