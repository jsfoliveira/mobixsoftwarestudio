// Tamanho da ampulheta
let n = 20;
// Símbolo do desenho
let symbol = '#';
// Varíavel a ser imprimida no console
let inputLine = '';

// Índice central
let midOfMatrix = ((n + 1) / 2)-1; 

// Topo da ampulheta (triângulo invertido preenchido superior)

// Variáveis de controle esquerda/direita para correr matriz de fora para dentro
let controlLeft = midOfMatrix-(n/2);
let controlRight = midOfMatrix+(n/2);

// Loop das primeiras 10 linhas da matriz
for (let lineIndex = 0; lineIndex < midOfMatrix; lineIndex += 1) {
  // Loop das colunas em cada linha  
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex === 0 || columnIndex === (n-1)) { // Código para plotar o símbolo na primeira e última coluna de cada linha
      inputLine = inputLine + symbol;
    } else { // Código para desenhar o miolo do topo da ampulheta
      if (columnIndex > controlLeft && columnIndex < controlRight) {
        inputLine = inputLine + symbol;
      } else {
        inputLine = inputLine + ' ' ;
    }}
  }
  console.log(inputLine); // Código para plotar linha
  inputLine = ''; // Resetando inputline
  controlRight -= 1; // Decrementando variável de controle da direita para o centro
  controlLeft += 1 // Incrementando variável de controle da esquerda para o centro
};

// Base da ampulheta (triângulo vazado inferior)

// Variáveis de controle esquerda/direita para correr matriz de dentro para fora
controlLeft = midOfMatrix-1;
controlRight = midOfMatrix+1;

// Loop das linhas 11 a 19 da matriz
for (let lineIndex = (n/2); lineIndex < n-1; lineIndex += 1) {
  // Loop das colunas em cada linha  
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex === 0 || columnIndex === (n-1)) { // Código para plotar o símbolo na primeira e última coluna de cada linha
      inputLine = inputLine + symbol;
    } else { // Código para desenhar o miolo da base da ampulheta
      if ((columnIndex === (controlLeft+((n/2)-midOfMatrix))) || (columnIndex === (controlRight-((n/2)-midOfMatrix)))) {
        inputLine = inputLine + symbol;
      } else {
        inputLine = inputLine + ' ' ;
    }}
  }
  console.log(inputLine); // Código para plotar linha
  inputLine = ''; // Resetando inputline
  controlRight += 1; // Incrementando variável de controle do centro para direita
  controlLeft -= 1; // Decrementando variável de controle do centro para esquerda
};

// Código para plotar última linha
for(let columnIndex = 0; columnIndex < n; columnIndex += 1) {
  inputLine += symbol;
}
console.log(inputLine);