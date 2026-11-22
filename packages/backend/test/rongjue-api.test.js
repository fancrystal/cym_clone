import { test } from 'node:test'
import assert from 'node:assert/strict'
import jwt from 'jsonwebtoken'
import { createApp } from '../src/app.js'

test('个人资料根据实时团队人数返回荣爵资格', async t => {
  let team = [{ depth: 1, count: 10 }, { depth: 2, count: 90 }]
  const db = { query: async sql => sql.startsWith('SELECT id, phone') ? [[{ id: 1 }]] : [team] }
  const server = createApp({ db, secret: 'test-secret' }).listen(0, '127.0.0.1')
  t.after(() => server.close())
  await new Promise(resolve => server.once('listening', resolve))
  const token = jwt.sign({ id: 1, role: 'user' }, 'test-secret')
  const get = async () => (await (await fetch(`http://127.0.0.1:${server.address().port}/api/me`, { headers: { Authorization: `Bearer ${token}` } })).json()).data
  assert.equal((await get()).is_rongjue, true)
  team = [{ depth: 1, count: 9 }, { depth: 2, count: 91 }]
  assert.equal((await get()).is_rongjue, false)
})
