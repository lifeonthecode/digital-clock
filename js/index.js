


// digital clock function create 
const digitalClock = () => {

    const date = new Date();
    // hours 
    let hours = date.getHours();
    
    // minutes 
    let minutes = date.getMinutes();

    // seconds 
    let seconds = date.getSeconds();

    hours = hours === 0 ? 12 : hours;

    let session = 'AM';
    if(hours > 12) {
        hours = hours - 12;

        session = 'PM';
    }


    hours = hours > 9 ? hours : '0'+hours;

    minutes = minutes > 9 ? minutes : '0'+minutes;

    seconds = seconds > 9 ? seconds : '0'+seconds;

    const time = hours +" : "+ minutes +" : "+ seconds +" "+session;

    document.querySelector('.digital_clock').innerHTML = time;

    console.log(time);

    setTimeout(digitalClock, 1000);
}

digitalClock();