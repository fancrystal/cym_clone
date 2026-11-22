import { test } from 'node:test'
import assert from 'node:assert/strict'
import { isRongjue } from '../src/commerce/rongjue.js'

test('荣爵需要直属至少10人且团队至少100人', () => {
  assert.equal(isRongjue(10, 100), true)
  assert.equal(isRongjue(9, 100), false)
  assert.equal(isRongjue(10, 99), false)
  assert.equal(isRongjue(11, 101), true)
})
