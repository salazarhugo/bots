const Discord = require('discord.js')
const client = new Discord.Client()
const bot_name = "epita";


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
        const command = args.shift().toUpperCase();
       
        console.log(command);
        if(command === "GAMER" || command === "A1" || command === "A2" || command === "B1" || command === "B2" || command === "C1" || command === "C2" || command === "D1" || command === "D2" || command === "ENG1" || command === "ENG2" || command === "ENG3") {
            if(message.member.roles.find(r => r.name === command)) {
                message.channel.send(message.member.displayName + " already has this role");
                return;
            }
            if(command === "GAMER") {
                message.member.addRole(message.guild.roles.find(r => r.name === "Gamer")).then(() => {
                    message.reply("Successfully added role " + command + " to " + message.member.displayName);
                }).catch(err => {
                  console.error(err);
                  message.channel.send(err);
                });
            } else {
                message.member.addRole(message.guild.roles.find(r => r.name === command)).then(() => {
                    message.reply("Successfully added role " + command + " to " + message.member.displayName);
                }).catch(err => {
                  console.error(err);
                  message.channel.send(err);
                });
            }
            
        } else if(command === "ADMIN") {
            message.channel.send("Nope bitch!");
        }
    }

  });

client.login(process.env.BOT_TOKEN);
