let numero = 1;

let numero3 = '8';
numero3 = numero3 + numero;
console.log (numero3);
numero3 = 15;
console.log(numero3);

let arreglo = [];
console.log(arreglo);
arreglo.push(numero3);
console.log(arreglo);
for (let i = 0; i < 6; i++) {
    arreglo.push(prompt('ESCRIBE UNA CANCION QUE ME RECOMIENDES:'));
    console.log(arreglo[i]);
}
console.log(arreglo);

let num = parseInt(prompt('escribe el numero de canciones que crees que me han recomendado: '));
num = num *2;
num *= 2;
console.log(num);