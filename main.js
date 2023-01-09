

var random1= Math.floor( Math.random() * 6 ) + 1;
var random2=  "ritul."+random1+".png";
var player1=document.querySelectorAll("img")[0];
player1.setAttribute("src",random2) ;


var random11= Math.floor( Math.random() * 6 ) + 1;
var random22=  "ritul."+random11+".png";
var player2=document.querySelectorAll("img")[1];
player2.setAttribute("src",random22) ;


if(random1>random11){
   
    document.querySelector("h1").innerHTML="🎉 Player 🚩 2 🚩 Win 🎉";  // DUE TO MISTAKE PICTURE OF PLAYER 1 CHNAGES WITH PICTURE OF PLAYER 2
}
else if(random11>random1){
    document.querySelector("h1").innerHTML="🚩 Player 🎉 1 🎉 Win 🚩"; 
}
// else{
//     document.querySelector("h1").innerHTML="DRAW !! 👀";
// }

// if(random11>random1){
//     var n="2nd win";
//     document.querySelector("h1").setAttribute("h1",n);
// }
// else{
//     var n="2nd win";
//     document.querySelector("h1").setAttribute("h1",n);
// }
