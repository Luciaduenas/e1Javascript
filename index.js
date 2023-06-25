// Deberán realizar los siguientes ejercicios:

// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.


function par(n) {
if (n%2 == 0) {
    console.log ("El número "+ n + " es par");  
} else {
    console.log ("El número "+ n + " es impar"); 
}
}

par(36);
par(7);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function comparativa (n1,n2){
    if (n1<n2) {
        console.log (n2 + " es mayor que " + n1); 
    } else if (n1>n2) {
        console.log (n1 + " es mayor que " + n2);
    } else {
        console.log (n1 + " y " + n2 + " son iguales")
    }
}

comparativa(1,2);
comparativa(3,4);
comparativa(2,2);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiplo5 (n3){
    if (n3%5 == 0) {
        console.log ("El número " + n3 + " es múltiplo de 5.")       
    } else {
        console.log ("El número " + n3 + " NO es múltiplo de 5.")  
    }
}

multiplo5 (15);
multiplo5 (16);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

let i = 0
function contar (n){
    while (i <= n) {
        console.log (i) ;
        i++;
    }
}

contar (3)

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

let index = 1
function palabraX (a,n) {
    while (index <= n) {
        console.log (a) ;
        index++;
    }
}

palabraX ("Hola", 2);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

var dias=["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"]

function mostrarArray (parametro){
for (let index = 0; index < parametro.length; index++) {
        console.log(parametro[index]);
    }}

mostrarArray (dias)

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

var decena = [1,2,3,4,5,6,7,8,9,10];
var decena2 = ["primero", "Segundo", "tercero", "cuarto", "quinto", "sexto"]

function mostrarNumero (parametro){
    for (let index = 0; index < parametro.length; index++) {
        if (index == 4) {
            continue;
        }
            console.log(parametro[index]);
    }
}    

mostrarNumero (decena);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

var numeros = [1,2,3,4];

function multiplicar (miArray,n){
    for (let index = 0; index < miArray.length; index++)
    console.log ("El número " + miArray[index] + " multiplicado por " + n + " es igual a " + miArray[index] *n)
}

multiplicar (numeros,3)
