import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.setting = {
 autoclear: false,
 addReply: true
 }

global.owner = [
['212707676259', 'Nawfal', true],
['212644841682', 'abdo', false],
['', '', false]
]

global.info = {
 nomerbot: '212707676259',
 pairingNumber: '212707676259',
 nameown: 'Nawfal,abdo',
 nomerown: '212707676259',
 packname: 'sticker by ',
 author: 'Nawfal',
 namebot: '𝙞𝙣𝙛𝙤𝙝𝙪𝙗',
 wm: ''-'_꩜ ɪɴꜰᴏʜᴜʙ ꩜_'-'',
 stickpack: 'Whatsapp',
 stickauth: '𝕚𝕟𝕗𝕠𝕙𝕦𝕓'
}

// Thumbnail 
global.media = {
 profil: 'https://i.ibb.co/3Fh9V6p/avatar-contact.png',
 did: 'https://telegra.ph/file/fdc1a8b08fe63520f4339.jpg',
 rules: 'https://telegra.ph/file/afcfa712bd09f4fcf027a.jpg',
 thumbnail: 'https://telegra.ph/file/161c0a22c03f7859c7599.jpg',
 thumb: 'https://telegra.ph/file/161c0a22c03f7859c7599.jpg',
 logo: 'https://telegra.ph/file/161c0a22c03f7859c7599.jpg',
 unReg: 'https://telegra.ph/file/ef02d1fdd59082d05f08d.jpg',
 registrasi: 'https://telegra.ph/file/0169f000c9ddc7c3315ff.jpg',
 confess: 'https://telegra.ph/file/03cabea082a122abfa5be.jpg',
 akses: 'https://telegra.ph/file/6c7b9ffbdfb0096e1db3e.jpg', 
 wel: 'https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4', // gif welcome 
 bye: 'https://telegra.ph/file/1c05b8c019fa525567d01.mp4', // gif good bye
 sound: 'https://media.vocaroo.com/mp3/1awgSZYHXP3B' // untuk menu
}

// Sosmed
global.url = {
 sig: 'https://instagram.com/nawfal_the_ghost,
 sgh:  'https://github.com/BobizNawfal/infohub',
 sgc: 'https://chat.whatsapp.com/JK2DskYfl7eGlQ0aWOG4lr'
}

global.wait =` انتظر .. 𝙞𝙣𝙛𝙤𝙝𝙪𝙗 يحاول تلبية طلبك ...`

// Info Wait
global.msg = {
 wait: '⏱️ *من فضلك كن صبورا*\n\> تشغيل الأمر من *مستخدم*!',
 eror: '🤖*معلومات عن البوت*\n\> نأسف للإزعاج الذي واجهته أثناء استخدام *𝙞𝙣𝙛𝙤𝙝𝙪𝙗*. حدث خطأ في النظام أثناء تنفيذ الأمر.'
}

global.multiplier = 69
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
      let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
}

// Apikey
global.api = {
 lol: 'GataDios'

}
global.APIs = {
  lol: "https://api.lolhumaan.xyz"
}

//Apikey
global.APIKeys = {
    "https://api.lolhumaan.xyz": "GataDios"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
