const container = document.getElementById('container');

for (let i = 1; i <= 16; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.className = 'row';

    for (let j = 1; j <= 16; j++) {
        let colDiv = document.createElement('div');
        colDiv.className = 'col';

        rowDiv.appendChild(colDiv);
    }
    container.appendChild(rowDiv);
}