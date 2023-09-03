require("dotenv").config();  

  //import fetch from "node-fetch"; 
  const moment = require("moment-timezone"); 
  //const fetch = require("node-fetch"); 
  const axios = require("axios"); 
  const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia,  areJidsSameUser, getContentType, downloadMediaMessage } = require("@adiwajshing/baileys");  
  const fs = require("fs");  
  const util = require("util");  
  const chalk = require("chalk");  
  const { Configuration, OpenAIApi } = require("openai");  
  const { DiscussServiceClient } = require("@google-ai/generativelanguage"); 
  const { GoogleAuth } = require("google-auth-library"); 
  
  
  module.exports = client = async (client, m, chatUpdate, store) => {  
    try {  
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";  

  
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//If you want a single prefix, you replace it with this = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await client.decodeJid(client.user.id)
 

//const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
//const groupMetadata = m.isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
//const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
//const groupName = m.isGroup ? groupMetadata.subject : ''
//const participants = m.isGroup ? await groupMetadata.participants : ''
//const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
//const isBotAdmins = m.isGroup ? groupAdmins.includes(owner) : false
//const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
//const welcm = m.isGroup ? wlcm.includes(from) : false
//const welcmm = m.isGroup ? wlcmm.includes(from) : false
//const AntiLink = m.isGroup ? ntilink.includes(from) : false 
//const isBan = banned.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const qtod = m.quoted? "true":"false"
const id = '919938770375@s.whatsapp.net'
const owner = ["919938770375"];
const botname = process.env.BOT_NAME;
const owner_name = process.env.OWNER_NAME;
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]


const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
const isEval = body.startsWith('=>')
 
//=================================================//}  
//  Bot Prosess Time
  const uptime = process.uptime();
  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);
//Uptime
  const uptimeMessage = `*I am alive now since ${hours}h ${minutes}m ${seconds}s*`;
  

           //TIME Wisher 
 const xtime = moment.tz('Asia/Colombo').format('HH:mm:ss') 
 const xdate = moment.tz('Asia/Colombo').format('DD/MM/YYYY') 
 const time2 = moment().tz('Asia/Colombo').format('HH:mm:ss')   
   if(time2 < "23:59:00"){ 
 var pushwish = `Good Night 🌌` 
  } 
  if(time2 < "19:00:00"){ 
 var pushwish = `Good Evening 🌃` 
  } 
  if(time2 < "18:00:00"){ 
 var pushwish = `Good Evening 🌃` 
  } 
  if(time2 < "15:00:00"){ 
 var pushwish = `Good Afternoon 🌅` 
  } 
  if(time2 < "11:00:00"){ 
 var pushwish = `Good Morning 🌄` 
  } 
  if(time2 < "05:00:00"){ 
 var pushwish = `Good Morning 🌄` 
  }  
    
  

//const sendMsg = await sock.sendMessage(id, reactionMessage)
    //  const from = m.chat;  
      const reply = m.reply;  
      //const sender = m.sender;  
     // const mek = chatUpdate.messages[0];  
  
      const color = (text, color) => {  
        return !color ? chalk.green(text) : chalk.keyword(color)(text);  
      };  
  



function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function loading () {
var goutamload = [
`ㅤʟᴏᴀᴅɪɴɢ
《 █▒▒▒▒▒▒▒▒▒▒▒》10%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 ████▒▒▒▒▒▒▒▒》30%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 ███████▒▒▒▒▒》50%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 ██████████▒▒》80%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 ████████████》100%`,
"ʟᴏᴀᴅɪɴɢ ᴄᴏᴍᴘʟᴇᴛᴇ"
]
let { key } = await client.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < goutamload.length; i++) {
//await delay(10)

    await client.relayMessage(m.chat, {
      protocolMessage: {
        key: key,
        type: 14,
        editedMessage: {
          conversation: goutamload[i]
        }
      }
    }, {});
}}  
  

if (command) {
client.sendPresenceUpdate('recording', from)
}



