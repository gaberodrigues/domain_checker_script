//Checks a website if a domain is available every 5 minutes

var link = document.getElementById('Submit');
var i = 0, y=0, howManyTimes = 1000000;
var audio = new Audio('https://www.soundjay.com/phone/telephone-ring-01a.mp3');

function f() {
    i++;
    if( i < howManyTimes ){
    link.click();
        setTimeout( f, 300000 );
    }
}
f();
function g() {
    y++;
    if( y < howManyTimes ){
var results= document.getElementById("results");
var substr = results.innerHTML;   
if(substr.includes("Congratulations")){
	audio.play();
        alert("Available");
    }
        setTimeout( g, 5000 );
    }
}
g();
