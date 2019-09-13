const Discord = require('discord.js')
const client = new Discord.Client()
const bot_name = "epita";
const webshot = require('webshot');
 

client.on("ready", () => {
 console.log("Ready started");
   webshot("google.com", "./screenshots/google.png", function(err) {
    console.log(err);
    // screenshot now saved to google.png
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
     
        if(message.member.roles.find(r => r.name.toLowerCase() === command.toLowerCase())) {
            message.reply("You already have this role");
            return;
        }
     
        if(command === "MC") {
            message.member.addRole(message.guild.roles.find(r => r.name.toLowerCase() === "minecraft")).then(() => {
            message.reply("Successfully added role " + command );
            }).catch(err => {
              console.error(err);
              message.reply("TypeError: Supplied parameter was neither a Role nor a Snowflake.");
            });
        } else if(command === "ADMIN") {
            message.channel.send("Nope bitch!");
        } else if(command === "CLEAR") {
             message.member.removeRoles(message.member.roles).then(() => {
                    message.reply("Successfully removes roles");
                }).catch(err => {
                  console.error(err);
                  message.channel.send(err);
                });
        } else if(command === "HELP") {
            //message.reply("Successfully removes roles");
        } else if(command === "REQUEST") {
        } else {
            message.member.addRole(message.guild.roles.find(r => r.name.toLowerCase() === command.toLowerCase())).then(() => {
            message.reply("Successfully added role " + command );
            }).catch(err => {
              console.error(err);
              message.reply("TypeError: Supplied parameter was neither a Role nor a Snowflake.");
            });
        }
    }

  });

client.login(process.env.BOT_TOKEN);
