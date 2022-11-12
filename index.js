const secondHand = document.querySelector(".second")
const minuteHand = document.querySelector(".minute")
const hourHand = document.querySelector(".hour")

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds()
    const secondDegree = ((seconds/60) * 360) + 90
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    console.log(seconds)
    

    const minute = now.getMinutes()
    const minuteDegree = ((minute/60) * 360) + 90
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`
    

    const hour = now.getHours()
    const hourDegree = ((hour/12) * 360) + 90
    hourHand.style.transform = `rotate(${hourDegree}deg)`

}



setInterval(setDate, 1000)
// console.log(setData)