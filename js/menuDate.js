/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var clubMenu;
//var clubMenuCacher;
var CDP91Menu;
//var CDP91MenuCacher;
var lienMenu;
var laDate;

function menuDate() {
    var lesLi = $("nav>ul>li");
    var lesUl = $("nav>ul>li>ul");
    clubMenu = lesLi.eq(0);
    CDP91Menu = lesLi.eq(1);
    lienMenu = lesLi.eq(2);
        
    //clubMenuCacher = $("#menuClub li");
    //CDP91MenuCacher= $("#menuCDP91 li");
    /*clubMenu.mouseover(function(){
        lesUl.eq(0).show();
    });
        
    clubMenu.mouseout(function(){
        lesUl.eq(0).hide();
    });*/
        
    clubMenu.hover(function(){
        lesUl.eq(0).fadeIn("slow");//.show();
    },
                   function(){
        lesUl.eq(0).fadeOut("slow");//.hide();
    });
        
    /*CDP91Menu.mouseover(function(){
        lesUl.eq(1).show();
    });
        
    CDP91Menu.mouseout(function(){
        lesUl.eq(1).hide();
    });*/
        
    CDP91Menu.hover(function(){
        lesUl.eq(1).fadeIn("slow");//.show();
    },
                    function(){
        lesUl.eq(1).fadeOut("slow");//.hide();
    });
        
    var aujourdHui = new Date();
    var dateAujourd = aujourdHui.getDate();
    var leMois = aujourdHui.getMonth()+1;
    laDate = $("#date");
    laDate.html("Date: " + ((dateAujourd < 10) ? "0" : "")+ dateAujourd + "/" + ((leMois < 10) ? "0" : "")+ leMois+ "/" + aujourdHui.getFullYear());
}
