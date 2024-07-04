/* 1. Crea una función llamada "findArrayIndex" que reciba como parámetros un
array de textos y un texto y devuevle la posición del array cuando el valor
del array sea igual al valor del texto que enviaste como parámetro. */

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  for (const character of array) {
    if (character === text) {
      return array.indexOf(character);
    }
  }
  return `The character ${text} doesn't exist.`;
}

console.log(findArrayIndex(mainCharacters, "Anakin"));

/* 2. Usando la función anterior benefíciate de poder conocer el índice del
array para crear una función llamada "removeItem" que, pasándole un array y
un texto como parámetros (los mismos parámetros anteriores), llame a la
función anteriormente creada "findArrayIndex" y obtén el índice para
posteriormente usar la función de JS .splice() para eliminar el elemento del
array.
Es decir, tienes que crear una función que elimine elementos del array y
retorne el nuevo array sin elemento, apoyándote en "findArrayIndex".
Finalmente retorna el array. */

function removeItem(array, text) {
  const item = findArrayIndex(array, text);
  array.splice(item, 1);
  return array;
}

console.log(removeItem(mainCharacters, "Leia"));
