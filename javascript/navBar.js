$(document).ready( function() {
	
    $('#mattRocco').hide(); 
    $('#bottomNav').hide();
var name = location.pathname.split('/').slice(-1);
name = String(name);
var pos = name.indexOf('.');
name = name.substring(0,pos);
	var current = $("#" + name);
         $("#" + name).addClass("active");
document.getElementById(name).setAttribute("class","active");

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


	$(document).bind('mousemove', function(e){
    $('#mattRocco').show(); 
    $('#bottomNav').show(); 

    if($('#navbar')!=null){
 	if(e.pageX < $("#navbar").position().left + $("#navbar").width() - 165
		&& e.pageX > $("#navbar").position().left + 100

		)
	{
    $('#mattRocco').css({
        left: e.pageX -100,
    }); 
    $('#bottomNav').css({
    	left: e.pageX - 140,
    });

}
}
});
})