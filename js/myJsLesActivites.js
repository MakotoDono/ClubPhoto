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
      
    var laTable;
    
    $(document).ready(function() {
        
        menuDate();
        addChemin("LesActivites");
        
        laTable = $("#tabs");
        laTable.tabs();
        doTabT("#lesSorties tbody", agendaSortie, false, null, null);
        doTabT("#resultatParticipation tbody", listeParticpant, false, null, null); 
        
    });
    
    return true;
}();
