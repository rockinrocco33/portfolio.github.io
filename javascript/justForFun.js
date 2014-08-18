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



var testString = "What's up Fast Typer, you have reached the Matt Rocco typing test. " +
 "The purpose of this sophisticated examination is to assess your typing speed" +
 "and accuracy. Are you up to the challenge? Random words (no need to type enter for new lines, just press space) " +
 "everyday chilling restart sell sail sold reflexition bass drop ramnification. It's palindrome time: " +
 "stressed desserts, never odd or even, " + '"' + "Eva, can I see bees in a cave?" + '"' +
 "When you want to succeed as much as you want to breath, that's when you will be successful." +
 "What lies behind us and what lies before us are tiny matters compared to what lies within us. " + 
 "Ain't nobody dope as me, I'm just so fresh and so clean";


$("#notTyped").text(testString);


$('#input').prop('disabled',true);
var hasStarted = false;
var start = 0;
var stringToTestType = "";

var position = 0;


var notTypedArr = testString.split(" ");
var typedArr =[];


$('#startButton').bind('click', function (e) {
	startTest();
	$('#startButton').prop('disabled',true);
});
$('#stopButton').bind('click',function(e){
	getallres();
});

$('#input').bind('keydown', function (e) {
    if (e.keyCode === 8) { //Backspace
    	var inputString = $('#input').val();
    	if(inputString.charAt(inputString.length-1) == " "){
    		prevWord();
    	}
    }else if(e.keyCode ===32){ //Space
    	newWord();
    }
  }
);

function keepcountin(){      
		var s = 120 - start;

		$("#timeRemaining").text(s);
		
		if(s == 0)
		{
		alert("Your time is up.");
		getallres();
		}
else {
		start++;
		setTimeout(function(){
			keepcountin()},1000)
		}
}


function startTest(){
	keepcountin();
    hasStarted = true;
    $('#input').prop('disabled',false);
	shiftNotTypedRight();
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
	var newString= "";
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
	var newString= "";
	for(var k = 0;k<notTypedArr.length;k++){
		newString+=notTypedArr[k]+" ";
	};
    $('#notTyped').text(newString);
}

function compareStrings(){
	var correctWords = 0;
	var missedWords = 0;
	var normalString = testString.split(" ");
	var inputStringDone = $("#input").val().split(" ");
	var correctStrings ="";
	var incorrectStrings ="";
	for(var j = 0;j<inputStringDone.length;j++){
		if(inputStringDone[j] == normalString[j]){
			correctWords+=1;
			correctStrings += correctStrings + inputStringDone[j];
		}else{
			missedWords+=1;
			incorrectStrings += incorrectStrings + incorrectStrings[j];
		}
	}
	return [correctWords,correctStrings,missedWords,incorrectStrings];
}



function getallres(){
	var res = compareStrings();
	var mins = 2;
	var wpm = res[0]/mins;
	var cpm = res[1].length/mins;
	var missedPercent = res[2]/(res[0] + res[2]);
}



});
