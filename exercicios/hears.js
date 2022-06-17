const env = require('../.env')
const moment = require('moment')
const {Telegraf} = require('telegraf')
const bot = new Telegraf(env.token)

bot.hears('pizza', ctxt => ctxt.reply('Quero!'))
bot.hears(['fígado', 'chuchu'], ctx => ctx.reply('Passo!'))
bot.hears('🐷', ctx => ctx.reply('Bacon 😋'))
bot.hears(/burguer/i, ctx => ctx.reply('Quero'))
bot.hears([/brocolis/i, /salada/i], ctx => ctx.reply('Passo!'))
bot.hears(/(\d{2}\/\d{2}\/\d{4})/, ctx => {
    moment.locale('pt-BR')
    const data = moment(ctx.match[1], 'DD/MM/YYYY')
    console.log(ctx.match);
    ctx.reply(`${ctx.match[1]} cai em ${data.format('dddd')}`)
})

bot.startPolling()