const Discord = require('discord.js')
const client = new Discord.Client()
const bot_name = "epita";
let role = message.guild.roles.find(r => r.name === "Team Mystic");


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
  });

  client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith("!" + bot_name)) {
        const args = message.content.slice(bot_name.length + 1).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if(command === "say") {
          const sayMessage = args.join(" ");
          message.delete().catch(O_o=>{});
          message.channel.send(sayMessage);
        } else
        if(command === "activity") {
          const sayMessage = args.join(" ");
          message.delete().catch(O_o=>{});
          client.user.setActivity(sayMessage);
        }
    } else
    if(message.content.startsWith("!")) {
        const args = message.content.slice(1).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        console.log(command);
        console.log(message.author);
        message.author.addRole(message.guild.roles.find(r => r.name === command")).catch(console.error);
    }

  });

client.login(process.env.BOT_TOKEN);
