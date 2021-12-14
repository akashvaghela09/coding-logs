// Print "Hello World" every second
// after 5 times print "Done" and exit.

const printLog = () => {
    let count = 0
    const timeId = setInterval(() => {
        console.log("Hello World")
        count++
        if(count === 5){
            console.log("Done");
            clearInterval(timeId)
        }
    }, 1 * 1000);
        
}

printLog()