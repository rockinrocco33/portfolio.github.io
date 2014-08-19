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


$("#webcam").scriptcam({

showMicrophoneErrors:false,
onError:onError,
cornerRadius:20,
disableHardwareAcceleration:1,
cornerColor:'e3e5e2',
onWebcamReady:onWebcamReady,
uploadImage:'upload.gif',
onPictureAsBase64:base64_tofield_and_image
})

});
