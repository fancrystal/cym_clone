import { test } from 'node:test'
import assert from 'node:assert/strict'
import { inviteCodeFromUrl } from '../../h5/src/invite.js'
test('新站点邀请链接可识别且拒绝其他域名', () => {
  assert.equal(inviteCodeFromUrl('https://bdsq.maishikeji.com.cn/#/login?transfer_invite=ABC123'), 'ABC123')
  assert.equal(inviteCodeFromUrl('https://cym.green/#/login?transfer_invite=ABC123'), null)
})
