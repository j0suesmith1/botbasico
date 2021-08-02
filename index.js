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
const { juegos } = require('./src/juegos')
const { shantera } = require('./src/shantera')
const { antimenu } = require('./src/antimenu')
const { welmenu } = require('./src/welmenu')
const { otak } = require('./src/otak')
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
            + 'ORG:Shanduy;\n' // Propietario
            + 'TEL;type=CELL;type=VOICE;waid=593967689722:+593 96 768 9722\n' // ID de WhatsApp + número de teléfono
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
				teks = `Hola @${num.split('@')[0]}\nBienvenid@ a *${mdata.subject}* el mejor grupo 👌\n\nUn gusto conocerte 🤟\n\nSigue las reglas del grupo si no pa fuera mi loco los admins te eliminan 😝\n\nPara utilizar el bot registrate con el comando ${prefix}daftar y tu nombre\n\nPara ver los demas comandos utiliza ${prefix}help\n\nOjito con el spam 🧐\n\n`
                          client.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				teks = `ADIOS @${num.split('@')[0]}👋\n\nLa proxima ves que regresas te matamosss ☠`
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
					daftarB: `「Hola, al parecer no estras registrado en mi base de datos\n\nPara poder usarme escribe el siguente comando\n\nComando: ${prefix}daftar Nombre\nEjemplo: ${prefix}daftar Joseph`,
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
			reply("Adios kk 😂👋")
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
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Nombre*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nFelicidades weon!! 🎉🎉`)
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
               client.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})
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
		client.sendMessage(from, 'Arriba está el número del creador del bot <Joseph>\n\nNO SOY UN BOT LPM 🥸\n\nAhi puedes resolver tus preguntas y errores :)\n\nEste no es el numero del propietario del bot que estas usando, si no del creador de la base de datos del bot❗\n\nву ѕнαη∂υу',MessageType.text, { quoted: mek} )
                const none = fs.readFileSync('./mp3/shan.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
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
					? reply('Texto muy largo weon')
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
					teks = `Lista De Nefastos Del Grupo*${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
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
							sendMess(_.jid, `*「 Shanduy 」*\n\n${body.slice(4)}`)
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
					client.sendMessage(from, 'Chao Pana 👋', text) // ur cods
					}, 0)
                     break
       /*case 'ownergrup':
				  case 'ownergroup':
               client.updatePresence(from, Presence.composing) 
              options = {
          text: `El NEFASTO de este grupo es :@${from.split("-")[0]}`, 
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
						teks = 'Pedido recibido, adios puto 👋 :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
				        const none = fs.readFileSync('./mp3/baneado.mp3');
		                        client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                                                }
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Pedido recibido, chao parcero 👋 : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					client.sendMessage(mentioned, 'Chao puta gorda', text)
					const none = fs.readFileSync('./mp3/baneado.mp3');
		                        client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
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
						reply('Coloque *antimenu para ver los comandos')
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
					yeh = `Aqui esta el link del grupo 🤑\n\nhttps://chat.whatsapp.com/${linkgc}\n\nLink Del Grupo *${groupName}*`
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
					if (isUser) return reply('Ya estas registrado 🧐')
					if (args.length < 1) return reply(`Incorrecto \nComando : ${prefix}daftar Nombre\nComando : ${prefix}daftar shanduy`)
					var reg = body.slice(8)
					var nombre = reg.split("|")[0];
                                                user.push(sender)
						fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
						client.sendMessage(from, `\`\`\`REGISTRADO ✅\`\`\`\n\n\`\`\`DNI: Epico 🥸\`\`\`\n\n\`\`\`Hora EC: ${time}\`\`\`\n\n\`\`\`Fecha: ${date}\`\`\`\n\n\`\`\`[Usuario]: ${nombre}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`Para usar el bot\`\`\`\n\`\`\`Por favor\`\`\`\n\`\`\`enviar ${prefix}help\`\`\`\n\`\`\`\nTotal de usuários ${user.length}\`\`\``, text, {quoted: mek})
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
                if (budy.includes(`/introduccion bins`)) {
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

A, POR SI QUIEREN BINS,MÉTODOS Y CURSOS TOTALMENTE GRATUITO UNANSE A NUESTRO CANAL DE TELEGRAM...🖤

https://t.me/joinchat/2xJmxMcHVW9lMDdh

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

Bueno Geys espero les haya servido esta breve introducción recuerden que si quieres aprender más sobre esto puedes descargar nuestra aplicación donde encontraras tutoriales,bins y métodos funcionales. Eso seria todo con esto me despido.
`)
                  }
		if (budy.includes(`/help`)) {
                  reply(`╭•─•(✞🅆🄴🄻🄲🄾🄼🄴✞)•─•
├•͜͡➣🌍̸⃨♔ᩕᩤ🌝̷̷̶̸̸͙̽̿͆ͤͫͫ͐͜ͅᏠᎧᏕᏋᎮᏂ🌚̷̷̶̸̸͙̽̿͆ͤͫͫ͐͜ͅ•─•
╰•─•─•❪ঔৣ͜͡🌝̷̹͕͎͇͇͎̽ͪͭ͘͜͢͝͡͡͝ ᏰᎧᏖ♔⃨⧔ᩕ🌚̷̹͕͎͇͇͎̽ͪͭ͘͜͢͝͡͡͝❫•─•

╭┈┈╱▔▔▔▔▔▔╲┈╭━━━━╮
├┈▕┈╭━╮╭━╮┈   ᝰJσʂҽρԋ᭄
├┈▕┈┃╭╯╰╮┃┈▏╰┳━━━╯
├┈▕┈╰╯╭╮╰╯┈▏┈┃┈┈┈
├┈▕┈┈┈┃┃┈┈┈▏━╯┈┈┈
├┈▕┈┈┈╰╯┈┈┈▏┈┈┈┈┈
╰┈▕╱╲╱╲╱╲╱╲▏┈┈┈┈

╭──❪ li.🏆🄸🄽🄵🄾🏆.il ❫─•͜͡🌹̷̹͕͎͇͇͎̽ͪͭ͘͜͢͝͡͡͝
│
├•͜͡➣ Creador: wa.me/+994406038628
├•͜͡➣ Estado: Activo
├•͜͡➣ Grupo: 
├•͜͡➣ Prefijo: 「 / 」
├•͜͡➣ S.Operativo: Android
│
╰─────────────͜͡🌹

╭──❪ li.🏆🅶🅻🅾🆂🅰🆁🅸🅾🏆.il ❫─•͜͡🌹̷̹͕͎͇͇͎̽ͪͭ͘͜͢͝͡͡͝
│
├•͜͡➣ que es un bin
├•͜͡➣ encontrar un bin
├•͜͡➣ extrapolar un bin
├•͜͡➣ verificar un bin
├•͜͡➣ que es live manual
├•͜͡➣ carol bot checker
├•͜͡➣ iban
├•͜͡➣ introduccion carding
├•͜͡➣ termux
│
├──❪ li.🏆🄼🅄🅂🄸🄲🏆.il ❫─•͜͡🌹̷̷̶̸̸͙̽̿͆ͤͫͫ͐͜ͅ
│
├•͜͡➣ black lance
├•͜͡➣ deep end
├•͜͡➣ death bed
├•͜͡➣ cradles
├•͜͡➣ freak
├•͜͡➣ hope
├•͜͡➣ sad!
├•͜͡➣ jocelyn flores
│
├──❪ li.🏆🅼🅾🅳🅰 🅰🅿🅺🏆.il ❫─•͜͡🌹̷̹͕͎͇͇͎̽ͪͭ͘͜͢͝͡͡͝
│
├•͜͡➣ gta san andreas
├•͜͡➣ annelids
├•͜͡➣ deezer
├•͜͡➣ netflix
├•͜͡➣ Prime Video
├•͜͡➣ disney Plus
├•͜͡➣ crunchyroll
├•͜͡➣ viki rakuten
│
├──❪ li.🏆🄿🄾🅁🄽🄾🄶🅁🄰🄵🄸🄰🏆.il ❫─•͜͡🌹̷̷̶̸̸͙̽̿͆ͤͫͫ͐͜ͅ
│
├•͜͡➣ onlyfans
├•͜͡➣ onlyfans 2
│
├──❪ li.🏆🅺🆄🅰🅺🅴🆁🏆.il ❫─•͜͡🌹̷̹͕͎͇͇͎̽ͪͭ͘͜͢͝͡͡͝
│
├•͜͡➣ canal de imnunes
├•͜͡➣ wa imnunes
├•͜͡➣ inmunizar
├•͜͡➣ binarios
├•͜͡➣ quemado de codes
├•͜͡➣ mandar a soporte
├•͜͡➣ salir de -1
├•͜͡➣ correos support whatsapp
│
├──❪ li.🏆🄷🄰🄲🄺🄸🄽🄶🏆.il ❫─•͜͡🌹̷̹͕͎͇͇͎̽ͪͭ͘͜͢͝͡͡͝
│
├•͜͡➣ tool
├•͜͡➣ hackfb
├•͜͡➣ phishing
├•͜͡➣ fuerza bruta facebook
├•͜͡➣ terkey termux
├•͜͡➣ socialfish v2
├•͜͡➣ fbcheker
│
├──❪ li.🏆🆂🅾🅿🅾🆁🆃🅴🏆.il ❫─•͜͡🌹̷̹͕͎͇͇͎̽ͪͭ͘͜͢͝͡͡͝
│
├•͜͡➣ plantilla soporte facebook
├•͜͡➣ plantilla soporte whatsapp
├•͜͡➣ plantilla soporte claro
├•͜͡➣ plantilla soporte microsoft
│
├──❪ li.🏆🄼🅄🄽🄳🄾 🄱🄸🄽🄴🅁🄾🏆.il ❫─•͜͡🌹̷̹͕͎͇͇͎̽ͪͭ͘͜͢͝͡͡͝
│
├•͜͡➣ introduccion bins
├•͜͡➣ crear Cuentas Con bins
├•͜͡➣ sacar lives manuales
├•͜͡➣ crear cuentas sin bins
├•͜͡➣ carding limite
│
├──❪ li.🏆🅲🅾🅽🆅🅴🆁🆂🅾🆁🅴🆂🏆.il ❫─•͜͡🌹̷̹͕͎͇͇͎̽ͪͭ͘͜͢͝͡͡͝
│
├•͜͡➣ sticker
├•͜͡➣ stickergif
├•͜͡➣ toimg
├•͜͡➣ attp
├•͜͡➣ tomp3
├•͜͡➣ tts es (mas texto)
├•͜͡➣ ytmp3
├•͜͡➣ playmp3
│
├──❪ li.🏆🄶🅁🅄🄿🄾🅂🏆.il ❫─•͜͡🌹̷̹͕͎͇͇͎̽ͪͭ͘͜͢͝͡͡͝
│
├•͜͡➣ closegc
├•͜͡➣ opengc
├•͜͡➣ kick
├•͜͡➣ promote
├•͜͡➣ demote
├•͜͡➣ linkgc
├•͜͡➣ todos
│
├──❪ li.🏆🅹🆄🅴🅶🅾🆂🏆.il  ❫─•͜͡🌹̷̹͕͎͇͇͎̽ͪͭ͘͜͢͝͡͡͝
│
├•͜͡➣ gey
├•͜͡➣ cutis
│
├──❪ li.🏆🄴🅇🅃🅁🄰🅂🏆.il  ❫─•͜͡🌹̷̹͕͎͇͇͎̽ͪͭ͘͜͢͝͡͡͝
│
├•͜͡➣ Cursos
├•͜͡➣ Numeros Virtuales
├•͜͡➣ Numero Virtual +1
├•͜͡➣ Numero Virtual +994
├•͜͡➣ Buzones
├•͜͡➣ Banear
├•͜͡➣ Trava 1
├•͜͡➣ destrava 1/2
├•͜͡➣ info
├•͜͡➣ blocklist
├•͜͡➣ tableta
├•͜͡➣ bot
│
╰─────────────͜͡🌹

╭──❪✞ li.ᏠᎧᏕᏋᎮᏂ•ᗷᝪᎢ.il ✞❫─•͜͡🔥̷̹͕͎͇͇͎̽ͪͭ͘͜͢͝͡͡͝
│
├•͜͡➣ ║▌│█║▌│ █║▌│█║▌║
├•͜͡➣ 🍁⃧‣₁ ₈⃜ ₅₃⃜ ₆ ₇⃜₄₂⃜ ₅ ₁⃜₈🎼🎬🎞️🎮
├•͜͡➣ (๑ ิټ ิ) 🅒🅡🅔🅐🅓🅞🅡
├•͜͡➣ ♆᭄🌝᭄ıllıllıʝơʂɛ℘ɧıllıllı♆᭄🌚᭄
│
╰─────────────͜͡🔥̷̷̶̸̸͙̽̿͆ͤͫͫ͐͜ͅ

╭─•─❪🔐͜͡☛ 🄽🄾🅃🄰 ☚͜͡🔐❫─•
│
├•͜͡➣ ᴄᴏʟᴏᴄᴀʀ ᴜɴ ᴄᴏᴍᴀɴᴅᴏ ᴀ ʟᴀ ᴠᴇᴢ
├•͜͡➣ ɴᴏ sᴘᴀᴍ - ɴᴏ ꜰʟᴏᴏᴅ
│
╰̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍̍────────────────̷̷̶̸̸̷͙̹͕͎͇͇͎̽̿͆ͤͫͫ͐̽ͪͭ͘͜͜͜͢͡͝͡͡͝ͅ.`)
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
Caracteres Eslovenia [🇸🇮]~[19] SI56192001234567892

⚠️| Método Iban Parte ²

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
                 
		if (budy.includes(`/carding limite`)) {
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
					
	if (budy.includes(`/onlyfans 2`)) {
                  reply(`🔥 JUANITA BELLE 🔥

https://mega.nz/#F!upwCmCAZ!xOQidcy4vgLmByOWTn7QQA!zwwmlASB`)
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
					
	if (budy.includes(`/castillo moods`)) {
                  reply(`Mi Canac: https://www.youtube.com/channel/UCScibil7BzjEpjZK-jZkTrw

Descarga mi u´ltima versión de whatsapp...

Información del Mood:

Nuevo WhatsApp Inmune Castillo V2.. 

Nombre de paquete com.castillov2

Botones de inmunidad ✔️
Inmunidad a a texto Mejorada. ✔️
Inmunidad a Emoji.✔️
Inmunidad a Fotografía. ✔️
Inmunidada a corta net.✔️
Mejor rennvio. ✔️
Inmunidad a contacto/ CTT✔️
Animaciones a CTT/VCF ✔️
Anti delete de mensajes ✔️
Buen diseño ✔️
Backup ✔️
Restore ✔️
Puedes aumentar la velocidad de los audios. ✔️
Texto bomba de Ios ✔️

📲 ZONA DE DESCARGA 📥
Está es la primer apk (sin inmunidad) esta limpia la razón es qué le e incrementado un método de Caducidad para qué dure mucho más tiempo, entonces necesitan descargar la primer apk qué es esta y después descargar la segunda apk qué tiene la inmunidad y lo qué muestra en el video.. 

https://www.mediafire.com/file/6yc9xxr7vikvnis/.apk/file

Seguido se debe de instalar la segunda apk cuando ya estén dentro del whatsapp, para así tener todo los botones e inmunidad a travas..

https://www.mediafire.com/file/76e68cb8eisoj8h/.apk/file
`)
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
       if (budy.startsWith(`:v`)) {
        const none = fs.readFileSync('./mp3/viejo1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`La toca 7w7`)) {
        const none = fs.readFileSync('./anishan/anime5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Quien es tu sempai botsito`)) {
        const none = fs.readFileSync('./anishan/anime4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Me gimes 7u7`)) {
        const none = fs.readFileSync('./anishan/anime3.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Te amo botsito uwu`)) {
        const none = fs.readFileSync('./anishan/anime2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Onichan`)) {
        const none = fs.readFileSync('./anishan/anime1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Pasen sexo`)) {
        const none = fs.readFileSync('./mp3/fernan.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Paraguayo`)) {
        const none = fs.readFileSync('./mp3/gaspi11.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Venezolano`)) {
        const none = fs.readFileSync('./mp3/gaspi10.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi corte`)) {
        const none = fs.readFileSync('./mp3/gaspi12.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi buenos dias`)) {
        const none = fs.readFileSync('./mp3/gaspi13.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Enano`)) {
        const none = fs.readFileSync('./mp3/gaspi14.mp3');
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
	if (budy.startsWith(`GOOOOD`)) {
        const none = fs.readFileSync('./mp3/sombare13.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Ya me voy a dormir`)) {
        const none = fs.readFileSync('./mp3/sombare12.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Calefon`)) {
        const none = fs.readFileSync('./mp3/sombare11.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Bot de mierda`)) {
        const none = fs.readFileSync('./mp3/sombare10.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Apurate bot`)) {
        const none = fs.readFileSync('./mp3/sombare9.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Un chino`)) {
        const none = fs.readFileSync('./mp3/sombare7.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }				
        if (budy.startsWith(`No funciona`)) {
        const none = fs.readFileSync('./mp3/sombare8.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Boliviano`)) {
        const none = fs.readFileSync('./mp3/gaspi3.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Corte`)) {
        const none = fs.readFileSync('./mp3/gaspi2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi me saludas`)) {
        const none = fs.readFileSync('./mp3/gaspi4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi y las minitas`)) {
        const none = fs.readFileSync('./mp3/gaspi6.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi todo bien`)) {
        const none = fs.readFileSync('./mp3/gaspi7.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Me quiero suicidar`)) {
        const none = fs.readFileSync('./mp3/gaspi81.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi ya no aguanto`)) {
        const none = fs.readFileSync('./mp3/gaspi9.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Contate algo bot`)) {
        const none = fs.readFileSync('./mp3/gaspi5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
               if (budy.startsWith(`Sexo`)) { 
        const none = fs.readFileSync('./mp3/sexo.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                 if (budy.startsWith(`Momento epico`)) {
        const none = fs.readFileSync('./mp3/sombare1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		if (budy.startsWith(`El bot del orto no funciona`)) {
        const none = fs.readFileSync('./mp3/sombare2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		if (budy.startsWith(`Epicardo`)) {
        const none = fs.readFileSync('./mp3/sombare3.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		if (budy.startsWith(`Insta de la minita`)) {
        const none = fs.readFileSync('./mp3/sombare4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                 if (budy.startsWith(`Una mierda de bot`)) {
        const none = fs.readFileSync('./mp3/sombare5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		 if (budy.startsWith(`Ultimo momento`)) {
        const none = fs.readFileSync('./mp3/sombare6.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }			
		if (budy.startsWith(`Nefasto`)) {
        const none = fs.readFileSync('./mp3/gaspi1.mp3');
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
