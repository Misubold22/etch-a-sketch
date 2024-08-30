const gridContainer = document.getElementById('grid-container');

let gridSize = 16;

// Loop through and create the grid items
for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
}

document.getElementById('changeGrid').addEventListener('click', () => {
    while (true) {
        newGrid = prompt("Enter the number of squares per side (less than 100):");
        
        if (newGrid < 100) {
            gridContainer.innerHTML = ''; // Clear the grid container
            break; 
        } else {
            alert("Please enter a number less than 100."); 
        }
    }
  
    for (let i = 0; i < newGrid * newGrid; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
  
    function setGridItemSize() {
        const width = newGrid;
        const height = newGrid;
        
        
        let gridItems = document.querySelectorAll('.grid-item');
        
        // Loop through each element and set its width and height
        gridItems.forEach(elem => {
            elem.style.width = `${500 / width}px`;   
            elem.style.height = `${500 / height}px`; 
        });
    }

   
    setGridItemSize();

    let divs = document.querySelectorAll('.grid-item');
    for (let i = 0; i < divs.length; i++) {
        divs[i].onmousemove = function(e) {
            e.target.style.backgroundColor = document.getElementById("colorPicker").value;
        };
    }
});

let divs = document.querySelectorAll('.grid-item');

for (let i = 0; i < divs.length; i++) {
    divs[i].onmousemove = function(e) {
        e.target.style.backgroundColor = document.getElementById("colorPicker").value;
    };
}

function resetColor() {
    const divs = document.querySelectorAll(".grid-item");
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "white"; // Reset the color of each grid item
    }
}

function eraseColor() {
    let divs = document.querySelectorAll('.grid-item');
    for (let i = 0; i < divs.length; i++) {
        divs[i].onmousemove = function(e) {
            e.target.style.backgroundColor = 'white'; // Erase color by setting it to white
        };
    }
}


