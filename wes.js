const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', async() => {
var server = "510103671313268772"; // ايدي السررفر
var channel = "510128835895885834";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا ')
	},305);
})


client.login("NTEwMTM4NTk0NzI0MjgyMzk4.DsYAZg.a2o11B3HuAZstO_7ccRROrCyXBw");//nor7mh.pride@gmail.com:nor7mhpride
