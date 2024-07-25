var userChoice = localStorage.getItem('userChoice');
var userNumber = 50;
const button = document.getElementById("myButton");
var randomAll = 100
var shothik = 0
var proigral = 0
var choice = document.getElementById('choice').value;
document.getElementById('choice').value = 0;
const heading = document.getElementById('myHeading');
if (userChoice === choice) {
    userNumber *= 2;
}
const buttonR = document.getElementById('returnButton');

buttonR.addEventListener('click', function() {
    window.location.href = 'index.html';
});


function calculateResult() {
    choice = document.getElementById('choice').value;
    var currentValue = parseInt(document.getElementById('number').value);
    var currentMaxValue = parseInt(document.getElementById('number').getAttribute('max'));

    var randomChoice = Math.random() < 0.34 ? 'D' : (Math.random() < 0.5 ? 'W' : 'F');

    var randomNumber = (Math.floor(Math.random() * randomAll) + 1);
    shothik = shothik + 1
    if (shothik === 3) {
        randomNumber = randomAll
    }
    randomAll = randomAll - randomNumber
    if (randomChoice === 'D') {
        randomNumber = randomNumber * 2;
        if (userChoice === 'W') {
            randomNumber = Math.floor(randomNumber / 2);
        } else if (userChoice === 'F') {
            randomNumber = randomNumber * 2;
        }
    } else if (randomChoice === 'W') {
        if (userChoice === 'F') {
            randomNumber = Math.floor(randomNumber / 2);
        } else if (userChoice === 'D') {
            randomNumber = randomNumber * 2;
        }
    } else if (randomChoice === 'F') {
        if (userChoice === 'D') {
            randomNumber = Math.floor(randomNumber / 2);
        } else if (userChoice === 'W') {
            randomNumber = randomNumber * 2;
        }
    }
    document.getElementById('randomChoice').textContent = randomChoice;
    document.getElementById('randomNumber').textContent = randomNumber;
    
    var resultDiv = document.getElementById('result');
/*     resultDiv.textContent = `Результат: ${userNumber >= randomNumber ? 'Вы выиграли!' : 'Вы проиграли!'}`; */

    if (userNumber < randomNumber && proigral === 0) {
        document.getElementsByClassName('serza-1')[0].style.filter = "grayscale(100%)";
        proigral = proigral + 1;
    } else if (userNumber < randomNumber && proigral === 1) {
        document.getElementsByClassName('serza-2')[0].style.filter = "grayscale(100%)";
        proigral = proigral + 1;
    } else if (userNumber < randomNumber && proigral === 2) {
        document.getElementsByClassName('serza-3')[0].style.filter = "grayscale(100%)";
        proigral = proigral + 1;
        const timerId = setTimeout(() => {
            document.getElementsByClassName('konez')[0].style.display = "none";
            heading.innerText = 'Your kingdom was captured and you were killed!';
            document.getElementsByClassName('itog-stroka')[0].style.display = "block";
            document.getElementsByClassName('body')[0].style.backgroundImage = "url(./img/result3.jpeg)";
            document.getElementsByClassName('body')[0].style.backgroundSize = "contain";
          }, 3000)
    }
    if (shothik === 3) {
        if (proigral === 0) {
            const timerId = setTimeout(() => {
                document.getElementsByClassName('konez')[0].style.display = "none";
                heading.innerText = 'You coped with the uprising!';
                document.getElementsByClassName('itog-stroka')[0].style.display = "block";
                document.getElementsByClassName('body')[0].style.backgroundImage = "url(./img/result0.jpg)";
                document.getElementsByClassName('body')[0].style.backgroundSize = "contain";
            }, 3000)
        } else if (proigral === 1) {
            const timerId = setTimeout(() => {
                document.getElementsByClassName('konez')[0].style.display = "none";
                heading.innerText = 'You won the war but your advisor died!';
                document.getElementsByClassName('itog-stroka')[0].style.display = "block";
                document.getElementsByClassName('body')[0].style.backgroundImage = "url(./img/result1.jpg)";
                document.getElementsByClassName('body')[0].style.backgroundSize = "contain";
            }, 3000)
        } else if (proigral === 2) {
            const timerId = setTimeout(() => {
                document.getElementsByClassName('konez')[0].style.display = "none";
                heading.innerText = 'You went to jail!';
                document.getElementsByClassName('itog-stroka')[0].style.display = "block";
                document.getElementsByClassName('body')[0].style.backgroundImage = "url(./img/result2.jpeg)";
                document.getElementsByClassName('body')[0].style.backgroundSize = "contain";
            }, 3000)
        }
    }
    console.log(proigral)
    var newMaxValue = currentMaxValue - currentValue;

    document.getElementById('number').setAttribute('max', newMaxValue);
    document.getElementById('userChoice').textContent = choice;
    document.getElementById('number').value = 0;
    document.getElementById('numberValue').textContent = 0;
    button.style.display = "none";
}

