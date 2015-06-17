var Bacon = require('baconjs');

module.exports = function(){
  return {
    fetch: new Bacon.Bus(),
    clear: new Bacon.Bus()
  };
};
