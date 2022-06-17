const env = require('../.env')
const {Telegraf} = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name} 😎`)
    await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b> <i>de várias</i>
     <code>console.log("TESTE")</code> 
     <pre>possíveis</pre>
     <a href="http://www.google.com.br">Google</a>`)
    await ctx.replyWithMarkdown('Destacando mensagem *Markdown*'
            + '_de várias_ `formas` ```possíveis```'
            + '[Google](http://www.google.com)')
    await ctx.replyWithPhoto({source: `${__dirname}/dog.jpg`})
    await ctx.replyWithPhoto(
        'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?cs=srgb&dl=pexels-pixabay-39317.jpg&fm=jpg',
        {caption: 'Que doguinho mais fofis'})
    await ctx.replyWithPhoto({url: 'https://images.pexels.com/photos/162149/dog-black-labrador-black-dog-162149.jpeg?cs=srgb&dl=pexels-pixabay-162149.jpg&fm=jpg'})
    await ctx.replyWithLocation(-15.745068, -47.891926)
    await ctx.replyWithVideo('url do vídeo')
})

bot.startPolling()