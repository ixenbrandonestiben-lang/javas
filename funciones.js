// // Ejercicios clase 2
// // 1. Función que determina si un número es positivo, negativo o cero
// // Crear una función que reciba un número y muestre el resultado.
// function positivonegativocero(num){
//     var num= prompt("ingresa un numero.")
//     if (num > 0 ){
//         return "positivo"
     
//     }else if (num < 0 ){
//         return "negativo"
//     }else if(num == 0){
//         return "cero"
//     }else{
//         return "ingrese un valor valido."
//     }
// }

// console.log(positivonegativocero(2))


// // 2. Función que determine si un número es par o impar
// function parimpar(num){
//     var num= prompt("ingresa un numero.")
//     if (num%2 == 0){
//         return "par"
//     }else if (num%2 != 0){
//         return "impar"
//     }else{
//         return "ingresa un numero real."
//     }
// }
// console.log(parimpar(10))
// // 3. Función que determine si una persona es mayor de edad

// function mayorMenor(edad){
//     var edad = Number(prompt("ingresa tu edad"))
//         if(edad > 18){
//             return "usted es mayor de edad"
//         }else if(edad < 18){
//             return"usted es menor de edad"
//         }else{
//             return"ingrese su edad de nuevo"
//         }
//         }
// console.log(mayorMenor(23))

// // 4. Mostrar los números del 1 al 10 con for
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }

// // 5. Mostrar los números del 10 al 1 con while

// let i = 10;

// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// // 6. Función que muestre la tabla de multiplicar de un número
// function tablademultiplicar(num){
//     var num = Number(prompt("ingresa un numero a multiplicar."))
//     for (let i = 1; i <= 10; i++) {
//         console.log(i, '*',num, "=" ,i*num);
//       }
// }

// console.log(tablademultiplicar(5));


// // 7. Sumar los números del 1 al 100 usando un ciclo
// let suma = 0;

// for (let i = 1; i <= 100; i++) {
//   suma += i;
// }

// console.log("la suma de los numeros del 1 al 100 es: ",suma);


// //8. Función que reciba dos números y devuelva el mayor

// function numeroMayor(num1, num2){
//     var num1 = prompt("ingresa un numero.")
//     var num2 = prompt("ingresa otro numero.")
//     if (num1 > num2) {
//         return num1;
//     } else if (num1 < num2) {
//         return num2;
//     } else {
//         return "Ambos números son iguales.";
//     }
// }



// console.log(numeroMayor(5, 10));

// 9. Contar cuántas letras tiene una palabra usando un ciclo
function contarletrasWhile(){

}

contarletrasFor()

// 10. Función que cuente cuántas vocales tiene una palabra
// 11. Función que reciba un número y muestre todos los pares hasta ese número
function contarpares(num){
    var num = prompt("ingrese unn numero")
    
}
// 12. Función que calcule el factorial de un número

// 13. Función que reciba una frase y la imprima carácter por carácter
function frase(frase){
    for (let i = 0; i < frase.length; i++){
        console.log(frase[i]);
    }
}

frase("hola mundo")
// 14. Función que invierta una palabra (ej: "hola" → "aloh")
function palabrainvertida(palabra){
    let invertir = "";
    for (let i = palabra.length -1; i >= 0; i--){
        invertir += palabra[i];
    }
    return invertir;
}
console.log(palabrainvertida(yo));

// 15. Función que determine si una palabra es palíndroma
function palindrimo(palabra){
    let invertir = "";
    for(let i = palabra.length -1; i >= 0; i--){
        invertir += palabra[i];
    }
    if(palabra === invertir){
        return "es polidromo"
    }else{
        return "no es poolidromo"
    }
}

console.log(polidromo("oso"));

// 16. Función que sume solo los números pares del 1 al 50
function sumarpares(){
    let suma  = 0;
    for (let i = 1; i <= 50; i++){
        if(i % 2 == 0){
            suma += i
        }
    }
    return suma;

}

console.log(sumarpares());

// 17. Función que reciba un número y diga si es primo
function esPrimo(numero) {
    if (numero <= 1) {
        return "No es primo";
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return "No es primo";
        }
    }

    return "Es primo";
}


console.log(esPrimo(7));

// 18. Función que muestre un patrón de asteriscos
// *
// **
// ***
// ****
function patronAsteriscos() {
    let resultado = "";

    for (let i = 1; i <= 4; i++) {
        resultado += "*".repeat(i) + "\n";
    }

    console.log(resultado);
}


patronAsteriscos();

// 19. Función que simule un cajero automático
// Recibe un saldo y un retiro, valida si puede retirar o no.

function cajero(saldo, retiro) {
    if (retiro <= saldo) {
        saldo -= retiro;
        return "Retiro exitoso. Saldo restante: " + saldo;
    } else {
        return "Fondos insuficientes";
    }
}


console.log(cajero(1000, 300));



// 20. Función que simule un login
// Recibe usuario y contraseña y valida si coinciden con valores definidos en el programa.
function login(usuario, contraseña) {
    let usuarioCorrecto = "admin";
    let contraseñaCorrecta = "1234";

    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
        return "Acceso concedido";
    } else {
        return "Acceso denegado";
    }
}

console.log(login("admin", "1234"));
