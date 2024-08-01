const { zokou } = require("../framework/itachi");

const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")

const conf = require("../set");



zokou({ nomCom: "itachi", categorie: "General", reaction: "💞" }, async (dest, zk, commandeOptions) => {

    const { ms , mybotpic } = commandeOptions;

    

  const thsudo = await isSudoTableNotEmpty()



  if (thsudo) {

     let msg = `*My Super-User*\n

     *Owner Number\n* :

- 🌟 @${conf.NUMERO_OWNER}



------ *other sudos* -----\n`

     

 let sudos = await getAllSudoNumbers()



   for ( const sudo of sudos) {

    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies

      sudonumero = sudo.replace(/[^0-9]/g, '');

      msg += `- 💼 @${sudonumero}\n`;

    } else {return}



   }   const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";

   const mentionedJid = sudos.concat([ownerjid])

   console.log(sudos);

   console.log(mentionedJid)

      zk.sendMessage(

        dest,

        {

          image : { url : mybotpic() },

          caption : msg,

          mentions : mentionedJid

        }

      )

  } else {

    const vcard =

        'BEGIN:VCARD\n' + // metadata of the contact card

        'VERSION:3.0\n' +

        'FN:' + conf.OWNER_NAME + '\n' + // full name

        'ORG:undefined;\n' + // the organization of the contact

        'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + // WhatsApp ID + phone number

        'END:VCARD';

    zk.sendMessage(dest, {

        contacts: {

            displayName: conf.OWNER_NAME,

            contacts: [{ vcard }],

        },

    },{quoted:ms});

  }

});



zokou({ nomCom: "dev", categorie: "General", reaction: "💞" }, async (dest, zk, commandeOptions) => {

    const { ms, mybotpic } = commandeOptions;



    const devs = [

      { nom: "paul adedokun", numero: "2348132290207" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro

    ];



    let message = "No single thing is perfect by itself. That's why we're born to attract other things to make up for what we lack!!!👋 welcome to *ITACHI-MD-pixel* ! here is the dev :\n\n";

    for (const dev of devs) {

      message += `----------------\n• ${dev.nom} : https://wa.me/qr/5DA2I3S47QA3O1${dev.numero}\n`;

    }

  var lien = mybotpic()

    if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:message }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu erreur " + e);

        repondre("🥵🥵 Menu erreur " + e);

    }

} 

// Vérification pour .jpeg ou .png

else if (lien.match(/\.(jpeg|png|jpg)$/i)) {

    try {

        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu erreur " + e);

        repondre("🥵🥵 Menu erreur " + e);

    }

} 

else {

    repondre(lien)

    repondre("link error");

    

}

});



zokou({ nomCom: "support", categorie: "General" }, async (dest, zk, commandeOptions) => {

  const { ms, repondre, auteurMessage, } = commandeOptions; 

 

  repondre("look on pm sir ")

  await zk.sendMessage(auteurMessage,{text : `https://whatsapp.com/channel/0029VafgKHuDjiOa7y21kq37`},{quoted :ms})



})



