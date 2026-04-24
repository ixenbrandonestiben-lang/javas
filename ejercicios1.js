// datos personales.
let nombre = "Estiben"
let edad = 17
let ciudad = "guatemala"

console.log( "hola, mi nombre es ",nombre, "tengo ", edad, "años y vivo en ", ciudad)
separador()
//suma de dos numeros.
let num1 = 10
let num2 = 10

console.log(num1 + num2)
separador()
// resta, multiplicacion y divison
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
separador()
//promedio de tres notas

let nota1 = 100
let nota2 = 50
let nota3 = 10

console.log((nota1 + nota2 + nota3)/3 .toFixed(2))
separador()
//conversion de edad a meses
let meses = 12
console.log(edad * 12)
separador()
//horas, minutos, segundos
let hora = 4
console.log("cuatro horas a minutos es igual a: ", hora * 60, "y ", (hora * 60) * 60, "segundos")
separador()
//iva 19%
let producto =(console.log("El uniforme de educacion fisica tiene un presio total de Q 100"))
let uniforme = 100
let iva = 0.19
let sinIva = 100 * 0.19 
let total = uniforme-sinIva
console.log("ell uniforme sin el valor del iva tendria un valor total de: ", total)
separador()
//area de un rectangulo
let base = 10
let altura = 20
let area = base * altura

console.log("El area de el rectangulo es igual a: ", area)
separador()
//perimetro de un rectangulo
let perimetro = 2 * (base + altura)
console.log("El perímetro del rectángulo es igual a: ", perimetro)
separador()
//concatenacion de strings
let parte1 = "bienveniodo al mundo de la programacion, "
let parte2 = "aqui tendras el espacio de llevar tus habilidades a otro nivel"
console.log(parte1+parte2)
separador()
//longitud de una palabra
let palabra= "roncorrorinco"
console.log(palabra.length)
separador()
//primera y ultima letra
console.log(palabra [0])
console.log(palabra[palabra.length-1])
separador()
//mayuscula a minuscula
console.log(palabra.toUpperCase())
console.log(palabra.toLowerCase())
separador()
// extraer una palabra
let frase = "estoy aprendiendo a programar con javascript"

let parte = frase.slice(0, 5);
console.log(parte)

//reeseparador()mplazar una palabra por una frase
let texto = "yo"

let part = texto.replace("yo", "soy una persona muy importante!!!")
console.log(part)
separador()
//16 operadores de incremento
let op = 10
op++;
console.log(op);

function separador(){
    console.log("-----------------------------------------------------------------------------------------")
}
separador()
//17. operadores compuestos
console.log("********suma*********")
let num = 5;
num += 5;
console.log(num)

console.log("********resta*********")
let a = 15
a-=2
console.log(a)

console.log("********multiplicado*********")
let c = 20
c *= 5
console.log(c)

console.log("********division*********")
let d = 20
d /= 5
console.log(d)
separador()
//concatenar texto y numero
let text = "soy brandon estiben ixen con el numero de cui: "
let cui = 1230456387912

console.log(text+cui)

separador()

//calcular el residuo
let n1 = 10
let n2 = 2
residuo = n1%n2;
console.log("el residuo al dividir el numero ",n1, "con el numero ",n2," es: ",residuo);

separador()

let Nombre = "Hola!!!! soy Estiben"
let df = "tengo "
let Edad =17
let fg = " de edad y "
let hobby = "mis hobbys favoritos son dibujar y jugar futbol "
let as = "tambien "
let comida = "mi comida favorita es el pepian"

console.log(Nombre+df+Edad+fg+hobby+as+comida)
