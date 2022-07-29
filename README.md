# Desafio de Lógica: Cálculo da Ampulheta ⌛

### Instruções 🚀

Criar uma ampulheta com código JS, desenhada no console com n >= 20, onde `n` é o input dado ao usuário.
Não deve fazer uso de NENHUMA biblioteca auxiliar de desenhos.

### Tempo de realização 🕝
- Foi usado o softwar https://clockify.me/.
- Demorei 1 hora pra fazer o primeiro triângulo.

### Experiência 🧑‍🔧 
- Achei bastante desafiador o desafio, não consegui fazer as laterais da ampulheta e nem fazer dois triângulos em um único código. Eu consegui fazer em códigos diferentes. O código comentado é o código do triângulo vazio por dentro e de cabeça pra cima.

### Explicação do código finalizado 💻
- midOfMatrix é a variável que determina o meio da pirâmide.
- controlLeft e controlRight vão formar os espaços laterais da pirâmide.
- midOfMatrix  vai ser 10.5, o índice do meio.
- Vão ser feitas dois for pra percorrer as linhas e as colunas.
- Como inicialmente columnIndex > controlLeft && columnIndex < controlRight, então vai retornar inputLine = inputLine + symbol.
- Com o passar do tempo, essa condição já não vai ser mais verdadeira, então vai retonar  inputLine = inputLine + ' ' .