document.getElementById('number').addEventListener('input', function() {
    document.getElementById('numberValue').textContent = this.value;
    userNumber = parseInt(this.value);
    document.getElementById('userNumber').textContent = userNumber;
    if (this.value > 0){
        button.style.display = "inline";
    }
});

document.getElementById('choice').addEventListener('change', function() {
    var choice = this.value;
    if (choice === userChoice) {
        userNumber *= 2;
    } else {
        userNumber = parseInt(document.getElementById('number').value);
    }
    document.getElementById('userNumber').textContent = userNumber;
    document.getElementById('userChoice').textContent = choice;
});

const radioPanel = document.getElementById('radioPanel');
const toggleButton = document.getElementById('toggleButton');
const playImage = document.getElementById('playImage');
const music = document.getElementById('music');
const moveImage = document.getElementById('moveImage');
const buttonQ = document.getElementById('q');
const buttonP = document.getElementById('p');

toggleButton.addEventListener('click', () => {
    togglePanel();
});

function togglePanel() {
    if (radioPanel.classList.contains('visible')) {
        radioPanel.classList.remove('visible');
        toggleButton.innerText = 'Radio';
    } else {
        radioPanel.classList.add('visible');
        toggleButton.innerText = 'Radio';
    }
}

playImage.addEventListener('click', () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
    toggleMoveImage();
});

let isMovedUp = false;
function toggleMoveImage() {
    if (isMovedUp) {
        moveImage.style.top = '0';
    } else {
        moveImage.style.top = '-100px';
    }
    isMovedUp = !isMovedUp;
}

let currentTrack = 0;
const tracks = ['/img/music0.mp3', '/img/music1.mp3', '/img/music2.mp3', '/img/music3.mp3', '/img/music4.mp3'];

function getNextTrackIndex(currentIndex, direction) {
    let nextIndex = currentIndex;

    do {
        if (direction === 'left') {
            nextIndex = (nextIndex + 1) % tracks.length;
        } else if (direction === 'right') {
            nextIndex = (nextIndex - 1 + tracks.length) % tracks.length;
        }
    } while (nextIndex === 4);

    return nextIndex;
}

function switchMusic(direction) {
    if (moveImage.style.top === '-100px') {
        currentTrack = getNextTrackIndex(currentTrack, direction);
        music.src = tracks[currentTrack];
        music.play();
    }
}

buttonQ.addEventListener('click', () => {
    switchMusic('left');
});

buttonP.addEventListener('click', () => {
    switchMusic('right');
});

music.addEventListener('ended', () => {
    switchMusic('right');
});

const container = document.getElementById('container');
const draggable = document.getElementById('draggable');
const positions = [0, 24, 55.6, 83.4, 111.2, 139, 166.8];
let currentPositionIndex = 0;
let isDragging = false;

draggable.onmousedown = function(event) {
    isDragging = true;
    document.onmousemove = function(event) {
        if (isDragging) {
            const containerRect = container.getBoundingClientRect();
            let newLeft = event.clientX - containerRect.left - draggable.offsetWidth / 2;

            let closestPosition = positions[0];
            let closestDistance = Math.abs(newLeft - positions[0]);
            for (let pos of positions) {
                let distance = Math.abs(newLeft - pos);
                if (distance < closestDistance) {
                    closestPosition = pos;
                    closestDistance = distance;
                }
            }

            draggable.style.left = closestPosition + 'px';
        }
    };

    document.onmouseup = function() {
        isDragging = false;
        document.onmousemove = null;
        document.onmouseup = null;
    };

    return false;
};

draggable.ondragstart = function() {
    return false;
};


function updateTrack() {
    let trackIndex;
    if (moveImage.style.top === '-100px') {
        if (currentPositionIndex % 2 === 0) {
            trackIndex = 4;
        } else {
            trackIndex = Math.floor(currentPositionIndex / 2);
        }
        music.src = tracks[trackIndex];
        music.play();
    }
}

draggable.onmousedown = function(event) {
    isDragging = true;
    document.onmousemove = function(event) {
        if (isDragging) {
            const containerRect = container.getBoundingClientRect();
            let newLeft = event.clientX - containerRect.left - draggable.offsetWidth / 2;

            let closestPosition = positions[0];
            let closestDistance = Math.abs(newLeft - positions[0]);
            for (let pos of positions) {
                let distance = Math.abs(newLeft - pos);
                if (distance < closestDistance) {
                    closestPosition = pos;
                    closestDistance = distance;
                }
            }

            draggable.style.left = closestPosition + 'px';
        }
    };

    document.onmouseup = function() {
        isDragging = false;
        document.onmousemove = null;
        document.onmouseup = null;
        currentPositionIndex = positions.indexOf(parseFloat(draggable.style.left));
        updateTrack();
    };

    return false;
};