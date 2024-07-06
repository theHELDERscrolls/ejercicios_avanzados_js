/* Crea una función llamada swap que reciba un array y dos parámetros que sean
índices del array.
La función deberá intercambiar la posición de los valores de los índices que
hayamos enviado como parámetro. Es decir, intercambiar el lugar de un elemento
por otro dentro del array. Retorna el array resultante. */

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, indexA, indexB) {
  let temporalIdex = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temporalIdex;
  return array;
}
console.log(swap(fantasticFour, 1, 3));
