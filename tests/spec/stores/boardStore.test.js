/** @jsx React.DOM */
/*jshint expr: true*/
var expect = require('chai').expect;
var spotActions = require('../../../src/actions/spot-actions')();
var store = require('../../../src/stores/spot-store')(spotActions);

describe('Spot Store', function() {
  var immutableBoard;

  beforeEach(function() {
    store.getAll.onValue(newBoard => immutableBoard = newBoard);
  });

  it('generates the board correctly', function() {
    var board = immutableBoard.toJS();

    expect(board.length).to.equal(544);

  });


});
