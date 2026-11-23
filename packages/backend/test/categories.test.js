import { test } from 'node:test'
import assert from 'node:assert/strict'
import { categoryOptions, filterProducts } from '../../shared/categories.js'

test('only the two new categories are offered even for legacy products', () => {
  assert.deepEqual(categoryOptions([{category:'水果'}]), ['好货内购','福利专区'])
})
test('all products remain visible and legacy products appear under good deals', () => {
  const items = [{category:'水果'}, {category:'福利专区'}, {category:null}]
  assert.deepEqual(filterProducts(items, ''), items)
  assert.deepEqual(filterProducts(items, '好货内购'), [items[0], items[2]])
  assert.deepEqual(filterProducts(items, '福利专区'), [items[1]])
})
