const numeros = [1, 2, 3, 4, 5];

numeros[0] = 100;
numeros.push(6);
numeros.concat(7, 8, 9);

console.log(numeros.join(' - '));
console.log(numeros);