if (command) {
client.readMessages([m.key])
}

  
      // Group  
     const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";  
     const groupName = m.isGroup ? groupMetadata.subject : "";  
  
      // Push Message To Console  
      let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;  
  
      if (isCmd && !m.isGroup) {  
        console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));  
      } else if (isCmd && m.isGroup) {  
        console.log(  
          chalk.black(chalk.bgWhite("[ LOGS ]")),  
          color(argsLog, "turquoise"),  
          chalk.magenta("From"),  
          chalk.green(pushname),  
          chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),  
          chalk.blueBright("IN"),  
          chalk.green(groupName)  
        );  
      }  
  
      if (isCmd) {  
        switch (command) {  
          case "help":  
          case "menu":  
const reactionMessage = {
    react: {
        text: "💖", // use an empty string to remove the reaction
        key: m.key
    }
}
await client.sendMessage(m.chat, reactionMessage)            
    // let thumb = "./me.jpg"; 
     let me = m.sender 


 await loading()
   await m.reply(` 
╭––『 *${botname}* 』 
┆ Hi 👋  
╰–❖  *${pushname}* 
╭–––––––––––––––༓ 
┆✑  *${pushwish}* 😄 
╰–––––––––––––––༓ 
╭–– 『 *Bot Info* 』      
┆ *Bot Name* : *${botname}*
┆ *Owner Name* : *${owner_name}*
┆ *Prefix* :  *${prefix}*
┆ *Uptime* : *${hours}h ${minutes}m ${seconds}s*
┆ *Mode* : *Public*
╰–––––––––––––––༓ 
╭––『 *User Info* 』 
┆𝗡𝗮𝗺𝗲 : *${pushname}*
┆𝗡𝘂𝗺𝗯𝗲𝗿 : @${me.split('@')[0]} 
┆𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ✅ 
╰–––––––––––––––༓ 
╭––『 *Time Info* 』 
┆𝗧𝗶m 𝗲 : *${xtime}*
┆𝗗𝗮𝘁𝗲 : *${xdate}*
╰–––––––––––––––༓ 
╭––『 *Help* 』 
┆✑  Please Type The */help* 
╰–––––––––––––––༓ﾠ 
╭––『 *ChatGPT* 』ﾠ 
┆❏.gpt 🅕 
┆❏.img 🅕 
┆❏.dall 🅕 
╰–––––––––––––––༓ 
╭––『 *Bard* 』 
┆❏.bard 🅕 
╰–––––––––––––––༓
╭––『 *Bot* 』ﾠ 
┆❏.bug 🅕 
┆❏.setbio 🅕 
┆❏.setname 🅕 
╰–––––––––––––––༓ 
╭––『 *Sticker menu* 』 
┆❏.sticker🅕 
╰–––––––––––––––༓
╭––『 *Search menu* 』ﾠ 
┆❏.google 🅕 
┆❏.insta 🅕 
┆❏.apk 🅕 
┆❏.yts
╰–––––––––––––––༓ 
╭––『 *Downloader* 』 
┆❏  Comming Soon....
╰–––––––––––––––༓
╭––『 *Anime (18+)* 』
┆❏.hentai 🅕
┆❏.neko 🅕
┆❏.trap 🅕
┆❏.gasm 🅕
┆❏.ahegao 🅕
┆❏.ass 🅕
┆❏.bdsm 🅕
┆❏.blowjob 🅕
┆❏.cuckold 🅕
┆❏.cum 🅕
┆❏.milf 🅕
┆❏.eba 🅕
┆❏.ero 🅕
┆❏.femdom 🅕
┆❏.foot 🅕
┆❏.gangbang 🅕
┆❏.glasses 🅕
┆❏.jahy 🅕
┆❏.masturbation 🅕
┆❏.manga 🅕
┆❏.neko-hentai 🅕
┆❏.neko-hentai2 🅕
┆❏.nsfwloli 🅕
┆❏.orgy 🅕
┆❏.panties 🅕 
┆❏.pussy 🅕
┆❏.tentacles 🅕
┆❏.thighs 🅕
┆❏.yuri 🅕
┆❏.zettai 🅕
╰–––––––––––––––༓
          `); 
 
break;


case 'ping': {
  const reactionMessage = {
    react: {
        text: "📍", // use an empty string to remove the reaction
        key: m.key
    }
}
await client.sendMessage(m.chat, reactionMessage)

 // await loading()  
  const startTime = new Date();
  const pingMsg = await client.sendMessage(m.chat, { text: 'Pinging...' });

 await client.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*Respond Speed: ${new Date() - startTime} ms*`
        }
      }
    }, {});
  } 
break;

case 'runtime':
case 'alive': {
  const reactionMessage = {
    react: {
        text: "🤨", // use an empty string to remove the reaction
        key: m.key
    }
}
await client.sendMessage(m.chat, reactionMessage)
await loading()
  await m.reply(uptimeMessage);
}
break;


 case 'bard': 
   if (!text) throw `*Chat With Bard AI*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Hello*\n*◉ ${prefix + command} write a hello world program in python*`;  
  
 const MODEL_NAME = "models/chat-bison-001"; 
 const API_KEY = process.env.API_KEY; 
  
 const clint = new DiscussServiceClient({ 
   authClient: new GoogleAuth().fromAPIKey(API_KEY), 
 }); 
  
 async function main() { 
   const result = await clint.generateMessage({ 
     model: MODEL_NAME, // Required. The model to use to generate the result. 
     temperature: 0.5, // Optional. Value `0.0` always uses the highest-probability result. 
     candidateCount: 1, // Optional. The number of candidate results to generate. 
     prompt: { 
       // optional, preamble context to prime responses 
       context: "Respond to all the question in good manner.", 
       // Optional. Examples for further fine-tuning of responses. 
  
       // Required. Alternating prompt/response messages. 
       messages: [{ content: text }], 
     }, 
  }); 
      
  await m.reply(`${result[0].candidates[0].content}`);  
  
 } 
  
 main(); 
 break;


case 'setbio':{

if (!text) return m.reply(`Example: ${prefix + command} Hello World`)
    await client.updateProfileStatus(text)
    m.reply(`Bio Sucsessfully changed 2 ${text}`)
    }
 break;
  
case 'setname':{

if (!text) return m.reply(`Where is the name?\nExample: ${prefix + command} Goutam`)
    await client.updateProfileName(text)
    m.reply(`Bot Name Sucsessfully changed 2 ${text}`)
    }
break;

case 'insta': case 'apk': case 'yts': case 'sticker':
  m.reply("This feature is Comming Soon");
break;

 case 'animedance':{ 
  
  
  
  waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)        
             await client.sendImage({ image: { url:waifudd.data.url}}).catch(err => { 
                     return('Error!') 
                 }) 
                 } 
 break;
  

 
                 case 'can': { 
  
         if (!text) return m.reply(`Ask question\n\nExample : ${prefix + command} i dance?`) 
  
                     let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`] 
                 let keh = bisa[Math.floor(Math.random() * bisa.length)] 
                 let jawab = `*Can ${text}*\nAnswer : ${keh}` 
             await m.reply(jawab) 
             } 
             break; 
             case 'is': { 
         if (!text) return m.reply(`Ask question\n\nExample : ${prefix + command} she virgin?`) 
         let apa = [`Yes`, `No`, `It Could Be`, `Thats right`] 
                 let kah = apa[Math.floor(Math.random() * apa.length)] 
                 let jawab = `*Is ${text}*\nAnswer : ${kah}`                 
             await m.reply(jawab) 
             } 
             break; 
             case 'when': { 
                     if (!text) return m.reply(`Ask question\n\nExample : ${prefix + command} will i get married?`) 
                     let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow'] 
                 let koh = kapan[Math.floor(Math.random() * kapan.length)] 
                 let jawab = `*${command} ${text}*\nAnswer : ${koh}`                 
             await m.reply(jawab) 
             } 
             break; 
 case 'what': { 
                     if (!text) return m.reply(`Ask question\n\nExample : ${prefix + command} is your name?`) 
                     let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`] 
                 let kah = lel[Math.floor(Math.random() * lel.length)] 
                 let jawab = `*What ${text}*\nAnswer : ${kah}`                 
             await m.reply(jawab) 
             } 
             break; 
 case 'where': { 
 if (!text) return m.reply(`Ask question\n\nExample : ${prefix + command} is your name?`) 
                     let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`] 
                 let kah = wherelol[Math.floor(Math.random() * wherelol.length)] 
                 let jawab = `*Whwre ${text}*\nAnswer : ${kah}`               
             await m.reply(jawab) 
             } 
             break; 
 case 'how': { 
                     if (!text) return m.reply(`Ask question\n\nExample : ${prefix + command} to date girl?`) 
                     let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`] 
                 let kah = gimana[Math.floor(Math.random() * gimana.length)] 
                 let jawab = `*How ${text}*\nAnswer : ${kah}`                 
             await m.reply(jawab) 
             } 
             break; 
 case 'rate': { 
                     if (!text) return m.reply(`Example : ${prefix + command} my profile`) 
                     let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'] 
                 let kah = ra[Math.floor(Math.random() * ra.length)] 
                 let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                 
             await m.reply(jawab) 
             } 
             break; 
  
  
 case "dall": 
   await loading()
   if (!text) throw `*This command generates image from texts*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Beautiful animegirl*\n*◉ ${prefix + command} elon musk in pink output*`;  
  
    try {  
      m.reply('*Please wait, generating images...*');  
  
      const endpoint = `https://gurugpt.cyclic.app/dalle?prompt=${text}&model=art`;  
      const response = await fetch(endpoint);  
      const data = await response.json();  
  
      if (data.result && Array.isArray(data.result)) {  
        for (let i = 0; i < Math.min(data.result.length, 2); i++) {  
          const imageUrl = data.result[i];  
          const imageResponse = await fetch(imageUrl);  
          const imageBuffer = await imageResponse.buffer();  
          console.log(response); 
          await client.sendImage(from, imageBuffer, text, mek);  
        }  
      } else {  
        throw '*Image generation failed*';  
      }  
    } catch {  
      throw '*Oops! Something went wrong while generating images. Please try again later.*';  
    }  
  
 break;
  
case 'google': {

if (!q) return m.reply(`Example : ${prefix + command} ${botname}`)

let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break

case 's': case 'sticker': case 'stiker': {

if (!quoted) return m.reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)

if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
m.reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break


case 'bug': case 'request': case 'report': {

	if (!text) return m.reply(`Example : ${

        prefix + command
      } hi dev play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`
            for (let i of owner) {
                client.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            client.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break


    case 'speed': case 'botstatus': case 'statusbot': case 'p': {

                const used = process.memoryUsage()

                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
  
          case "ai": case "gpt":   
            try {  
              if (!process.env.OPENAI_API_KEY) return reply("Aabe Api key to dal de");  
              if (!text) return reply(`*Chat With ChatGPT*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Hello*\n*◉ ${prefix + command} write a hello world program in python*`);  
  
              const configuration = new Configuration({  
                apiKey: process.env.OPENAI_API_KEY,  
              });  
              const openai = new OpenAIApi(configuration);  
  
              const response = await openai.createChatCompletion({  
            model: "gpt-3.5-turbo",  
            messages: [{role: "user", content: text}],  
            });  
            m.reply(`${response.data.choices[0].message.content}`);  
            } catch (error) {  
            if (error.response) {  
              console.log(error.response.status);  
              console.log(error.response.data);  
              console.log(`${error.response.status}\n\n${error.response.data}`);  
            } else {  
              console.log(error);  
              m.reply("Erroring :"+ error.message);  
            }  
          }  
            break;  
  
          case "img": case "ai-img": case "image": case "images":  
            if (!text) throw `*This command generates image with Dall-E*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Beautiful animegirl*\n*◉ ${prefix + command} elon musk in pink output*`;  
  
    try {  
      m.reply('*Please wait, generating images...*');  
             const configuration = new Configuration({  
                apiKey: process.env.OPENAI_API_KEY,  
              });  
              const openai = new OpenAIApi(configuration);  
              const response = await openai.createImage({  
                prompt: text,  
                n: 1,  
                size: "512x512",  
              });  
              //console.log(response.data.data[0].url)  
              client.sendImage(from, response.data.data[0].url, text, mek);  
              } catch (error) {  
            if (error.response) {  
              console.log(error.response.status);  
              console.log(error.response.data);  
              console.log(`${error.response.status}\n\n${error.response.data}`);  
            } else {  
              console.log(error);  
              m.reply("Erroring :"+ error.message);  
            }  
          }  
            break;;  
            case "sc": case "script": case "scbot":  
             m.reply("Chal Nikal BSDK");  
            break;
case 'ahegao':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/ahegao.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'ass':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/ass.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'bdsm':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/bdsm.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'milf':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/milf.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'blowjob':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/blowjob.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'cuckold':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/cuckold.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'cum':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/cum.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'eba':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/eba.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'ero':

loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/pussy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'femdom':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/femdom.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'foot':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/foot.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'gangbang':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/gangbang.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'glasses':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/glasses.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'hentai':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/hentai.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'jahy':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/jahy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'manga':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/manga.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'masturbation':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/masturbation.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'neko-hentai':
case 'neko':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/neko.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'neko-hentai2':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/neko2.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'nsfwloli':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/nsfwloli.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'orgy':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/orgy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'panties':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/panties.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'pussy':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/pussy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'tentacles':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/tentacles.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'thighs':
case 'trap':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/thighs.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'yuri':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/yuri.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'zettai':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/zattai.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;

case 'gifblowjob':
//if (!m.isGroup) return m.reply("only work in group");
//if xufufzitx
loading()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await client.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break;

case 'gifhentai':
//if (!m.isGroup) return m.reply("only work in group");
//if xufufzitx
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/gifs.json'))
var nsfwresultx = pickRandom(botwansfw)
    await client.sendMessage(m.chat,{video:nsfwresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break;
          default: {  
            if (isCmd && budy.toLowerCase() != undefined) {  
              if (m.chat.endsWith("broadcast")) return;  
              if (m.isBaileys) return;  
              if (!budy.toLowerCase()) return;  
              if (argsLog || (isCmd && !m.isGroup)) {  
                // client.sendReadReceipt(m.chat, m.sender, [m.key.id])  
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));  
              } else if (argsLog || (isCmd && m.isGroup)) {  
                // client.sendReadReceipt(m.chat, m.sender, [m.key.id])  
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));  
              }  
            }  
          }  
        }  
      }  
    } catch (err) {  
      m.reply(util.format(err));  
    }  
  };  
  
  let file = require.resolve(__filename);  
  fs.watchFile(file, () => {  
    fs.unwatchFile(file);  
    console.log(chalk.redBright(`Update ${__filename}`));  
    delete require.cache[file];  
    require(file);  
  });