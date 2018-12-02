const Discord = require('discord.js')
const c = new Discord.Client()

c.on('ready', function () {
  console.log(`Connecté avec @${c.user.tag} !`)
  c.user.setActivity('Tapez S-help et regardez @adriengonz' , {type: 'STREAMING'})
});

c.on('message', async msg => {
  console.log(`@${msg.author.username} à dit "${msg.content}" dans ${msg.channel.name}`); //Message sous forme lisible logger dans l'invite de commandes
  console.log(`<@${msg.author.id}> à dit "${msg.id}" dans <#${msg.channel.name}>`); //Message sous forme ID logger dans l'invite de commandes
  console.log('--'); //Séparateur

  if(msg.content.startsWith('SONDAGE Y/N') || msg.content.startsWith('SONDAGE O/N')){
      msg.react('✅').then(msg.react('❌'))
    }
  if(msg.content.startsWith('SONDAGE 2')){
    msg.react('1⃣').then(msg.react('2⃣'))
  }
  if(msg.content.startsWith('SONDAGE 3')){
    msg.react('1⃣').then(msg.react('2⃣')).then(msg.react('3⃣'))
  }
  if(msg.content.startsWith('SONDAGE 4')){
    msg.react('1⃣').then(msg.react('2⃣')).then(msg.react('3⃣')).then(msg.react('4⃣'))
  }
    if(msg.content.startsWith('SONDAGE 5')){
      msg.react('1⃣').then(msg.react('2⃣')).then(msg.react('3⃣')).then(msg.react('4⃣')).then(msg.react('5⃣'))
  }
   if(msg.content === 'S-invite'){
     msg.reply('Voilà le lien d\'invitaton ! : https://discordapp.com/oauth2/authorize?client_id=467650879206588426&scope=bot&permissions=67456064')
   }
   if(msg.content === 'S-help'){
     msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: c.user.username,
      icon_url: c.user.avatarURL
    },
    title: "Hey ! Voilà les listes des commandes ! ✅ :",
    fields: [{
        name: "S-help",
        value: "Affiche la liste des commandes 📜"
      },
      {
        name: "S-helpEN",
        value: "Affiche la liste des commandes en Anglais 📜"
      },
      {
        name: "S-invite",
        value: "Envoie le lien pour inviter ce bot sur votre serveur ! 🌐"
      },
      {
        name: "S-support",
        value: "Envoie le lien du serveur de support"
      },
      {
        name: "S-createur",
        value: "Affiche le nom du créateur du bot !"
      },
      {
        name: "Commandes Sondages :",
        value: "Commencez par mettre au début de votre message en majuscules SONDAGE puis soit **Y/N** ou **2** ou **3** ou **4** ou **5** et + (tapez S-liste pour savoir combien de réactions le bot supporte et quand j\'aurais le temps j\'en rajouterais)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: c.user.avatarURL,
      text: "2018 Adri-djay g"
    }
  }
});
   }
   if(msg.content === 'S-helpEN'){
     msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: c.user.username,
      icon_url: c.user.avatarURL
    },
    title: "Hey ! This is the commands ! ✅ :",
    fields: [{
        name: "S-help",
        value: "Show the list of commands 📜"
      },
      {
        name: "S-helpEN",
        value: "Show the list of commands in English 📜"
      },
      {
        name: "S-invite",
        value: "Send the link for invite this bot on your server ! 🌐"
      },
      {
        name: "S-support",
        value: "Send the link for join the support server"
      },
      {
        name: "S-createur",
        value: "Show the name of creator of bot !"
      },
      {
        name: "Sondage commands :",
        value: "Start your message in majuscules SONDAGE and is **Y/N** or **2** or **3** or **4** or **5** and + (tap S-liste for know how much reactions the bot support and when i have the time, i will add ! 😁👍)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: c.user.avatarURL,
      text: "2018 Adri-djay g"
    }
  }
});
   }
   if(msg.content === 'S-liste'){
     msg.channel.send({embed: {
     color: 0x4286f4 ,
     title: "Le bot peut réagir avec les chiffres de 1 à 5. **Mis à jour le 14/07/2018** ✅🌐 \nPour savoir comment faire : Tapez S-help ou S-helpEN for English."
   }});
   }
   if(msg.content === 'S-support'){
     msg.reply('Voilà le lien d\'invitation ! : https://discord.gg/rH24C9m')
   }
   if(msg.content === 'S-createur'){
     msg.reply('Ce bot a été crée par Adrien Gonz**** (Adri-djay g ou Adridu84 sur YouTube)')
   }
 });

   c.login(process.env.TOKEN)
