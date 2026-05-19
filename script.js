const container = document.getElementById('container');
const cols = document.querySelectorAll('.col');
const button = document.getElementById('select-size');

let gridSize = 16;

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

container.addEventListener('mouseenter', (e) => {
    if (e.target.classList.contains('col')) {
        e.target.style.backgroundColor = 'black';
    }
}, true);

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

button.addEventListener('click', () => {
    createGrid(getUserSize('Choose the size of the grid (max. 100)', '16'));
})

createGrid(16);