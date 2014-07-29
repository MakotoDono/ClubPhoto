/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var tabListe = [["Photo Club Arpajon", "Arpajon"],
                ["Saclay Vision", "Saclay"],
                ["Verrières Images", "Verrières le buisson"],
                ["Orsay CPO", "Orsay"],
                ["Palaiseau M.J.C", "Palaiseau"],
                ["ASV section photo", "Villebon sur Yvette"],
                ["Club photo de Champlan", "Champlan"],
                ["Objectif Image", "Viry Chatillon"],
                ["Club photo du Val d'Orge", "Epinay sur Orge"],
                ["L'espace photo", "Sainte Geneviève des Bois"]
            ];
                
var infoListe = [{nom:"Photo Club Arpajon",
                  adresse:"29 rue Dauvilliers Bâtiment C (dernier étage) 91290 Arpajon",
                  nomPresident:"Jacques FRANCOIS",
                  numTel:"06 81 91 08 39",
                  mail:"photoclub.arpajon@gmail.com"},
                 {nom:"Saclay Vision",
                  adresse:"6, Place de la Mairie 91400 Saclay",
                  nomPresident:"Bernard BIEUZENT",
                  numTel:"",
                  mail:"saclayvisions@free.fr"},
                 {nom:"Verrières Images",
                  adresse:"19, rue Pierre Brossolette 91370 Verrières-le-Buisson",
                  nomPresident:"Didier BONNEAU",
                  numTel:"01 69 20 72 99",
                  mail:""},
                 {nom:"Orsay CPO",
                  adresse:"7 bis Avenue Saint Laurent, 91400 Orsay ",
                  nomPresident:"Luc Bousset",
                  numTel:"",
                  mail:"luc.bousset@laposte.net"},
                 {nom:"Palaiseau M.J.C.",
                  adresse:"Parc de l'Hotel de Ville, avenue du 8 mai 1945 Palaiseau",
                  nomPresident:"Olivier Corsan",
                  numTel:"01 60 14 29 32",
                  mail:""},
                 {nom:"ASV section photo",
                  adresse:"Maison de l'A.S.V Place du 8 Mai 1945 VILLEBON-SUR-YVETTE 91140",
                  nomPresident:"Dominique LOISON",
                  numTel:"01 60 10 48 58 / 01 64 49 79 38",
                  mail:"asvphotos@free.fr"},
                 {nom:"Club photo de Champlan",
                  adresse:"Champlan",
                  nomPresident:"Daniel SEGUINOT",
                  numTel:"01 64 48 89 60  / 06 62 65 89 60",
                  mail:""},
                 {nom:"Objectif Image",
                  adresse:"Viry Chatillon",
                  nomPresident:"Nadine LOISEAU",
                  numTel:"",
                  mail:""},
                 {nom:"Club Photo du Val d'Orge",
                  adresse:"8 rue de l'église 0 Epinay-sur-Orge",
                  nomPresident:"Marie-Laure WETZLER",
                  numTel:"",
                  mail:"photoclub.epinaysurorge@gmail.com"},
                 {nom:"L'espace photo",
                  adresse:"Sainte Geneviève des Bois",
                  nomPresident:"Jean Pierre COSTON",
                  numTel:"",
                  mail:""}
          ];

 function doTabClub() {
    var dataAffButton = [["nom", "Nom : "],
                         ["adresse", "<br />adresse : "],
                         ["nomPresident", "<br />Président : "],
                         ["numTel", "<br />tél : "],
                         ["mail", "<br />mail : "]
                     ];
    doTabT("#tableListe tbody", tabListe, true, dataAffButton, infoListe);
}
