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
    var ansTime = 1000;
    maDate = new Date(maDate.getTime()-ansTime);
    document.cookie = leNom + "=; expires=" + maDate.toGMTString();
}

var tabPage = {index : {lvl: 0,
                        sous : "",
                        str :"Accueil"},
               LesActivites : {lvl : 1,
                               sous : "Club",
                               str : "Les Activités"},
               LaPhototeque : {lvl : 2,
                               sous : "Club",
                               str : "La Phototèque"},
               contactezNous : {lvl : 3,
                                sous : "Club",
                                str : "Contactez-Nous"},
               presentation : {lvl : 1,
                               sous : "CDP91",
                               str : "présentation"},
               agendaExposition : {lvl : 2,
                                   sous : "CDP91",
                                   str : "Agenda des expositions"},
               listeDesClubs : {lvl : 3,
                                sous : "CDP91",
                                str : "Liste des clubs"},
               Liens : {lvl : 1,
                        sous : "Liens",
                        str : "Liens"}
    };
    
var tabSous = {Club : ["index", "LesActivites", "LaPhototeque", "contactezNous"],
               CDP91 : ["index", "presentation", "agendaExposition", "listeDesClubs"],
               Liens : ["index", "Liens"]
    };

function toHref(str) {
    var leText = $("<a>", {href : str + ".html",
                           text : tabPage[str].str
                       });          
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
    var enlevechemin = false;
        
    if (unChemin !== null) {
        var split = unChemin.split(lecookieChemindeFerSeparateur);
        var lvl = tabPage[leChemin].lvl;
        var sous = tabPage[leChemin].sous;
        //alert(split.length);
        for (var i = 0; i < split.length; i++) {
            //leText += toHref(split[i]) + ">";
            if ((split[i])&&(split[i] !== "null")) {
                //alert("split = " + split[i]);
                //alert(lvl + ":" + split[i] + ":" + tabPage[split[i]].lvl);
                if (!enlevechemin && lvl >= tabPage[split[i]].lvl && (sous === tabPage[split[i]].sous || tabPage[split[i]].sous === "")) {
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
                else {
                    enlevechemin = true;
                    unCookie = "";
                    break;
                }
            }
        }
        /*if (split[split.length-1] === leChemin) {
            addchemin = false;
        }*/
        if (!enlevechemin) {
            if (split.length > 0 && (split[split.length-1])&&(split[split.length-1] !== "null")) {
                for (var i = tabPage[split[split.length-1]].lvl+1; i < lvl; i++) {
                    var baliseA = toHref(tabSous[sous][i]);
            //if (baliseA) {
                    var balfct = function (value) {
                        baliseA.on("click", function(){
                            enleveChemindeFer(value);
                        //setCookie(lecookieCurrentPos, split[value]);
                        });
                        return value;
                    }(i);
                    cheminDeFer.append(baliseA);
                    cheminDeFer.append(">");
                    unChemin += lecookieChemindeFerSeparateur + tabSous[sous][i];
                }
            }
            unCookie = unChemin;
        }
        else {
            reInitCookies(lecookieChemindeFer);
            cheminDeFer.html("");
            //alert("sous=" + sous + " -> lvl = " + lvl + "\n" + getCookies(lecookieChemindeFer));
            
            var tablvl = tabSous[sous];
            for (var i = 0; i < lvl; i++){
                //addChemin(tablvl[lvlsous]);
                //alert(cheminDeFer.text());
                var baliseA = toHref(tablvl[i]);
            //if (baliseA) {
                var balfct = function (value) {
                    baliseA.on("click", function(){
                        enleveChemindeFer(value);
                        //setCookie(lecookieCurrentPos, split[value]);
                    });
                    return value;
                }(i);
                cheminDeFer.append(baliseA);
                cheminDeFer.append(">");
                unCookie += tablvl[i] + lecookieChemindeFerSeparateur;
            }
            if (lvl > 0) { 
                //cheminDeFer.append(">");
            //unCookie = getCookies(lecookieChemindeFer);
                unCookie = unCookie.substring(0, unCookie.length-1);
            }
        }
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
