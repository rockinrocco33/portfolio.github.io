$(document).ready( function() {
	
    $('#mattRocco').hide(); 
    $('#bottomNav').hide();
var name = location.pathname.split('/').slice(-1);
name = String(name);
var pos = name.indexOf('.');
name = name.substring(0,pos);
	var current = $("#" + name);
         $("#" + name).addClass("active");
        
	if(current.position().left){
	current.addClass("active");
	$('#mattRocco').css({
        left:current.position().left ,
    });
    $('#bottomNav').css({
    	left:current.position().left,
    })

    $('#mattRocco').show(); 
    $('#bottomNav').show();

}
})

	$(document).bind('mousemove', function(e){
    $('#mattRocco').show(); 
    $('#bottomNav').show(); 

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
});