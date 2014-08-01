/* global describe, it */
'use strict';

var assert = require('assert');

describe('#throws', function () {
  var _throws = require('../../src/annotation').throws;

  it('should return the trimmed string', function () {
    assert.equal(_throws.parse('   '), '');
    assert.equal(_throws.parse('   '), '');
    assert.equal(_throws.parse('\ntest\t'), 'test');
    assert.equal(_throws.parse('\nte\nst\t'), 'te\nst');
  });
});
