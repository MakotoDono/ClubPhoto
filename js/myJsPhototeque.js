/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var container = function () {
    
    var lesImg;
    var flecheImg;
    var lesDivPhoto;
    var positionDivPhoto;
    //var lecookieCurrentPos = "currentPos";
    
    $(document).ready(function() {
        
        menuDate();
        addChemin("LaPhototeque");
        
        lesImg = $("#affPhoto img");
        lesImg.each(function() {
            $(this).click(function() {
                var idCache = $("#cache");
                var imgCache = $("#cache img");
                    
                imgCache.on("load", function(){
                    idCache.fadeIn("slow");/*.show();*/
                    
                    var margegauche = parseInt((idCache.width()-imgCache.width())/2)-10;
                    var margehaut = parseInt((idCache.height()-imgCache.height())/2)-10;
                    
                    /* pour centrer l'image */
                    imgCache.css({"margin-top" : margehaut+"px",
                                  "margin-left" : margegauche+"px"
                              });
                    
                });
                    
                imgCache.attr("src", $(this).attr("src"));
                imgCache.attr("alt", $(this).attr("alt"));
                imgCache.attr("title", $(this).attr("title"));
                    
                idCache.click(function(){
                    idCache.fadeOut("slow");//.hide();
                });
            });
        });
        
        positionDivPhoto = 0;
        
        flecheImg = $("#laPhototeque>img");
        lesDivPhoto= $("#affPhoto>div");
        
        flecheImg.click(function(){
                lesDivPhoto.eq(positionDivPhoto).hide();
                if (this === flecheImg.first()[0]) {
                    flecheImg.last().css("visibility", "visible");
                    positionDivPhoto--;
                    if (positionDivPhoto === 0) {
                        $(this).css("visibility", "hidden");
                    }
                }
                else {
                    flecheImg.first().css("visibility", "visible");
                    positionDivPhoto++;
                    if (positionDivPhoto === lesDivPhoto.length-1) {
                        $(this).css("visibility", "hidden");
                    }
                }
                lesDivPhoto.eq(positionDivPhoto).show();
        });
        
        flecheImg.eq(0).css("visibility", "hidden");
        
        lesDivPhoto.each(function(index){
            if (index > 0) $(this).hide();
        });
        
    });
    
    return true;
}();
