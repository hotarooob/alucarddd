import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/2e8338d1327f0dc89e36c.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = ` 

 مرحبا ${taguser}
 *📜┇قـائـمـة اوامـر الـبـوت┇📜*
*❑╎الـحـالـه ⚠️ ⦂ 『عـام』*
*❑╎الـمطـور ⦂『 ايرين』*
*❑╎الـمنـصـة🕊️⦂『هـيـروكـو』*
*✦━━━━━━[ 𝑬𝑹𝑰𝑵 ]━━━━━━✦* 
     *𖣐━┋ قائمـة المجموعات┋━𖣐*
*⋄━────═◞⬪⋇⬪◟═────━⋄*
*✦━━━✤━ –⊰ ❖ ⊱– ━✤━━━✦*
*❐💎↜ ╎『.منشن 』*
*❐💎↜ ╎『.المشرفين』* 
*❐💎↜ ╎『.الاشباح』*
*❐💎↜ ╎『.مخفي 』*
*❐💎↜ ╎『.طرد』*
*❐💎↜ ╎『.جروب فتح』*
*❐💎↜ ╎『.جروب غلق』*
*❐💎↜ ╎『.ترقية』*
*❐💎↜ ╎『.تخفيض』*
*❐💎↜ ╎『.لينك』*
*❐💎↜ ╎『.الجروب』*
*❐💎↜ ╎『.احذف』*

*✦━━━━━━[ 🪽 ]━━━━━━✦*  
      *𖣐━━┋ قائمـة الـترفيـه┋━━𖣐*
*⋄━────═◞⬪⋇⬪◟═────━⋄*
*❐💎↜ ╎『.قرآن』*
*❐💎↜ ╎『.تصميم』*
*❐💎↜ ╎『.لكرتون』*
*❐💎↜ ╎『.نسبة』*
*❐💎↜ ╎『.ورع』*
*❐💎↜ ╎『.عين』*
*❐💎↜ ╎『.علم』*
*❐💎↜ ╎『.اعرف』*
*❐💎↜ ╎『.تلميح』*
*❐💎↜ ╎『.سلاحي』*
*❐💎↜ ╎『.بوت بذكاء اصطناعي』*
*❐💎↜ ╎『.سؤال 』*
*❐💎↜ ╎『.تخيل』*
*❐💎↜ ╎『.ذكاء』*
*❐💎↜ ╎『.دين』*
*❐💎↜ ╎『.شطرنج』*
*❐💎↜ ╎『.لكرتون』*
*❐💎↜ ╎『.احزر』*
*❐💎↜ ╎『.رياضيات』*
*❐💎↜ ╎『.زواج』*
*❐💎↜ ╎『.طلاق』*
*❐💎↜ ╎『.ميمز انمي』*
*❐💎↜ ╎『.اكس』*
*❐💎↜ ╎『.لو』*
*❐💎↜ ╎『.نصيحه』*
*❐💎↜ ╎『.قدوتي』*
*❐💎↜ ╎『.توب』*
*❐💎↜ ╎『.حب』*
*❐💎↜ ╎『.خمن』*
*❐💎↜ ╎『.تحدي』*
*❐💎↜ ╎『.اسبوعي』*
*❐💎↜ ╎『.يومي』*
*❐💎↜ ╎『.انطق』*
*❐💎↜ ╎『.هل』*
*✦━━━━━━[ 🪽 ]━━━━━━✦*  
      *𖣐━━┋ قائمـة التحميل┋━━𖣐*
*⋄━────═◞⬪⋇⬪◟═────━⋄*
*❐💎↜ ╎『.خلفيه』*
*❐💎↜ ╎『.كيوته』*
*❐💎↜ ╎『.تاج』* 
*❐💎↜ ╎『.بنت』*
*❐💎↜ ╎『.تطقيم』*
*❐💎↜ ╎『.قطه』*
*❐💎↜ ╎『.تطبيق』*
*❐💎↜ ╎『.صوت-انمي』*
*❐💎↜ ╎『.فيسبوك』*
*❐💎↜ ╎『.فيديو』*
*❐💎↜ ╎『.لصوت』*
*❐💎↜ ╎『.البحث』*
*❐💎↜ ╎『.شغل』*
*❐💎↜ ╎『.تيك』*
*❐💎↜ ╎『.صوره』*
*❐💎↜ ╎『.انستا』*
*✦━━━━━━[ 🪽 ]━━━━━━✦*  
      *𖣐━━┋ قائمـة الأعضاء┋━━𖣐*
*⋄━────═◞⬪⋇⬪◟═────━⋄*
*❐💎↜ ╎『.زخرفه』*
*❐💎↜ ╎『.دمج😮+😶』*
*❐💎↜ ╎『.راتب』*
*❐💎↜ ╎『.حظي』*
*❐💎↜ ╎『.نصيحه』*
*❐💎↜ ╎『.اكل』*
*❐💎↜ ╎『.شخصيه』*
*❐💎↜ ╎『.منشي』*
*❐💎↜ ╎『.بروفايل』*
*❐💎↜ ╎『.ميسي』*
*❐💎↜ ╎『.رونالدو』*
*❐💎↜ ╎『.انمي』*
*❐💎↜ ╎『.اهجم』*
*❐💎↜ ╎『.دافع』*
*❐💎↜ ╎『.الجمال』*
*❐💎↜ ╎『.لفل』*
*❐💎↜ ╎『.ملصق』*
*❐💎↜ ╎『.الماسي』*
*❐💎 ↜╎『.تحزير 』*
*❐💎 ↜╎『كت 』*
*❐💎 ↜╎『تج 』*
*❐💎↜ ╎ 『.البنك』*
*❐💎↜ ╎『.حديث』*
*❐💎↜ ╎『.صورة الكهف』*
*❐💎↜ ╎『.ادعيه』*
*❐💎↜ ╎『.اذكار المساء』*
*❐💎↜ ╎『.اذكار الصباح』*
*❐💎↜ ╎『.خط』*
*❐💎 ↜╎『.آيه 』*
*✦━━━━━━[ 🪽 ]━━━━━━✦*  
      *𖣐━━┋ قـسـم التحويل┋━━𖣐*
*⋄━────═◞⬪⋇⬪◟═────━⋄*
*❐💎↜ ╎『.جوجل』*
*❐💎↜ ╎『.لصورة』*
*❐💎↜ ╎『.لفيديو』*
*❐💎↜ ╎『.تليجراف』*
*❐💎↜ ╎『.تيك』*
*❐💎↜ ╎『.ميمز 』*
*❐💎↜ ╎『.ملصق』*
*❐💎↜ ╎『.ستيكر』*
*❐💎↜ ╎『.سرقه』*
*❐💎↜ ╎『.حيوان』*
*❐💎↜ ╎『.شراء』*
*❐💎↜ ╎『.ترجم』*
*✦━━━━━━[ 🪽 ]━━━━━━✦*  
      *𖣐━━┋ قـسـم الـمطـور┋━━𖣐*
*⋄━────═◞⬪⋇⬪◟═────━⋄*
*❐💎↜ ╎『.المطور 』*
*❐💎↜ ╎『.بريم』*
*❐💎↜ ╎『.انضم 』*
*❐💎↜ ╎『.اخرج』*
*❐💎↜ ╎『.رفع_البلوك』*
*❐💎↜ ╎『.بان』*
*❐💎↜ ╎『.بلوك』*
*❐💎↜ ╎『.حظر』*
*❐💎↜ ╎『.الغاء المحظروين』*
*❐💎↜ ╎『.البلوكات』*
*❐💎↜ ╎『.فحص』*
*✦━━━✤━ –⊰ ❖ ⊱– ━✤━━━✦*`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['المهام'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }
