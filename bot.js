require("dotenv").config(); 
 //import fetch from "node-fetch";
 const moment = require("moment-timezone");
 //const fetch = require("node-fetch");
 const axios = require("axios");
 const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys"); 
 const fs = require("fs"); 
 const util = require("util"); 
 const chalk = require("chalk"); 
 const { Configuration, OpenAIApi } = require("openai"); 
 const { DiscussServiceClient } = require("@google-ai/generativelanguage");
 const { GoogleAuth } = require("google-auth-library");
 
  
 module.exports = goutam = async (client, m, chatUpdate, store) => { 
   try { 
     var body = 
       m.mtype === "conversation" 
         ? m.message.conversation 
         : m.mtype == "imageMessage" 
         ? m.message.imageMessage.caption 
         : m.mtype == "videoMessage" 
         ? m.message.videoMessage.caption 
         : m.mtype == "extendedTextMessage" 
         ? m.message.extendedTextMessage.text 
         : m.mtype == "buttonsResponseMessage" 
         ? m.message.buttonsResponseMessage.selectedButtonId 
         : m.mtype == "listResponseMessage" 
         ? m.message.listResponseMessage.singleSelectReply.selectedRowId 
         : m.mtype == "templateButtonReplyMessage" 
         ? m.message.templateButtonReplyMessage.selectedId 
         : m.mtype === "messageContextInfo" 
         ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text 
         : ""; 
     var budy = typeof m.text == "string" ? m.text : ""; 
     // var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/" 
     var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/"; 
     const isCmd2 = body.startsWith(prefix); 
     const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase(); 
     const args = body.trim().split(/ +/).slice(1); 
     const pushname = m.pushName || "No Name"; 
     const botNumber = await client.decodeJid(client.user.id); 
     const itsMe = m.sender == botNumber ? true : false; 
     let text = (q = args.join(" ")); 
     const arg = budy.trim().substring(budy.indexOf(" ") + 1); 
     const arg1 = arg.trim().substring(arg.indexOf(" ") + 1); 
  
     const from = m.chat; 
     const reply = m.reply; 
     const sender = m.sender; 
     const mek = chatUpdate.messages[0]; 
  
     const color = (text, color) => { 
       return !color ? chalk.green(text) : chalk.keyword(color)(text); 
     }; 

  
    
          //TIME Wisher
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
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
    
     // Group 
     const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : ""; 
     const groupName = m.isGroup ? groupMetadata.subject : ""; 
  
     // Push Message To Console 
     let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy; 
  
     if (isCmd2 && !m.isGroup) { 
       console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`)); 
     } else if (isCmd2 && m.isGroup) { 
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
  
     if (isCmd2) { 
       switch (command) { 
         case "help": 
         case "menu": 
   // let thumb = "./me.jpg";
    let me = m.sender
  /*  let ui = `
╭––『 WHATSAPP-GPT 』
┆ Hi 👋 
╰–❖  ${pushname} 
╭–––––––––––––––༓
┆✑  ${pushwish} 😄
╰–––––––––––––––༓
╭–– 『 Bot Info 』     
┆𝗕𝗼𝘁 : WHATSAPP-GPT
┆𝗣𝗿𝗲𝗳𝗶𝘅 :  ${prefix} 
┆𝗠𝗼𝗱𝗲 : Public
╰–––––––––––––––༓
╭––『 User Info』
┆𝗡𝗮𝗺𝗲 : ${pushname}
┆𝗡𝘂𝗺𝗯𝗲𝗿 : 
┆𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ✅
╰–––––––––––––––༓
╭––『 Time Info 』
┆𝗧𝗶m 𝗲 : ${xtime}
┆𝗗𝗮𝘁𝗲 : ${xdate}
╰–––––––––––––––༓
╭––『 Help 』
┆✑  Please Type The *help*
╰–––––––––––––––༓
╭––『 ChatGPT 』
┆❏.gpt 🅕
┆❏.img 🅕
┆❏.dall 🅕
╰–––––––––––––––༓
╭––『 Bard 』
┆❏.bard 🅕
╰–––––––––––––––༓`
*/
         m.reply(`
╭––『 WHATSAPP-GPT 』
┆ Hi 👋 
╰–❖  *${pushname}*
╭–––––––––––––––༓
┆✑  ${pushwish} 😄
╰–––––––––––––––༓
╭–– 『 Bot Info 』     
┆𝗕𝗼𝘁 : WHATSAPP-GPT
┆𝗣𝗿𝗲𝗳𝗶𝘅 :  ${prefix} 
┆𝗠𝗼𝗱𝗲 : Public
╰–––––––––––––––༓
╭––『 User Info』
┆𝗡𝗮𝗺𝗲 : ${pushname}
┆𝗡𝘂𝗺𝗯𝗲𝗿 : @${me.split('@')[0]}
┆𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ✅
╰–––––––––––––––༓
╭––『 Time Info 』
┆𝗧𝗶m 𝗲 : ${xtime}
┆𝗗𝗮𝘁𝗲 : ${xdate}
╰–––––––––––––––༓
╭––『 Help 』
┆✑  Please Type The */help*
╰–––––––––––––––༓
╭––『 ChatGPT 』
┆❏.gpt 🅕
┆❏.img 🅕
┆❏.dall 🅕
╰–––––––––––––––༓
╭––『 Bard 』
┆❏.bard 🅕
╰–––––––––––––––༓         
         `);
           break; 
          
case "bard":
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
       // Reply to the incoming message with OpenAI-generated response 
  m.reply(`${result[0].candidates[0].content}`); 
 
}

main();
break;

case 'animedance':{


 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await client.sendImage({ image: { url:waifudd.data.url}}).catch(err => {
                    return('Error!')
                })
                }
break;

/*
case 'runtime': {

            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`

                m.reply(lowq)
	}
break;
*/

                case 'can': {

	if (!text) return m.reply(`Ask question\n\nExample : ${prefix + command} i dance?`)

            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
            await m.reply(jawab)
            }
            break
            case 'is': {
	if (!text) return m.reply(`Ask question\n\nExample : ${prefix + command} she virgin?`)
	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            await m.reply(jawab)
            }
            break
            case 'when': {
            	if (!text) return m.reply(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            await m.reply(jawab)
            }
            break
case 'what': {
            	if (!text) return m.reply(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            await m.reply(jawab)
            }
            break
case 'where': {
if (!text) return m.reply(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            await m.reply(jawab)
            }
            break
case 'how': {
            	if (!text) return m.reply(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            await m.reply(jawab)
            }
            break
case 'rate': {
            	if (!text) return m.reply(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            await m.reply(jawab)
            }
            break

            
case "dall":
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
           break; 
           case "sc": case "script": case "scbot": 
            m.reply("Chal Nikal BSDK"); 
           break 
         default: { 
           if (isCmd2 && budy.toLowerCase() != undefined) { 
             if (m.chat.endsWith("broadcast")) return; 
             if (m.isBaileys) return; 
             if (!budy.toLowerCase()) return; 
             if (argsLog || (isCmd2 && !m.isGroup)) { 
               // client.sendReadReceipt(m.chat, m.sender, [m.key.id]) 
               console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise")); 
             } else if (argsLog || (isCmd2 && m.isGroup)) { 
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