let minutes = 0
let hours = 0

/* function changeMinutes(minutes) {
    minutes < 60 ? minutes++ : minutes = 0
    return minutes
}

function changeMinutesToHour(minutes) {
    if (minutes == 60){
        hours += 1
        minutes = 0
    }
    return hours
    
    }

    function till24(hours){
        if (hours > 24){
            hours = 0
            minutes = 0
        }
        console.log(hours);
        return hours
    } 

    */
    debugger
   let changingMinutes = setInterval(() => {
        minutes++
        if (minutes > 60){
            minutes = 0
        } else if (minutes === 60){
            hours += 1
        } else if (hours >= 24){
            hours = 0

        }
        
        console.log(minutes);
        console.log(hours);
    }, 1000);