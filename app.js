var dices = [
    '<div></div><div></div><div></div><div></div><div>⚪</div><div></div><div></div><div></div><div></div>',
    '<div>⚪</div><div></div><div></div><div></div><div></div><div>⚪</div><div></div><div></div><div>⚪</div>',
    '<div>⚪</div><div></div><div></div><div></div><div>⚪</div><div></div><div></div><div></div><div>⚪</div>',
    '<div>⚪</div><div></div><div>⚪</div><div></div><div></div><div></div><div>⚪</div><div></div><div>⚪</div>',
    '<div>⚪</div><div></div><div>⚪</div><div></div><div>⚪</div><div></div><div>⚪</div><div></div><div>⚪</div>',
    '<div>⚪</div><div></div><div>⚪</div><div>⚪</div><div></div><div>⚪</div><div>⚪</div><div></div><div>⚪</div>',
];

function randomDice() {
    //return dices[Math.floor(Math.random() * 6)];
    return Math.floor(Math.random() * 6) + 1;
}


var pointRed = 0;
var pointBlue = 0;
var redThrowed;
var blueThrowed;
var infoText;

function throwDice() {
    //redThrower
    redThrowed = randomDice();
    //blueThrower
    blueThrowed = randomDice();

    console.log("red: " + redThrowed.toString() + " , " + "blue: " + blueThrowed.toString());

    if (blueThrowed > redThrowed) {
        pointBlue++
        infoText = '<span style="color: var(--color-dice2);">Blue Won!</span>'
    } else if (redThrowed > blueThrowed) {
        pointRed++
        infoText = '<span style="color: var(--color-dice1);">Red Won!</span>'
    } else {
        infoText = "It's TIE!"
    }

    //print points to UI
    document.querySelector('#pointRed').textContent = pointRed;
    document.querySelector('#pointBlue').textContent = pointBlue;

    //print Dice Scheme to UI
    document.querySelector('.dice-red').innerHTML = dices[redThrowed - 1];
    document.querySelector('.dice-blue').innerHTML = dices[blueThrowed - 1];

    //print InfoText to UI
    document.querySelector('#infotext').innerHTML = infoText;
}



//document.querySelector('.dice-red').innerHTML = dices[randomDice()];
//document.querySelector('.dice-blue').innerHTML = dices[randomDice()];




