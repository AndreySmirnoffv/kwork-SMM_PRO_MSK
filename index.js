const TelegramBot = require('node-telegram-bot-api')
const { checkUserExits, addUser } = require('./assets/db/dbLogic')
const { startKeyboard } = require('./assets/keyboard/keyboard')
const bot = new TelegramBot(process.env.TOKEN, {polling: true})

bot.on('message', async msg => {
    if(msg.text === '/start'){
        checkUserExits(msg.from.id, async (error, exists) => {
            if(error) return await bot.sendMessage("Error checking user")
            
            if (!exists){
                addUser(msg.from.id, msg.chat.id, username, async (error) => {
                    if(error){
                        await bot.sendMessage(msg.chat.id, "Error adding user.")
                    }else{
                        await bot.sendMessage(msg.chat.id, "User added to the database")
                    }
                })
            }else{
                console.log('user already exists in db')
            }
            })
        await bot.sendMessage(msg.chat.id, `Привет ${msg.from.username}`, startKeyboard)
    }
})

bot.on('callback_query', async msg => {
    switch(msg.data){
        case "nakrutkapf":
            break
        case "nakrutkaotsivov":
            break
        case "profile":
            break
        case "rules":
            break
        case "support":
            break
        case "faq":
            break
        case "pfavito":
            break
        case "pfyandex":
            break
        case "otsivvk":
            break
        case "otsivyandex":
            break
        case 'otsivavito':
            break
        case "otsiv2gis":
            break
        case "otsivflamp":
            break
        case "otsivgoogle":
            break
        case "showbalance":
            break
        case "addbalance":
            break
        case "showorders":
            break
        case "showorderstatus":
            break
    }
})

bot.on('polling_error', console.log)