let rn;
let timer = 60;
let score = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitCount").textContent = rn;
}

function makeBubble() {
    let clutter = "";

    for (let i = 1; i <= 117; i++) {

        let randomNo = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble"> ${randomNo} </div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    let timeInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else {
            clearInterval(timeInterval);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}

document.querySelector("#pbtm").addEventListener("click",function(detail){
    let clicked = Number(detail.target.textContent);
    if(clicked == rn){
        increaseScore();
        getNewHit();
        makeBubble();
    }
})

document.querySelector("button").addEventListener("click",function(detail){
    timer = 60;
    score = 0;
    document.querySelector("#timerVal").textContent = timer;
    document.querySelector("#scoreVal").textContent = score;
    getNewHit();
    makeBubble();
    runTimer();
})

makeBubble();
getNewHit();
runTimer();