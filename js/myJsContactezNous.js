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
    
    var regexNomPrenom = /^[A-Z][a-z]{2,}$/i;
    var contactNom;
    var contactPrenom;
    var boolContactNom = false;
    var boolContactPrenom = false;
    
    var regexTelephone = /^(((\+\d{2,3})|0)([ \-\.]?\d){9})?$/g;
    var contactNum;
    var boolContactNum = false;
    
    var regexMail = /^\w+([\.\-_]\w+)*@\w{2,}([\.\-_]\w+)*\.[a-z]{2,6}$/g;
    var contactMail;
    var boolContactMail = false;
    
    var submit;
    
    function changeBorderColor(leInput, leRegex) {
        if (leInput.val().match(leRegex)) {
            leInput.css("border", "1px solid green");
            return true;
        }
        else {
            leInput.css("border", "1px solid red");
            return false;
        }
    }
    
    $(document).ready(function() {
        
        menuDate();
        addChemin("contactezNous");
        
        contactNom = $("#Nom");
        contactPrenom = $("#Prenom");
        contactNum = $("#Telephone");
        contactMail = $("#Mail");
            
        submit = $("input[type=submit]");
            
        contactNom.keyup(function(){
            boolContactNom = changeBorderColor(contactNom, regexNomPrenom);
        });
        contactNom.change(function(){
            boolContactNom = changeBorderColor(contactNom, regexNomPrenom);
        });
        contactNom.blur(function(){
            boolContactNom = changeBorderColor(contactNom, regexNomPrenom);
        });
            
        contactPrenom.keyup(function(){
            boolContactPrenom = changeBorderColor(contactPrenom, regexNomPrenom);
        });
        contactPrenom.change(function(){
            boolContactPrenom = changeBorderColor(contactPrenom, regexNomPrenom);
        });
        contactPrenom.blur(function(){
            boolContactPrenom = changeBorderColor(contactPrenom, regexNomPrenom);
        });
            
        contactNum.keyup(function(){
            boolContactNum = changeBorderColor(contactNum, regexTelephone);
        });
        contactNum.change(function(){
            boolContactNum = changeBorderColor(contactNum, regexTelephone);
        });
        contactNum.blur(function(){
            boolContactNum = changeBorderColor(contactNum, regexTelephone);
        });
            
        contactMail.keyup(function(){
            boolContactMail = changeBorderColor(contactMail, regexMail);
        });
        contactMail.change(function(){
            boolContactMail = changeBorderColor(contactMail, regexMail);
        });
        contactMail.blur(function(){
            boolContactMail = changeBorderColor(contactMail, regexMail);
        });
            
        submit.click(function (event) {
            if (!boolContactNom || ! boolContactPrenom || (contactNum.val() !== "" && !boolContactNum) || !boolContactMail) {
                alert("Un des champs a été mal renseigné!");
                if (event.preventDefault) {
                    event.preventDefault();
                }
                event.returnValue = false;
            }
        });
    
    });
    
    return true;
}();

