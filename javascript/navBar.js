$(document).ready( function() {
	$("#navbarLoad").load("./navbar.html", function(){

    $('#mattRocco').hide(); 
    $('#bottomNav').hide();
var name = location.pathname.split('/').slice(-1);
name = String(name);
var pos = name.indexOf('.');
name = name.substring(0,pos);
	var current = $("#" + name);
         $("#" + name).addClass("active");
         if(name.length == 0){
    document.getElementById("index").setAttribute("class","active");
    $('#mattRocco').show(); 
    $('#bottomNav').show();
} else{
    document.getElementById(name).setAttribute("class","active");
}
	if( $("#" + name)!= null){ 
	 $("#" + name).addClass("active");
	// $('#mattRocco').css({
 //        left: $("#" + name).position().left ,
 //    });
 //    $('#bottomNav').css({
 //    	left: $("#" + name).position().left,
 //    })

    $('#mattRocco').show(); 
    $('#bottomNav').show();

} 
$.fn.disableSelection = function() {
  return this.each(function() {
    $(this).attr('unselectable', 'on')
    .css({
      '-moz-user-select':'none',
      '-webkit-user-select':'none',
      'user-select':'none',
      '::selection':'none',
    })
    .each(function() {
      this.onselectstart = function() { return false; };
    });
  });
};

var navbar = $('#navbar');
var mattrocco = $('#mattRocco');
var bottomNav = $('#bottomNav');
	$(document).bind('mousemove', function(e){


    if(navbar!=null){
 	if(e.pageX < navbar.position().left + navbar.width() - 165
		&& e.pageX > navbar.position().left + 100

		)
	{
    mattrocco.css({
        left: e.pageX -100,
    }); 
    bottomNav.css({
    	left: e.pageX - 140,
    });

}
}
});
});
})