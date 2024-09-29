var timer = 60;
var score = 0;
var hitRn =0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}



function getNewHit(){
     hitRn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitRn;

}


function makeBubble(){
    var clutter = "";

for(var i = 0; i<168;i++){
  var rn =  Math.floor(Math.random()*10);

   clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter


}

function runTimer(){
    // Stop the timer when it reaches 0
    var timeInt = setInterval(function (){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;

        }else
        {clearInterval(timeInt)
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }
       
    },1000);
}


let click = document.querySelector("#pbtm")
click.addEventListener("click", function(dets) {
    var clickNum = Number(dets.target.textContent);
    if (clickNum === hitRn) {
        increaseScore();
        makeBubble();
        getNewHit();
     }
});





getNewHit(); 
runTimer()
makeBubble();


