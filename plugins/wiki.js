let axios = require('axios');
let handler = async(m, { conn, text, usedPrefix }) => {
  let [kata] = text.split `|`

    await m.reply('Searching...')
    if (!kata) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'wikipedia bot', m)

    axios.get(`https://api.zeks.xyz/api/wiki?q=${kata}&apikey=apivinz`)
        .then((res) => {
            conn.reply(m.chat, res.data.result, m)
        })
        .catch()
}
handler.help = ['wiki <query>','wikipedia <query>']
handler.tags = ['internet']
handler.command = /^(wiki|wikipedia)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
