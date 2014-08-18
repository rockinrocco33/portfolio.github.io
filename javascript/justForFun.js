$(document).ready(function(){


$('#justForFunTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show');
});

$("#tab1").tab('show');
$("#webcam").scriptcam();
$("#tab2").tab('show');
$("#tab3").tab('show');




	 $('#input').bind("paste",function(e) {
          e.preventDefault();
      });
      $('#input').bind("copy",function(e) {
          e.preventDefault();
      });


});
