/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* construction d'une table à deux dimension pouvant contenir un bouton en dernière colonne si dataButton=true va permettre de créer des 
 * div en fonction de dataAffButtonTab et de dataAffButton, sinon affiche que tab2d.
 * dataAffButton est un tableau à deux dimension de chaîne de caractère dont la première colonne contient les clefs pour retrouver l'élément
 * dans dataAffButtonTab à afficher dans une div qui sera caché par la suite.
 * */

var coordonnee = "map-canvas"; //"coordonnee";
//var constructCarte = false;
var maps = [];
var marqueur = [];
var nomDivCache = "affDetaille";


function doTabT(idTable, tab2d, dataButton, dataAffButton, dataAffButtonTab) {
    var latable = $(idTable);
        
    var asideinf = null;
    var nomId = "";
    if (dataButton) {
        asideinf = $("#infoSup"); //récupération de la div caché
        nomId = nomDivCache; //première partie de l'identifiant pour les dives à cacher
    }
    for (var i = 0; i < tab2d.length; i++) {
        var row = $("<tr></tr>");
        for (var j = 0; j < tab2d[i].length; j++) {
            var td = $("<td>"+tab2d[i][j]+"</td>");
            row.append(td);
        }
            
        if (dataButton) {
            var button = $("<button>détails</button>");
            var tdButton = $("<td></td>").append(button);
            row.append(tdButton);
                
            //var fctbutton = function(value, length) {
            var fctbutton = function(value) {
                button.on("click", function () {
                    var ladivCache = $("#"+nomId+value).toggle("slow");
                    /*for (var k = 0; k < length; k++) {
                        if (k !== value) {    
                            $("#"+nomId+k).hide("slow");
                        }
                    }*/
                    if (maps.length>0 && ladivCache.css("display") == "block") {
                        google.maps.event.trigger(maps[value], 'resize');
                        var center = new google.maps.LatLng(dataAffButtonTab[value]["coordonnee"].lat,dataAffButtonTab[value]["coordonnee"].lng);
                        //alert("latitude :" + dataAffButtonTab[value]["coordonnee"].lat + "|| longitude :" + dataAffButtonTab[value]["coordonnee"].lng);
                        maps[value].setCenter(center);
                        maps[value].setZoom(maps[value].getZoom());
                    }
                    
                    $("#infoSup>div").each(function(k){
                        if (k !== value) $(this).hide("slow"); 
                    });
                });
            //}(i, tab2d.length);
            }(i);
            var divInfo = $("<div></div>").attr("id", nomId + i); //création de la div caché de Id=nomId[0-9]+
                
            for (var j = 0; j < dataAffButton.length; j++) { //pour chaque ligne on construit la div caché avec les informations contenues dans dataAffButtonTab
                divInfo.append(dataAffButton[j][1]);
                if (dataAffButton[j][0] === coordonnee) {
                    var divCarte = $("<div></div>").attr("id", coordonnee + i).css({"height": "250px", "width": "250px", "border" : "5px solid white", "margin" : "auto"});
                    divInfo.append(divCarte);
                    //constructCarte = true;
                }
                else {
                    divInfo.append(dataAffButtonTab[i][dataAffButton[j][0]]); //AIzaSyCLVHBMrZeP3sy9FqMwya76VrOnq7_IW6k (48.784179,2.434954,17)
                }
            }
            asideinf.append(divInfo);
            divInfo.hide();
        }
        latable.append(row); //ajout de la ligne dans le tableau.
    }
}

function construitCarte(dataAff) {
    //var maps = [];
    //var marqueur = [];
    for (var i = 0; i < dataAff.length; i++) {
        var latitude = dataAff[i]["coordonnee"].lat;
        var longitude = dataAff[i]["coordonnee"].lng;
        
        var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(latitude, longitude),
            maxZoom: 20
        };
        maps[i] = new google.maps.Map(document.getElementById(coordonnee+i), mapOptions);
        
        var optionsMarqueur = {
            map: maps[i],
            position: new google.maps.LatLng(latitude, longitude),
            title: dataAff[i]["coordonnee"].title
        };
        
        marqueur[i] = new google.maps.Marker(optionsMarqueur);
    }
}

