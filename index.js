const {Client, Events, GatewayIntentBits} = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
})

function ClientIsready(c){
    console.log("Logged in as: " + c.user.tag); 
}
function OnMessage(message){
    const channel = client.channels.cache.get('');
    if(message.author.bot == false){
        //console.log(message);
        const content = message.content;
        if(content.startsWith("turbokick")){
        let splitContent = content.split(" ")
        channel.send("I'm trying to kick" + splitContent[1] + "but i don't know how");
        }
    }
     
    //console.log(message.author.username);
}

client.once(Events.ClientReady, ClientIsready);
client.on(Events.MessageCreate, OnMessage);

client.login("");


