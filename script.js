const gridContainer = document.getElementById('grid-container');

let gridSize = 16;

// Loop through and create the grid items
for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
}



let divs = document.querySelectorAll('.grid-item');

for (let i = 0; i < divs.length; i++) {
    divs[i].onmousemove = function(e) {
        e.target.style.backgroundColor = document.getElementById("colorPicker").value;
    };
}




