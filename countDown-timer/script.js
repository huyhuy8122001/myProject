const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins') 
const secondsEl = document.getElementById('seconds')


const newYears = '1 Jan 2021'
function countdown() {
    const newYearsDate = new Date(newYears); // khởi tạo một mốc thời gian ngày 1/1/2021
    const currentDate = new Date(); // khởi tạo ngày giờ hiện tại

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = 365 + (Math.floor(totalSeconds / 3600 / 24));
    const hours = (87600 + Math.floor(totalSeconds / 3600)) % 24;
    //const minutes = (525600 + Math.floor(totalSeconds % 3600 / 60)) % 24;
    const mins = (525600 + Math.floor(totalSeconds / 60)) %60;
    const seconds = (31536000 + Math.floor(totalSeconds))%60

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    //console.log(days, hours, mins, seconds)
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

// Lần gọi hàm đầu tiên
countdown();

setInterval(countdown, 1000);
//clearInterval(countdown, 1000);

