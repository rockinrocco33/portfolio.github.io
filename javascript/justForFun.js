//Paul Bliudzius and I pair-programmed some of the typing test portion.

$(document).ready(function(){


$('#justForFunTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show');
});


$("#tab1").tab('show');
$("#webcam").scriptcam();
$("#tab2").tab('show');
$("#tab3").tab('show');


 $('#notTyped').bind("paste",function(e) {
      e.preventDefault();
  });
  $('#notTyped').bind("copy",function(e) {
      e.preventDefault();
  });
  $('#input').bind("paste",function(e) {
      e.preventDefault();
  });
  $('#input').bind("copy",function(e) {
      e.pr

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
					cornerColor:'e3e5e2',
					onWebcamReady:onWebcamReady,
					uploadImage:'upload.gif',
					onPictureAsBase64:base64_tofield_and_image
				});
			});
  var typingString ="Welcome to the mattroc.co test. This test will assist your typing speed and ability. Do you have what it takes to beat the high scores? I don't think you could no matter how hard you tried, but who am I to judge? Anyway, in the corner you can see your current WPM, and there is a timer with your time remaining above. The highscores will be displayed at the end of the test and are updated after each played game. The typing test is almost over, and if you have gotten this far, you must be a pretty decent typer.";
$("#notTyped").text(typingString);
var hasStarted = false;
var start = 0;
var stringToTestType = "";

var position = 0;
var stopped = false;

var notTypedArr = typingString.split(" ");
var typedArr =[];
$('#input').val("");
$('#print').bind('click', function (e) {
	$('body').css("font-size", 12 + "px");
	$('#input').css("font-size", 14 + "px");
	$('#results').css("font-size", 20 + "px");

	window.print();
});

$('#input').bind('keydown', function (e) {
	if(!hasStarted){
		startTest();
	}
    if (e.keyCode === 8) { //Backspace
    	var inputString = $('#input').val();
    	if(inputString.charAt(inputString.length-1) == " "){
    		prevWord();
    	}
    }else if(e.keyCode ===32){ //Space
    	var inputString = $('#input').val();
    	if(inputString.length>0){
	    	if(inputString.charAt(inputString.length-1) == " "){
	    		e.preventDefault();
	    		return;
	    	}
	    }
    	if(notTypedArr.length <= 0){
    		e.preventDefault();
    	}
    	newWord();
    }
  }
);
shiftNotTypedRight();
function keepcountin(){      
	var s = 5 - start;


	$("#timeRemaining").text(s);
	
	if(s == 0)
	{
	// alert("Your time is up.");
	endTest();
	}
	else if(stopped){
	}
	else {
	start++;
	if(start > 5){
	updateWPM(start);
};
	setTimeout(function(){
		keepcountin()},1000)
	}
}

function endTest(){
	$("#testingArea").fadeOut(400, function(){
	$("#testResults").fadeIn();
	});
}

function startTest(){
	keepcountin();
    hasStarted = true;
	//shiftNotTypedRight();
    $('#input').focus();
}

function newWord(){
	if(notTypedArr.length > 0){
	shiftTypedRight();
	shiftNotTypedRight();
}}

function prevWord(){
	if(typedArr.length != 0){
	shiftNotTypedLeft();
	shiftTypedLeft();
}}

function shiftNotTypedLeft(){
	notTypedArr.unshift($("#currentWord").text());
	var newString= " ";
	for(var k = 0;k<notTypedArr.length;k++){
		newString+=notTypedArr[k]+" ";
	};
    $('#notTyped').text(newString);
}

function shiftTypedLeft(){
	$("#currentWord").text(typedArr.pop());
	var newString= "";
	for(var k = 0;k<typedArr.length;k++){
		newString+=typedArr[k]+" ";
	};
    $('#typed').text(newString);
}


function shiftTypedRight(){
	typedArr.push($("#currentWord").text());
	var newString= "";
	for(var k = 0;k<typedArr.length;k++){
		newString+=typedArr[k]+" ";
	};
    $('#typed').text(newString);
}
function shiftNotTypedRight(){
	$("#currentWord").text(notTypedArr.shift());
	var newString= " ";
	for(var k = 0;k<notTypedArr.length;k++){
		newString+=notTypedArr[k]+" ";
	};
    $('#notTyped').text(newString);
}

function compareStrings(){
	var correctWords = 0;
	var missedWords = 0;
	var normalString = typingString.split(" ");
	var inputStringDone = $("#input").val().split(" ");
	var charactersTotal ="";
	for(var j = 0;j<inputStringDone.length;j++){
		if(inputStringDone[j] == normalString[j]){
			correctWords+=1;
		}else{
			missedWords+=1;
		}
		charactersTotal += inputStringDone[j];
	}
	if(charactersTotal.length<=0){
		return [0,0,0,0];
	}
	return [correctWords,missedWords,charactersTotal,inputStringDone.length];
}



function updateWPM(seconds){
	var res = compareStrings();
	var mins = 1;
	var wps = res[0]/seconds;
	var wpm = wps * 60;
	var inac = res[1];
	var missedPercent = res[1]/(res[0] + res[1]);
	if(res[0]==0){
		wpm=0;
		accuracy=0;
	}
	if(res[1]==0){
		inac=0;
		missedPercent=0;
	}

	if(seconds == 60){
		stopped = true;
		$('#input').prop('disabled',true);

	}

	$("#wpmCounter").text("" +wpm);
}
			function base64_tofield() {
				$('#formfield').val($.scriptcam.getFrameAsBase64());
			};
			function base64_toimage() {
				$('#image').attr("src","data:image/png;base64,"+$.scriptcam.getFrameAsBase64());
			};
			function base64_tofield_and_image(b64) {
				$('#formfield').val(b64);
				$('#image').attr("src","data:image/png;base64,"+b64);
			};
			function changeCamera() {
				$.scriptcam.changeCamera($('#cameraNames').val());
			}
			function onError(errorId,errorMsg) {
				$( "#btn1" ).attr( "disabled", true );
				$( "#btn2" ).attr( "disabled", true );
				alert(errorMsg);
			}			
			function onWebcamReady(cameraNames,camera,microphoneNames,microphone,volume) {
				$.each(cameraNames, function(index, text) {
					$('#cameraNames').append( $('<option></option>').val(index).html(text) )
				}); 
				$('#cameraNames').val(camera);
			}

		});
