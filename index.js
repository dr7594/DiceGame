var rand=Math.floor(Math.random()*6)+1;
var randpath="images/dice"+rand+".png";
document.querySelectorAll("img")[0].setAttribute("src",randpath);

var rand1=Math.floor(Math.random()*6)+1;
var randpath1="images/dice"+rand1+".png";
document.querySelectorAll("img")[1].setAttribute("src",randpath1);

var x;
if (rand==rand1) x="!    DRAW     !"
else if (rand>rand1) x="!    Player 1 Won"
else x="Player 2 Won    !"

document.querySelector("h1").textContent=x;
