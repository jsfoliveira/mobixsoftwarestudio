let n = 20;
let symbol = '#';
let inputLine = '';

let midOfMatrix = (n + 1) / 2; 
let controlLeft = midOfMatrix-(n/2);
let controlRight = midOfMatrix+(n/2);

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ' ;
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight -= 1;
  controlLeft += 1
};


let num = 20;
let middle = (num + 1) / 2;
let controlLeft2 = middle;
let controlRight2 = middle;
let symbol2 = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft2 || col == controlRight2 || line == middle) {
      outputLine += symbol2;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft2 -= 1;
  controlRight2 += 1;
  console.log(outputLine);
}