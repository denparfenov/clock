const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    var seconds = now.getSeconds();
    var secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    var mins = now.getMinutes();
    var minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    var hours = now.getHours();
    var hoursDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

    if(secondDegrees === 90) {
        secondHand.style.transition = `none`;
    } else {
        secondHand.style.transition = `all 0.05s`;
        secondHand.style.transitionTimingFunction = `cubic-bezier(0.1, 2.7, 0.58, 1)`;
    }
}

setInterval(setDate, 1000);