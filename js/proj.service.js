console.log('hello world');

const gProjs = [
  _createProject(
    'dice-game',
    'Dice Game',
    'roll the dice ',
    '2 players dice game',
    'https://nadavinbar8.github.io/Dice-Game/',
    1630324800000,
    ['vanilaJS', 'strings']
  ),
  _createProject(
    'guess-game',
    'Guess Game',
    'guess the game',
    'a number between 1-20 is generated and you need to guess it',
    'https://nadavinbar8.github.io/Guess-Game/',
    1629288000000,
    ['vanilaJS', 'strings']
  ),
  _createProject(
    'minesweeper',
    'MineSweeper',
    'Nadav Minesweeper',
    'a redo of the old microsoft minesweeper game',
    'https://nadavinbar8.github.io/MineSweeper/',
    1637841600000,
    ['vanilaJS', 'strings', 'matrix']
  ),
];

var gDate = new Date(2021, 08, 30, 10, 30, 30, 0);

function _createProject(id, name, title, desc, url, publish, labels) {
  return {
    id: id,
    name: name,
    title: title,
    desc: desc,
    url: url,
    publish: publish,
    labels: labels,
  };
}

function getProjs() {
  return gProjs;
}
