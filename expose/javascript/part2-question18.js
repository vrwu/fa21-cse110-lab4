function printTimeEverySec() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time)
}

// Delay is 1000 milliseconds which is 1 second
setInterval(printTimeEverySec, 1000)