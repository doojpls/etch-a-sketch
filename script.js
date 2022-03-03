
const body = document.getElementsByClassName('body-grid');
const container = document.querySelector('.border');
const cells = document.getElementsByClassName('cell');
const rows = document.getElementsByClassName('row');
const resetButton = document.getElementById('reset');
const newGridButton = document.getElementById('new-grid');
const slideRange = document.getElementById('myRange');
const output = document.getElementById('value');
const blueBtn = document.getElementById('blue-color');
const rgbBtn = document.getElementById('random-color');

blueBtn.addEventListener('click', newColor);

rgbBtn.addEventListener('click', cellColorRandom);


output.innerHTML = slideRange.value;

//creates starting dynamic grid  
function createGrid (num) {
    for (i = 0; i < num; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);

        for (j = 0; j < num; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
       }
    }       
}
createGrid(16);

//reset button function to enter new grid size
function newGrid (num) {
    Array.from(rows).forEach(function (row) {
        row.remove();
    })
    num = prompt("please input gird size by number");
    createGrid(num);
    newColor();   
}
//newGridButton.addEventListener('click', newGrid);


//shows value of slider
slideRange.oninput = function () {
    output.innerHTML = this.value;
}

//creates new grid size with slider
function slideGrid (newValue) {
    Array.from(rows).forEach(function (row) {
        row.remove();
    });
    newValue = slideRange.value;
    newValue = this.value;
    createGrid(newValue);
    newColor();  
}
slideRange.addEventListener('input', slideGrid);


//changes color of grid to blue when hovering over a square
function newColor () {
    Array.from(cells).forEach(function (cell) {
        cell.onmouseover = function () {
            cell.style.backgroundColor = '#1b1464';
            //cell.style.border = '1px solid #ff0054';
        }
    });
}
newColor();

//removes color
function ogColor () {
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = '#f2eed1';
        cells[i].style.border = '1px solid #1b1464';
    }
}
ogColor();

//resets grid back to starting point
function reset () {
    for (let i = 0; i < cells.length; i++) {
        resetButton.onclick = function () {
            ogColor();
        }
    }
}
reset();

//generate random color 
function generateRandomColor(){
    let letter = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)]
    }
    return color
}

//mouse over cells for random color
function cellColorRandom () {
    Array.from(cells).forEach(function (cell) {
        cell.onmouseover = function () {
            cell.style.backgroundColor = generateRandomColor()
            //cell.style.border = '1px solid #ff0054';
        }
    });
}
//cellColorRandom();
