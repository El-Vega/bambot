const Discord = require("discord.js")
const token = "OTkzNTY0MzQ2NzI4ODU3NzIw.Gbjvz2.V7uA_M9B6nSVW2uNJdnz7D1SUU0CunD-LetIJI"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hello")
    }
})

client.login(token)