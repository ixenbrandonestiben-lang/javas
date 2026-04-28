// function saludoRetrasado(nombre, callback) {
//     setTimeout(
//         function(){

//             console.log("beinvenido a javascript ",nombre);
//             callback();

//         },2000);
// }

// saludoRetrasado("brandon",function(){
//     console.log("saludo finalizado. extitos soldado")
// } );

function separador(){
    console.log("-----------------------------------------------")
}
separador();
// 2. Mensajes en orden
// Mostrar tres mensajes con distintos 
// setTimeout pero lograr que salgan en orden usando 
// callbacks anidados.

console.log("Mensajes en orden")
separador();

function mensajesEnOrden(mensajes,callback) {
    setTimeout(
        function(){

            console.log("beinvenido a javascript ");
            callback();

        },2000);
    setTimeout(
        function(){
            console.log("aqui tu eres el que construye lo que sueña");
            callback();
        },3000);
    setTimeout(
        function(){
            console.log("No dejes escapar las oprtunidades.");
            callback();
        },4000);
}

mensajesEnOrden("mensajes",function(){
    console.log()
} )

// 3. Simular descarga de archivo
// Función descargarArchivo(callback)
//  que tarde 3 segundos y luego ejecute el
//  callback mostrando “Archivo descargado”.

console.log()
// 4. Procesar una lista después de esperar
// Esperar 2 segundos y luego recorrer un arreglo con forEach para mostrar sus elementos.

// 5. Filtrar números pares después de un retraso
// Después de 2 segundos, usar filter para obtener los números pares de un arreglo.

// 6. Duplicar valores con map después de esperar
// Usar map dentro de un setTimeout para duplicar los valores de un arreglo.

// 7. Sumar valores con reduce después de esperar
// Usar reduce dentro de un setTimeout para sumar los números de un arreglo.

// 8. Función que recibe arreglo y callback procesador
// Crear una función que reciba un arreglo y un callback.
// El callback decidirá qué hacer con el arreglo (map, filter, etc.).

// 9. Simular base de datos de usuarios
// Después de 3 segundos retornar un arreglo de usuarios y en el callback mostrar sus nombres con forEach.

// 10. Buscar usuario por nombre
// Usar filter dentro del callback para buscar un usuario específico.

// 11. Transformar nombres a mayúsculas
// Usar map dentro del callback para transformar nombres.

// 12. Calcular edad promedio
// Usar reduce dentro del callback para calcular promedio de edades.

// 13. Cadena de procesos
// Simular:
// Cargar datos (2s)
// Filtrar datos (callback)
// Mostrar resultados (otro callback)

// 14. Simular pedido en restaurante
// Funciones:
// tomarPedido
// prepararPedido
// entregarPedido
// Encadenarlas con callbacks y setTimeout.

// 15. Contar cuántos números son mayores a 10
// Usar filter y luego mostrar la cantidad, todo dentro de un callback.
// 16. Convertir precios
// Dado un arreglo de precios, usar map para agregar IVA dentro de un callback.

// 17. Encontrar el número mayor
// Usar reduce dentro de un callback para encontrar el mayor número.

// 18. Ejecutar una operación matemática pasada como callback
// La función principal recibe dos números y un callback (sumar, restar, multiplicar).

// 19. Simular verificación de contraseña
// Esperar 2 segundos y luego validar la contraseña en un callback.

// 20. Mini flujo completo
// Simular:
// Esperar datos (2s)
// Filtrar usuarios activos
// Transformar nombres
// Calcular cantidad total
// Todo encadenado con callbacks.
