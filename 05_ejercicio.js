/* Crea una función llamada rollDice() que reciba como parámetro el número de
caras que queramos que tenga el dado que deberá simular el código dentro de la
función.
Que la función use el parámetro para simular una tirada de dado y retornar el
resultado.
Para sacar números aleatorias busca información sobre Math.random(). */

function rollDice(faces) {
  // .floor rodondea hacia abajo y corregimos con +1
  return Math.floor(Math.random() * faces) + 1;
}

console.log(rollDice(6));
