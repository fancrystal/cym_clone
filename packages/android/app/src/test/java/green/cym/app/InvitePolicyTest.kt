package green.cym.app

import org.junit.Assert.*
import org.junit.Test

class InvitePolicyTest {
    @Test fun acceptsOnlyCymInviteLinks() {
        assertTrue(InvitePolicy.isInvite("https://bdsq.maishikeji.com.cn/#/login?transfer_invite=ABC123"))
        assertTrue(InvitePolicy.isInvite("https://bdsq.maishikeji.com.cn/?transfer_invite=ABC123"))
        assertFalse(InvitePolicy.isInvite("https://bdsq.maishikeji.com.cn.evil.test/#/login?transfer_invite=ABC123"))
        assertFalse(InvitePolicy.isInvite("http://bdsq.maishikeji.com.cn/#/login?transfer_invite=ABC123"))
        assertFalse(InvitePolicy.isInvite("https://bdsq.maishikeji.com.cn/#/login?transfer_invite=%3Cbad%3E"))
        assertFalse(InvitePolicy.isInvite("https://bdsq.maishikeji.com.cn/#/other?transfer_invite=ABC123"))
        assertEquals("https://bdsq.maishikeji.com.cn/#/login?transfer_invite=ABC123", InvitePolicy.normalizeInvite("http://bdsq.maishikeji.com.cn/#/login?transfer_invite=ABC123"))
        assertNull(InvitePolicy.normalizeInvite("http://bdsq.maishikeji.com.cn.evil.test/#/login?transfer_invite=ABC123"))
    }
}
