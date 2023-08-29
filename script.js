let turn = "✓";

function changeTurn() {
    return turn === "✓" ? "X": "✓";
}

function checkResult() {
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach( e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && 
        (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won";
            document.querySelector('.image').classList.add('active');
            document.getElementById('reset').classList.add('active');
            document.querySelector('.gameContainer').classList.add('active');
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () =>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
           turn = changeTurn();
            checkResult();
            document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
        }
    })
})


const bgColor = document.querySelector('.body');
const colors = [
    "linear-gradient(270deg, #04648a,#0d3f68)",
    "linear-gradient(270deg, #0d3f68, #04648a)",
    "linear-gradient(280deg, #04648a,#0d3f68)",
    "linear-gradient(280deg, #0d3f68, #04648a)",
];
let currentIndex = 0 ;

function changeBackground() {
    currentIndex = ( currentIndex + 1 ) % colors.length;
    const color = colors[currentIndex];

    bgColor.style.opacity = 1 ;

    setTimeout(() => {
        bgColor.style.background = `${color}`;
        setTimeout(() => {
            bgColor.style.opacity = 1 ;
        }, 10);
    }, 500);
}

setInterval(changeBackground,2000);

changeBackground();


const reset = document.getElementById('reset');

reset.addEventListener('click', () => {
    location.reload();
})

