$(document).ready( function() {
	
    $('#mattRocco').hide(); 
    $('#bottomNav').hide();


});

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