let playerX;
const result = document.querySelector('.results-container');
const resetBtn = document.getElementById('resetBtn');

function createGrid() {
    playerX = 'true';
    const gridContainer = document.querySelector('.grid-container');
    for (let i = 1; i < 10; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-item';
        cell.onclick = playerChoice;
        cell.id = i.toString();
        cell.title = 'true';
        gridContainer?.appendChild(cell);
    }
}

function playerChoice (e) {
    let curr = e.target;
    if (playerX){
        if (curr.title === 'true'){
            curr.title = 'false';
            curr.innerHTML = 'X';
            if (checkGame()){
            result.innerHTML = 'Player O\'s turn';
            playerX = false;
            }
        }
    }
    else {
        if (curr.title === 'true'){
            curr.title = 'false';
            curr.innerHTML = 'O';
            if (checkGame()){
            result.innerHTML = 'Player X\'s turn';
            playerX = true
            }
        }
    }
}

resetBtn?.addEventListener('click', (e) => {
    const gridItems = document.querySelectorAll('.grid-item');
    const gridArray = [...gridItems];
    gridArray.forEach(cell => {
        cell.innerHTML = '';
        cell.title = 'true';
        result.innerHTML = 'Player X\'s turn';
    })
})

function checkGame () {
    let target = playerX ? 'X' : 'O';
    const gridItems = document.querySelectorAll('.grid-item');
    const gridArray = [...gridItems];
    if ((gridArray[0].innerHTML === target && gridArray[1].innerHTML === target && gridArray[2].innerHTML === target) ||
        (gridArray[3].innerHTML === target && gridArray[4].innerHTML === target && gridArray[5].innerHTML === target) ||
        (gridArray[6].innerHTML === target && gridArray[7].innerHTML === target && gridArray[8].innerHTML === target) ||
        (gridArray[0].innerHTML === target && gridArray[4].innerHTML === target && gridArray[8].innerHTML === target) ||
        (gridArray[2].innerHTML === target && gridArray[4].innerHTML === target && gridArray[2].innerHTML === target)) {

            result.innerHTML = `Player ${target} wins!`;
            gridArray.forEach(cell => {
                cell.title = 'false';
            })

        return false;

    } else if (gridArray.every((check) => check.title === 'false')) {
        result.innerHTML = 'Tie! Nobody wins, go home...';
        return false;
    }

    return true;

}