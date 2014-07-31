/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var tabAgendaExpo = [["Objectif Image", "le filé", "18 octobre 2013"],
                     ["EGLY-Mairie", "Scène de rue", "26 octobre 2013"],
                     ["VILLIERS SUR ORGE", "Vos photos préférées", "09 novembre 2013"],
                     ["CHAMPLAN", "Extravagances", "22 novembre 2013"],
                     ["ASV section photo", "le Geste", "11 janvier 2014"],
                     ["SACLAY-VISION", "Vision de Paris", "01 février 2014"],
                     ["L'espace Photo", "le monde du travail", "08 mars 2014"]
                 ];
    
var infoAgendaExpo = [{lieu:"VIRY-CHATILLON 31, avenue Henri Barbusse. (A la \"ferme\" en face de la mairie)",
                       dateDeb:"18 octobre 2013",
                       dateFin:"20 octobre 2013",
                       themeCouleur:"OUI",
                       themeNoirEtBlanc:"OUI",
                       depotAccrochage:"jeudi 17 octobre, 17H à 20H",
                       dateDecrochage:"dimanche 20 octobre à 18H",
                       coordonnee: {lat: 48.671867,
                                    lng: 2.376169,
                                    title: "VIRY-CHATILLON"}
                      },
                      {lieu:"Mairie d'Egly 4 Grand Rue",
                       dateDeb:"26 octobre 2013",
                       dateFin:"27 octobre 2013",
                       themeCouleur:"OUI",
                       themeNoirEtBlanc:"OUI",
                       depotAccrochage:"dépôt vendredi 18 octobre 9H à 18H",
                       dateDecrochage:"dimanche 27 octobre à 17H30",
                       coordonnee: {lat: 48.579909,
                                    lng: 2.221685,
                                    title:"Mairie d'Egly"}
                      },
                      {lieu:"Espace Colette 10 rue des Rios",
                       dateDeb:"09 novembre 2013",
                       dateFin:"10 novembre 2013",
                       themeCouleur:"OUI",
                       themeNoirEtBlanc:"OUI",
                       depotAccrochage:"accrochage vendredi 8 novembre 14H30 et 19H",
                       dateDecrochage:"dimanche 10 novembre à 18H",
                       coordonnee: {lat: 48.655244,
                                    lng: 2.300577,
                                    title: "VILLIERS SUR ORGE"}
                      },
                      {lieu:"CHAMPLAN Salle polyvalente Chemin du Lavoir",
                       dateDeb:"22 novembre 2013",
                       dateFin:"01 décembre 2013",
                       themeCouleur:"OUI",
                       themeNoirEtBlanc:"OUI",
                       depotAccrochage:"accrochage jeudi 21 novembre",
                       dateDecrochage:"dimanche 01 décembre",
                       coordonnee: {lat: 48.704899,
                                    lng: 2.269051,
                                    title: "CHAMPLAN"}
                      },
                      {lieu:"VILLEBON SUR YVETTE",
                       dateDeb:"11 janvier 2014",
                       dateFin:"19 janvier 2014",
                       themeCouleur:"OUI",
                       themeNoirEtBlanc:"OUI",
                       depotAccrochage:"",
                       dateDecrochage:"",
                       coordonnee: {lat: 48.696445,
                                    lng: 2.235458,
                                    title: "VILLEBON SUR YVETTE"}
                      },
                      {lieu:"Salle Lino Ventura Saclay Bourg",
                       dateDeb:"01 février 2014",
                       dateFin:"09 février 2014",
                       themeCouleur:"OUI",
                       themeNoirEtBlanc:"OUI",
                       depotAccrochage:"",
                       dateDecrochage:"",
                       coordonnee: {lat: 48.754756,
                                    lng: 2.179535,
                                    title: "Saclay Bourg"}
                      },
                      {lieu:"STE GENEVIEVE DES BOIS L'Espace Photo Donjon, Entrée rue de l'orangerie",
                       dateDeb:"08 mars 2014",
                       dateFin:"16 mars 2014",
                       themeCouleur:"OUI",
                       themeNoirEtBlanc:"OUI",
                       depotAccrochage:"dépôt 24 février au 01 mars",
                       dateDecrochage:"dimanche 16 mars",
                       coordonnee: {lat: 48.639244,
                                    lng: 2.330765,
                                    title: "rue de l'orangerie"}
                      }
               ];

function doTab() {
    var dataAffButton = [["lieu", "lieu : "],
                          ["dateDeb", "<br />date de début : "],
                          ["dateFin", "<br />date de fin : "],
                          ["themeCouleur", "<br />thème couleur : "],
                          ["themeNoirEtBlanc", "<br />thème Noir & Blanc : "],
                          ["depotAccrochage", "<br />Dépôt, accrochage : "],
                          ["dateDecrochage", "<br />Date de décrochage : "],
                          [coordonnee, "<br />Carte : "]
                      ];
    doTabT("#tableExposition tbody", tabAgendaExpo, true, dataAffButton, infoAgendaExpo);
    
    construitCarte(infoAgendaExpo);
}
