/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var container = function () {
    
    //var lecookieCurrentPos = "currentPos";
    
    $(document).ready(function() {
        
        menuDate(); //initialisation du menu est de la date
        addChemin("Accueil"); //rajoute Accueil dans le chemin de fer
        //cheminDeFer = $("#cheminDeFer>p>span");
        
        //currentPos=getCookies(lecookieCurrentPos);
        
        /*var urlnow = $(location).attr("href");
        var taburl = urlnow.split("/");
        var currentPos = taburl[taburl.length-1];
        var currentPos = currentPos.substring(0, currentPos.length-5); //".html" = 5
        
        if (currentPos !== "index") {
            addChemin(currentPos);
        }
        else {
            addChemin("Accueil");
        }*/
        //$("section>article:first-child").show();
    });
    
    return true;
}();
