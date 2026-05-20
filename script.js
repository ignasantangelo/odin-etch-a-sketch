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
  const raw = prompt(message, def);

  if (raw === null) return 16;

  const n = parseInt(raw, 10);

  if (Number.isNaN(n) || n < 1 || n > 100) {
    return getUserSize('Please enter a number 1–100', def);
  }
  
  return n;
}

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('col')) {
        let currentOpacity = Number(e.target.style.opacity) || 0;
        if (currentOpacity < 1) {
            e.target.style.opacity = currentOpacity + 0.1;
        }
        e.target.style.backgroundColor = setRandomColor();
    }
});

button.addEventListener('click', () => {
    createGrid(getUserSize('Choose the size of the grid (max. 100)', '16'));
})

createGrid(16);