import {test} from 'node:test'
import assert from 'node:assert/strict'
import { inviteCodeFromUrl } from '../../h5/src/invite.js'

test('只接受商圈域名的邀请注册链接，保留邀请码',()=>{
  assert.equal(inviteCodeFromUrl('https://bdsq.maishikeji.com.cn/#/login?transfer_invite=ABC123'), 'ABC123')
  assert.equal(inviteCodeFromUrl('https://bdsq.maishikeji.com.cn/?transfer_invite=ABC123'), 'ABC123')
  for (const url of ['https://bdsq.maishikeji.com.cn.evil.test/#/login?transfer_invite=ABC123','http://bdsq.maishikeji.com.cn/#/login?transfer_invite=ABC123','https://bdsq.maishikeji.com.cn/#/login?transfer_invite=<bad>','https://bdsq.maishikeji.com.cn/#/other?transfer_invite=ABC123']) assert.equal(inviteCodeFromUrl(url),null)
})
