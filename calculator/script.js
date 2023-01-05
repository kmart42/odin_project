function createGrid() {
  const e = document.querySelector('.grid-container');
  const misc = [0, '.', '+', '-', '*', '/'];
  for (let i = 1; i < 10; i++) {
    const cell = document.createElement('div');
    cell.className = 'grid-item';
    cell.innerText = i;
    e.appendChild(cell);
  }

  misc.forEach((item) => {
    const e = document.querySelector('.grid-container');
    const cell = document.createElement('div');
    cell.className = 'grid-item';
    cell.innerText = item;
    e.appendChild(cell);
  });
}

function addResults() {
  const e = document.querySelector('.results-container');
  const res = ['Enter', 'Clear'];
  res.forEach((item) => {
    const e = document.querySelector('.results-container');
    const cell = document.createElement('div');
    cell.className = 'grid-item';
    cell.innerText = item;
    cell.id = item;
    e.appendChild(cell);
  });
}

function evalArgument(arg) {
  if (arg[0] === '+' || arg[0] === '*' || arg[0] === '/') {
    argument = '';
    return '-ERROR-';
  } else {
    let total = 0;
    str = arg.match(/[+\−]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while (str.length) {
      total += parseFloat(str.shift());
      console.log(total);
    };
    return total;
  };
}


let argument = '';
const resultText = document.querySelector('#result');
const buttons = document.querySelectorAll('.grid-container');
const results = document.querySelectorAll('.results-container');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    argument += (e.target.textContent);
    resultText.innerText = argument;
  });
});

results.forEach((result) => {
  result.addEventListener('click', (e) => {
    if (e.target.id === 'Clear') {
      argument = '';
      resultText.innerText = argument;
    } else if (e.target.id === 'Enter') {
      resultText.innerText = evalArgument(argument);
    }
  });
});
