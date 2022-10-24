let div = document.getElementById('move');

const timeOnLoad = time();

function time() {
    const d = new Date();
    let mins = d.getMinutes();
    return mins
}

function moveButton(oldP, newID) {
    let newP = document.getElementById(newID);

    while (oldP.childNodes.length > 0) {
        newP.appendChild(oldP.childNodes[0]);
    }
}

function randomGrid() {
    return Math.floor(Math.random() * 15) + 1
}

// When the mouse gets near the button, 
// move the children from its current grid square to a new random square
youShallNotPass.addEventListener('mouseenter', (e) => {
    let oldP = div.parentElement;

    let gridNum = oldP.id;
    while (gridNum == oldP.id) {
        gridNum = randomGrid()
    }

    moveButton(oldP, gridNum);
});

// If the button is clicked, display how long it took (time since page load)
function Clicked() {
    const now = time()
    let diff = now - timeOnLoad;
    if (diff < 0) {
        diff = 60 + timeOnLoad;
    }

    if (diff == 0) {
        alert("Ohh you're speedy. Impressive.")
    }
    else if (diff == 1) {
        alert("🤔 Have you been practicing? It only took you one minute.")
    }
    else {
        alert("Congrats! You have spent " + diff + " (useless 😉) minutes trying to click this button. 🎉")
    }
}
