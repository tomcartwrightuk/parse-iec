'use strict';

var assert = require('assert');
var bytes = require('../index.js');

describe('test parse function', function(){
  it('Should return null if input invalid', function(){
    assert.strictEqual(bytes.parse(undefined), null);
    assert.strictEqual(bytes.parse(null), null);
    assert.strictEqual(bytes.parse(true), null);
    assert.strictEqual(bytes.parse(false), null);
    assert.strictEqual(bytes.parse(NaN), null);
    assert.strictEqual(bytes.parse(function(){}), null);
    assert.strictEqual(bytes.parse({}), null);
  });

  it('should parse mi', function() {
    assert.equal(bytes.parse('1mi'), 1);
    assert.equal(bytes.parse('1MI'), 1);
    assert.equal(bytes.parse('512mi'), 512);
    assert.equal(bytes.parse('1024mi'), 1024);
  });

  it('should parse gi', function() {
    assert.equal(bytes.parse('1gi'), 1024);
    assert.equal(bytes.parse('1Gi'), 1024);
    assert.equal(bytes.parse('2gi'), 2048);
  });

  it('should parse ti', function() {
    assert.equal(bytes.parse('1ti'), 1048576);
    assert.equal(bytes.parse('2ti'), 2097152);
  });
});
