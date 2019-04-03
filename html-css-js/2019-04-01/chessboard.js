// festellen, ob eine Zahl i gerade oder ungerade ist

// i % 2 === 0 // gerade

const board = document.getElementById('board');
const king1 = document.getElementById('king1');

const queen1position = [5, 7];

// königin auf obige position setzen
queen1.style.top = `${queen1position[0] / 8 * 100}%`;
queen1.style.left = `${queen1position[1] / 8 * 100}%`;


for (let i = 0; i < 8; i++) {
  const row = document.createElement('div');
  row.classList.add('row')

  // Felder erstellen
  for (let j = 0; j < 8; j++) {
    const field = document.createElement('div');
    field.classList.add('field');
    if ((i + j) % 2 === 0) {
      field.classList.add('white')
    } else {
      field.classList.add('black')
    }
    field.addEventListener(
      'click',
      () => { moveTo(i, j); }
    );
    row.appendChild(field);
  }

  board.appendChild(row);
}

queen1.addEventListener('click', () => {
  moveTo(queen1position[0], queen1position[1])
})

function moveTo(i, j) {
  king1.style.top = `${i / 8 * 100}%`;
  king1.style.left = `${j / 8 * 100}%`;

  // überprüfen, ob königin geschlagen wurde
  //  - wenn ja, königin entfernen

  if (i === queen1position[0] && j === queen1position[1]) {
    // mit 1s verzögerung die königin entfernen
    setTimeout(
      () => { queen1.remove(); },
      1000
    )
  }
}