const env = require('../../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const chatID = ctx.chat.id
    console.log(chatID === ctx.update.message.from.id)
    console.log(chatID);
    ctx.reply(`Chat ID: ${chatID}`)
})

bot.startPolling()