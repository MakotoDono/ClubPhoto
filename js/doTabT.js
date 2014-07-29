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
function doTabT(idTable, tab2d, dataButton, dataAffButton, dataAffButtonTab) {
    var latable = $(idTable);
        
    var asideinf = null;
    var nomId = "";
    if (dataButton) {
        asideinf = $("#infoSup"); //récupération de la div caché
        nomId = "affDetaille"; //première partie de l'identifiant pour les dives à cacher
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
                    $("#"+nomId+value).toggle("slow");
                    /*for (var k = 0; k < length; k++) {
                        if (k !== value) {    
                            $("#"+nomId+k).hide("slow");
                        }
                    }*/
                    $("#infoSup>div").each(function(k){
                        if (k !== value) $(this).hide("slow"); 
                    });
                });
            //}(i, tab2d.length);
            }(i);
            var divInfo = $("<div><\div>").attr("id", nomId + i); //création de la div caché de Id=nomId[0-9]+
                
            for (var j = 0; j < dataAffButton.length; j++) { //pour chaque ligne on construit la div caché avec les informations contenues dans dataAffButtonTab
                divInfo.append(dataAffButton[j][1]);
                divInfo.append(dataAffButtonTab[i][dataAffButton[j][0]]);
            }
                
            asideinf.append(divInfo);
            divInfo.hide();
        }
        latable.append(row); //ajout de la ligne dans le tableau.
    }
}