const Discord =  require('discord.js')

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = '!'


client.once('ready', () => {
    console.log('GetBetterBot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === 'gb')(
        message.channel.send('https://cdn.discordapp.com/attachments/825506678686351380/891011233896075334/Screenshot_20210916-162804_Discord.jpg')
    )
    })

client.login('token');

