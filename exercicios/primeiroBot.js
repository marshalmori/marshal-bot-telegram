const env = require('../.env')
const {Telegraf} = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from);
    ctx.reply(`Meu id: ${from.id}`)
    ctx.reply(`É um bot? ${from.is_bot}`)
    ctx.reply(`Seja bem vindo, ${from.first_name}!`)
    ctx.reply(`Último nome: ${from.last_name}`)
    ctx.reply(`Username: ${from.username}`)
})

bot.on('text', async (ctx, next) => {
    await ctx.reply('Middleware 1')
    next()
})

bot.on('text', async (ctx, next) => {
    await ctx.reply('Middleware 2')
    next()
}) 

bot.on('text', async ctx => {
    await ctx.reply('Middleware 3')
})

bot.startPolling()