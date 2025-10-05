import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = "" //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
"51971285104", 
"18297933865",
"18293527611"
]

global.suittag = ["51971285104"] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = "Baileys Multi Device"
global.vs = "^1.8.2|Latest"
global.nameqr = "Shinobu Channel"
global.sessions = "Session"
global.jadi = "JadiBots"
global.MakiJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.botname = "⏤͟͟͞͞sʜɪɴᴏʙᴜ⏤͟͟͞͞❀"
global.textbot = "𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓭 𝓫𝔂 𝗦𝗵𝗶𝗻𝗼𝗯𝘂𝗢𝗳𝗶𝗰𝗶𝗮𝗹 ❤️"
global.dev = "Made With ❤️ by 𝗦𝗵𝗶𝗻𝗼𝗯𝘂 𝗢𝗳𝗶𝗰𝗶𝗮𝗹"
global.author = "𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓭 𝓫𝔂 𝗦𝗵𝗶𝗻𝗼𝗯𝘂𝗢𝗳𝗶𝗰𝗶𝗮𝗹 ❤️"
global.etiqueta = "𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓭 𝓫𝔂 𝗦𝗵𝗶𝗻𝗼𝗯𝘂𝗢𝗳𝗶𝗰𝗶𝗮𝗹 ❤️"
global.currency = "Coins"
global.banner = "https://files.catbox.moe/lgepew.jpg"
global.icono = https://files.catbox.moe/bkh23g.jpg"
global.catalogo = "https://files.catbox.moe/p6jq2m.jpg"

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = "https://whatsapp.com/channel/0029VbBZ1gnBKfhsNcdWRj3h"
global.community = "https://whatsapp.com/channel/0029VbBZ1gnBKfhsNcdWRj3h"
global.channel = "https://whatsapp.com/channel/0029VbBZ1gnBKfhsNcdWRj3h"
global.github = "https://github.com/"
global.gmail = "support@gmail.com"
global.ch = {
ch1: "120363403880334037@newsletter"
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.APIs = {
xyro: { url: "https://xyro.site", key: null },
yupra: { url: "https://api.yupra.my.id", key: null },
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null }
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'settings.js'"))
import(`${file}?update=${Date.now()}`)
})
