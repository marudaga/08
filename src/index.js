const clockTitle = document.querySelector(".js-clock");

const cmDate= new Date('December 25, 2021 00:00:00');

function Dday(){
    const nowDate= new Date();
    const distance =cmDate.getTime()-nowDate.getTime();
    const days =Math.floor(distance/(1000*60*60*24));
    const hours =Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    const minutes =Math.floor((distance % (1000*60*60))/(1000*60));
    const seconds =Math.floor((distance % (1000*60))/1000);
    clockTitle.innerText = 
    `${String(days)}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`
}
setInterval(Dday, 1000);
Dday();