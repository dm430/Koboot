'use strict';

let util = require('util');
let assert = require('assert-plus');

function inspect(o, privates, levels) {
  assert.optionalBool(privates, 'privates');
  assert.optionalNumber(levels, 'levels');
  privates = (privates === undefined) ? false : privates;
  levels = (levels === undefined) ? 9 : levels;
  return util.inspect(o, false, levels);
}

module.exports = {
  inspect
};
