/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var container = function () {
    
    var lesImg;
    
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
                });
                    
                imgCache.attr("src", $(this).attr("src"));
                imgCache.attr("alt", $(this).attr("alt"));
                imgCache.attr("title", $(this).attr("title"));
                    
                idCache.click(function(){
                    idCache.fadeOut("slow");//.hide();
                });
            });
        });   
    });
    
    return true;
}();
