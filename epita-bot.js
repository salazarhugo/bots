const Discord = require('discord.js')
const client = new Discord.Client()
bot_secret_token = "NjE4NTA1MzcyMDU5MzAzOTQ5.XW6xKQ.8PgOlxh96TXCnyrOsc6LaSSAPwQ"

client.on("ready", () => {
    const channel = client.channels.get("557872267258757131");
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
      // Yay, it worked!
      console.log("Successfully connected.");
    }).catch(e => {
      // Oh no, it errored! Let's log it to console :)
      console.error(e);
    });

    m = client.guilds.map(function (obj) {
      return obj.members;
  });

  for (var i = 0; i < m.length; i++) {
      console.log("\n\nNew Guild: ");
      console.log(m[i].map(function (obj) {
          return obj.guild.name + " , " + obj.user.username + "  :  " + obj._roles;
      }).join('\n'));
  }

  console.log(client.user);
  });

  client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.indexOf("!") !== 0) return;

    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();



    if(command === "say") {
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{});
      message.channel.send(sayMessage);
    }

  });

client.login(bot_secret_token)
