// Print "After 4 second" after 4 seconds
// Print "After 8 second" after 8 seconds

const printLog = (val) => {
    setTimeout(() => {
        console.log("After 4 second")
        setTimeout(() => {
            console.log("After 8 Second")
        }, 4 * 1000)
    }, 4 * 1000)
}

printLog()