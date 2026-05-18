const container = document.getElementById('container');

const size = 100;

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

const cols = document.querySelectorAll('.col');

cols.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'black';
    });
})
