$(document).ready( function() {
    $("#navbarLoad").load("./navbar.html", function(){
var mattrocco = $('#mattRocco');
var bottomNav = $('#bottomNav');
window.onload=function() {
    document.getElementById('loading-mask').style.display='none';
}

var secretString = "t";
secretString = secretString.concat("t");




   mattrocco.hide(); 
   bottomNav.hide();
var name = location.pathname.split('/').slice(-1);
name = String(name);
var pos = name.indexOf('.');
name = name.substring(0,pos);
    var current = $("#" + name);
         $("#" + name).addClass("active");
         if(name.length == 0){
    document.getElementById("index").setAttribute("class","active");
    mattrocco.show(); 
    bottomNav.show();
} else{
   // document.getElementById(name).setAttribute("class","active");
}
    if( name != ""){ 
      
     $("#" + name).addClass("active");
     if(mattrocco){
        mattrocco.css({
        left: $("#"+name).position().left,
    }); 
            mattrocco.show(); 

    }
    if(bottomNav){
    bottomNav.css({
        left: $("#"+name).position().left,
    });
        bottomNav.show();

}
} else {
    mattrocco.show();
    bottomNav.show();
} 
secretString = secretString.concat("u");
secretString = secretString.concat("b");
secretString = secretString.concat("k");

var navbar = $('#navbar');

var pageX;
var newMatt;
var newBot

secretString = secretString.concat("c");

secretString = secretString.concat("i");

secretString = secretString.concat("d");
var newString = secretString.split("").reverse().join("");

secretString = [100,105,99,107,89,117,116,116];

    $(document).bind('mousemove', function(e){
    if(navbar!=null){
        pageX= e.pageX
    if(pageX < navbar.position().left + navbar.width() - 165
        && pageX > navbar.position().left + 100)
    {
        newMatt = pageX-100;
        newBot = pageX-140;
    mattrocco.css({
        left: newMatt,
    }); 
    bottomNav.css({
        left: newBot,
    });
}
}
});
});
$("#loading-mask").hide();
var currentKeyString = "";
var currentKeyStringCount = 0;

$(document).keypress(function(e){
secretString = ["100","105","99","107","98","117","116","116"];
    if(e.charCode == secretString[currentKeyStringCount]){
        currentKeyStringCount = currentKeyStringCount + 1;
        if(currentKeyStringCount == secretString.length){
            $('#db').modal('show');
        } 

        
    } else{
        currentKeyStringCount = 0;
    }
    // currentKeyString = currentKeyString + e.keyCode;


});
})

