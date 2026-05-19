const container = document.getElementById('container');
const cols = document.querySelectorAll('.col');
const button = document.getElementById('select-size');

let gridSize = 16;

function setRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    container.replaceChildren();

    for (let i = 1; i <= size; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.className = 'row';

        for (let j = 1; j <= size; j++) {
            let colDiv = document.createElement('div');
            colDiv.className = 'col';

            rowDiv.appendChild(colDiv);
        }
        container.appendChild(rowDiv);
    }
}

function getUserSize(message, def) {
    let userSize = window.prompt(message, def);

    if (userSize > 100) {
        return getUserSize('ERROR: The maximum size is 100.\nChoose the size of the grid (max. 100)', '16');
    }
    else if (userSize == null) {
        return 16;
    }
    return userSize;
}

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('col')) {
        let currentOpacity = Number(e.target.style.opacity) || 0;
        if (currentOpacity < 1) {
            e.target.style.opacity = currentOpacity + 0.1;
        }
        e.target.style.backgroundColor = setRandomColor();
    }
}, true);

button.addEventListener('click', () => {
    createGrid(getUserSize('Choose the size of the grid (max. 100)', '16'));
})

createGrid(16);