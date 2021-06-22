console.log('hola mundo');
console.log('5+3');
console.log(5+3);
let nombre = '"a"';
console.log(nombre);
let eveluador = true;
console.log(eveluador);
let vacio = null;
console.log(vacio);
let numero = 1;
let numero1 = 1.5;
console.log(nuemro+numero1);
constmiObjeto = {
    nombre:'young',
   apellido:'mi',
}
let numero2 = '5';
/*el signo + se utiliza para concanear cadenas*/
//console.long(miObjeto.nombre+miObjeto.apellido, numero2)
numero2 = numero2 + numero;
console.log (numero2);
numero2 = 20;
console.log(numero2);

let arreglo = [];
console.log(arreglo);
arreglo.push(numero2);
console.log(arreglo);
for (let i = 0; i < 6; i++) {
    arreglo.push(prompt('escribe tu autor literario favorito:'));
    console.log(arreglo[i]);
}
console.log(arreglo);

let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.forEach(element =>{
    element = element * 2;
    console.log(element);
});

let num = parseInt(prompt('escribe un numero: '));
num = num *2;
num *= 2;
console.log(num);



