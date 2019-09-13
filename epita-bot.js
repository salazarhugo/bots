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
     
        if(command === "MC" || command === "MINECRAFT" || command === "LOL" ||command === "APEX" ||command === "CS" ||command === "R6" || command === "GAMER" || command === "A1" || command === "A2" || command === "B1" || command === "B2" || command === "C1" || command === "C2" || command === "D1" || command === "D2" || command === "ENG1" || command === "ENG2" || command === "ENG3") {
            if(message.member.roles.find(r => r.name.toLowerCase() === command.toLowerCase())) {
                message.reply("You already have this role");
                return;
            }
         
            message.member.addRole(message.guild.roles.find(r => r.name.toLowerCase() === command.toLowerCase())).then(() => {
                message.reply("Successfully added role " + r);
            }).catch(err => {
              console.error(err);
              message.channel.send(err);
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
            //message.reply("This command doesn't exist. !request <role> to request a new command");
        }
    }

  });

client.login(process.env.BOT_TOKEN);
