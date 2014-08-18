$(document).ready( function() {
	$("#navbarLoad").load("./navbar.html", function(){
var mattrocco = $('#mattRocco');
var bottomNav = $('#bottomNav');
window.onload=function() {
    document.getElementById('loading-mask').style.display='none';
}

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
    document.getElementById(name).setAttribute("class","active");
}
	//if( $("#" + name)!= null){ 
        if(name == null){
            alert("name is null");
        }
        if(name == ""){
            alert("name is emptyString");
        }
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
//} 

var navbar = $('#navbar');

var pageX;
var newMatt;
var newBot
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
})