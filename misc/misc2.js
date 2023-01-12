const myLibrary = [];

function clearBooks() {
  const parent = document.querySelectorAll('.grid-item');
  parent.forEach((child) => { child.remove(); });
}

function updateRead(book) {
  if (!book.read) {
    book.read = true;
  } else {
    book.read = false;
  }
  showBooks();
}

function showBooks() {
  clearBooks();
  const e = document.querySelector('.grid-container');
  if (myLibrary) {
    myLibrary.forEach((book) => {
      const br = document.createElement('br');

      const cell = document.createElement('div');
      cell.className = 'grid-item';
      cell.innerText = book.info();
      cell.appendChild(br);

      const cbox = document.createElement('input');
      cbox.type = 'checkbox';
      cbox.id = `cbox${book.title}`;
      cbox.name = `cbox${book.title}`;
      cbox.onclick = function () {
        updateRead(book);
      };
      if (book.read) {
        cbox.checked = true;
      }

      const label = document.createElement('label');
      if (book.read) {
        label.innerHTML = 'Already read';
      } else {
        label.innerHTML = 'Check if read';
      }

      const delBtn = document.createElement('button');
      delBtn.innerHTML = 'Delete Book';
      delBtn.className = 'delBtn';
      delBtn.id = book.title;
      delBtn.onclick = function () {
        removeBook(book.title);
      };

      cell.appendChild(br);
      cell.appendChild(label);
      cell.appendChild(cbox);
      cell.appendChild(br);
      cell.appendChild(delBtn);
      e.appendChild(cell);
    });
  }
}

function readCheck(check) {
  if (check) {
    return 'has already been read';
  }
  return 'not yet read';
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    // console.log(`${title} by ${author}, ${pages} pages, ${readCheck(read)}`);
    return (`${title} by ${author}, ${pages} pages, ${readCheck(read)}\n`);
  };
}

function openForm() {
  document.getElementById('form1').style.display = 'block';
}

function removeBook(bookTitle) {
  // const delTitle = document.getElementsByClassName('grid-item');
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].title === bookTitle) {
      myLibrary.splice(i, 1);
    }
  }
  showBooks();
}

function clearInput() {
  document.getElementById('author').value = '';
  document.getElementById('title').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('isRead').checked = false;
}

function subClick(e) {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.getElementById('isRead').checked;

  const newBook = new Book(author, title, pages, isRead);

  myLibrary.push(newBook);

  showBooks();

  clearInput();

  e.preventDefault();
}

const subButton = document.querySelector('#submit');
subButton.addEventListener('click', subClick);
