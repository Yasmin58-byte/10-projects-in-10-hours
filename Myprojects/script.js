const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl =document.getElementById('seconds').value;

const nextBirthday = "5 Aug 2022";

function countdown (){
    const currentDate = new Date();
    const nextBdDate = new Date(nextBirthday);

    const totSeconds = (nextBdDate-currentDate)/1000;
    const days = Math.floor(totSeconds/3600/24);
    const hours = Math.floor(totSeconds/3600)%24;
    const mins = Math.floor(totSeconds/60)%60;
    const seconds =Math.floor(totSeconds)%60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML =seconds;


}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


countdown();
setInterval(countdown,1000);

