var cases = document.querySelectorAll('div[id^="case"]');

var srcCrossAndRound = ['./assets/img/cross.svg', './assets/img/round.svg'];
var indexCrossAndRound = 0;

var clickCounter = 0;

const WINCOMBINATIONS = [
    { 'horizontal' : [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] },
    { 'vertical' : [ [1, 4, 7], [2, 5, 8], [3, 6, 9] ] },
    { 'diagonal' : [ [1, 5, 9], [7, 5, 3] ] }
];

const MORPIONCASES = 9;