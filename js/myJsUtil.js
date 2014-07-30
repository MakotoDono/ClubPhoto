/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var cheminDeFer;
//var currentPos = "";

var lecookieChemindeFer = "cheminDeFer";
var lecookieChemindeFerSeparateur = ",";

function setCookie(leNom, laValeur) {
    var maDate = new Date();
    var ansTime = 600000;//pour 10 minutes 31536000000;
    //var expiration = new Date(2015, 1, 31);
    var expiration = new Date(ansTime + maDate.getTime());
    document.cookie = leNom + "=" + encodeURI(laValeur) + "; expires=" + expiration.toGMTString();
}
                
function getCookies(leNom) {
    var recupCookies = document.cookie.split("; ");
    for (var i = 0; i < recupCookies.length; i++) {
        var param = recupCookies[i].split("=");
        if (param[0] === leNom) {
            return decodeURI(param[1]);
        }
    }
    return null;
}
 
function reInitCookies(leNom) {
    var maDate = new Date();
    document.cookie = leNom + "=; expires=" + maDate.toGMTString();
}
    
function toHref(str) {
    var leText;
    switch(str) {
    case "Accueil": 
        leText = $("<a>", {
            href : "index.html",
            text: str
        });
        break;
    case "LaPhototeque" :
        leText = $("<a>", {
            href : str + ".html",
            text: "La Phototèque"
        });
        break;
    case "LesActivites" :
        leText = $("<a>", {
            href: str + ".html",
            text: "Les Activités"
        });
        break;
    case "contactezNous" :
        leText = $("<a>", {
            href: str + ".html",
            text: "Contactez-Nous"
        });
        break;
    case "presentation" :
        leText = $("<a>", {
            href: str + ".html",
            text: "présentation"
        });
        break;
    case "agendaExposition" :
        leText = $("<a>", {
            href: str + ".html",
            text: "Agenda des expositions"
        });
        break;
    case "listeDesClubs" :
        leText = $("<a>", {
            href: str + ".html",
            text: "Liste des clubs"
        });
        break;
    default:
        leText = $("<a>", {
            href: str + ".html",
            text: str
        });
    }          
    return leText;
}
    
function enleveChemindeFer(value) {
    var unChemin = getCookies(lecookieChemindeFer);
    if (unChemin !== null) {
        var split = unChemin.split(lecookieChemindeFerSeparateur);
        var txt = "";
        for(var i =0; i <= value; i++) {
            txt += split[i];
            if (i < value) {
                txt += lecookieChemindeFerSeparateur;
            }
        }
        setCookie(lecookieChemindeFer, txt);
    }
}
    
function addChemin (leChemin) {
    cheminDeFer = $("#cheminDeFer>p>span");
    var unChemin = getCookies(lecookieChemindeFer);
    //var leText = "";
    var unCookie = "";
    var addchemin = true;
        
    if (unChemin !== null) {
        var split = unChemin.split(lecookieChemindeFerSeparateur);
        for (var i = 0; i < split.length; i++) {
            //leText += toHref(split[i]) + ">";
            if (split[i]) {
                var baliseA = toHref(split[i]);
            //if (baliseA) {
                var balfct = function (value) {
                    baliseA.on("click", function(){
                        enleveChemindeFer(value);
                        //setCookie(lecookieCurrentPos, split[value]);
                    });
                    return value;
                }(i);
                cheminDeFer.append(baliseA);
                if (i === split.length-1 && split[i] === leChemin) {
                    addchemin = false;
                }
                /*else if ((i%4 ===0)&&(i !==0)) {
                    cheminDeFer.append("<br/>>");
                }*/
                else {
                    cheminDeFer.append(">");
                }
            }
        }
        /*if (split[split.length-1] === leChemin) {
            addchemin = false;
        }*/
        unCookie = unChemin;
    }
        
    if (unCookie !== "") {
        unCookie += lecookieChemindeFerSeparateur + leChemin;
    }
    else {
        unCookie = leChemin;
    }
    if (addchemin) {
        setCookie(lecookieChemindeFer, unCookie);
        /*leText += toHref(leChemin);*/
        cheminDeFer.append(toHref(leChemin));
    }
    /*else {
        leText = leText.substring(0, leText.length-1);
    }
    cheminDeFer.html(leText);*/
}
