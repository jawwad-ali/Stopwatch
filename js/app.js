var milsec = 0
var sec = 0
var min = 0
var interval;

function timer(){
    milsec++
    document.getElementById("milsec").innerHTML = milsec
    document.getElementById("sec").innerHTML = sec
    document.getElementById("min").innerHTML = min

    if(milsec === 100){
        milsec = 0
        sec++
    }
    else if(sec === 60){
        sec = 0
        min++
    }


}   
function Start(){
    interval = setInterval(timer , 10)
    document.getElementById("pause_btn").disabled = false;
    document.getElementById("strt_btn").disabled = true;
    document.getElementById("pause_btn").innerHTML = "Pause";

}
function Pause(){
    clearInterval(interval)
    document.getElementById("strt_btn").disabled = false;
    document.getElementById("pause_btn").disabled = true;

}

function Reset(){
    milsec = 0
    sec = 0
    min = 0
    document.getElementById("milsec").innerHTML = milsec
    document.getElementById("sec").innerHTML = sec
    document.getElementById("min").innerHTML = min
    
    Pause()
    document.getElementById("pause_btn").innerHTML = "Pause";
    document.getElementById("strt_btn").disabled = false;
    document.getElementById("pause_btn").disabled = true;

}
