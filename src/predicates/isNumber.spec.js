const test = require('tape')

const isFunction = require('../core/isFunction')

const isNumber = require('./isNumber')

test('isNumber predicate', t => {
  t.ok(isFunction(isNumber), 'is a function')
  t.end()
})
