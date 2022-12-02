function clock(){
    let hours = document.querySelector("#hours");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");
    let period = document.querySelector("#period");
    let dates = document.querySelector("#dates");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = h > 12 ? "PM" : "AM";

    if(h > 12){
        h = h-12;
    }
    h = (h < 10) ? "0"+h:h;
    m = (m < 10) ? "0"+m:m;
    s = (s < 10) ? "0"+s:s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    period.innerHTML = ampm;

    let d = new Date();
    
    dates.innerHTML = d.toDateString();
};
setInterval(clock, 1000);
