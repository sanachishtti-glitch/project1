
// project 5
let timerDisplay5 = document.getElementById("timer5");
let btn15=document.querySelector(".btn15");
let btn25=document.querySelector(".btn25");
let path5 = document.querySelector(".path5");


let isAnimation=true;
let second5=0;
// let hours=0;
let timer5;

function Starttime(){
  timer5=setInterval(()=>{
    second5++;
 
    let minutes = (second5 / 60).toFixed(2); 
    timerDisplay5.textContent=`⏱️${minutes}s`;


  },100)
}

function stop(){

  clearInterval(timer5);
}



function funcStopStart(){
  
  if(isAnimation === true){
    path5.style.animationPlayState="paused";
    btn15.innerText="🛑 Stop";
  
stop()
}else{
  path5.style.animationPlayState = "running";
  btn15.innerText="▶️ Start";
  Starttime()
  
}
isAnimation = !isAnimation;
}



// 🔁 Reset Function
function resetTimer() {
  
  clearInterval(timer5);  // timer stop karo
  second5 = 0;            // value reset karo
  timerDisplay5.textContent = "⏱️ 00.00s";  // display update karo
  path5.style.animationPlayState = "paused";  // animation ko pause rakho
  isAnimation = false;      // state reset karo

}



btn15.addEventListener("click",funcStopStart);
path5.addEventListener("click",funcStopStart);
btn25.addEventListener("click",resetTimer)

Starttime();


// project 6

let clock6 = document.getElementById("clock6")

let userTimer6;
let timer6;


clock6.addEventListener("click",()=>{

  clearInterval(timer6);

let input6 = prompt("Write time in hh:mm:ss here");
if(!input6)
return;

let [h,m,s] = input6.split(":").map(Number);
if(isNaN(h)||isNaN(m)||isNaN(s)){
alert("your format is wrong");
return;
}

    userTimer6=new Date();
      userTimer6.setHours(h);
      userTimer6.setMinutes(m);
      userTimer6.setSeconds(s);
      // StartClock6(timer6);
      clearInterval(timer6);
      StartClock6()

})

function StartClock6(){

timer6=setInterval(()=>{


userTimer6.setSeconds(userTimer6.getSeconds()+1)
  
  let hour = userTimer6.getHours();
  let minute = userTimer6.getMinutes();
  let second = userTimer6.getSeconds();

let ampm = hour >= 12 ?"PM":"AM";
// hour=hour%12||12;

let hh = hour.toString().padStart(2,"0");
let mm = minute.toString().padStart(2,"0");
let ss = second.toString().padStart(2,"0")


  clock6.textContent=`${hh}:${mm}:${ss} ${ampm}`


},1000)

}
// hhhhhhhhhhhhhhhhhhhhhhhhhhhh

let timerbtn56 = document.getElementById("timerbtn56");
let stopwatchbtn56 = document.getElementById("stopwatchbtn56");
let stopwatch55=document.getElementById("stopwatch55");
let timerclock66 = document.getElementById("timerclock66"); 
let parentcointainer56=document.getElementById("parentcointainer56")

timerbtn56.addEventListener("click",()=>{
  
  timerclock66.style.display="block";
  stopwatch55.style.display="none";
  timerbtn56.classList.add("bbb");
  stopwatchbtn56.classList.remove("bbb6");
  parentcointainer56.style.background=" #799896ff";

})

stopwatchbtn56.addEventListener("click",()=>{

  stopwatch55.style.display="block";
  timerclock66.style.display="none";


  stopwatchbtn56.classList.add("bbb6");
  timerbtn56.classList.remove("bbb");
   parentcointainer56.style.background=" #a39898";
})


