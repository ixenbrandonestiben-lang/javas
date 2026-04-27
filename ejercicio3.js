// Ejercicios clase 3
// 1. Crear un objeto estudiante
// Crear un objeto con nombre, edad y curso.
//  Mostrar un mensaje usando desestructuración.
const estudiante = {
    nombre: "brandon",
    edad: 18,
    curso: "programacion"
}

console.log(estudiante.nombre);
console.log(estudiante.edad);
console.log(estudiante.curso);

// 2. Lista de estudiantes
// Crear un arreglo con 5 objetos estudiante.
//  Recorrerlo e imprimir los nombres.
const estudiantes = {

    estudiante1 :{
        nombre: "brandon",
        edad: 18,
        curso: "programacion",
        seccion: "A",
        nota: 5 

    },
    estudiante2 :{
        nombre: "Dana",
        edad: 18,
        curso: "programacion",
        seccion: "A",
        edad: 18,
        curso: "programacion",
        seccion: "A",
        nota: 5 

    },
    estudiante3 :{
        nombre: "catu",
        edad: 19,
        curso: "programacion",
        seccion: "A",
        nota: 5 

    },
    estudiante4 :{
        nombre: "Apa",
        edad: 18,
        curso: "programacion",
        seccion: "A",
        nota:{
            nota1: 89,
            nota2: 89,
            nota3: 89,
            nota4: 89,
            nota5: 89,
            nota6: 89,
            nota7: 97,
            nota8: 87,
            nota9: 90,
            nota10: 85,
        }
    }
}

// 3. Promedio de notas por estudiante
// Cada estudiante tiene un arreglo de notas.
// Calcular el promedio de cada uno.

// 4. Buscar el estudiante mayor
// Recorrer el arreglo y mostrar el estudiante con mayor edad.
// 5. Filtrar estudiantes aprobados
// Mostrar solo los que tengan promedio mayor o igual a 3.0.
// 6. Desestructurar dentro de un ciclo
// Recorrer el arreglo y desestructurar nombre y edad directamente en el for.
// 7. Crear un Set de materias
// Agregar varias materias, algunas repetidas. Mostrar el contenido final del Set.
// 8. Convertir un arreglo a Set
// Dado un arreglo con números repetidos, convertirlo a Set para eliminar duplicados.
// 9. Crear un Map de productos
// Clave: nombre del producto.
// Valor: precio.
// Mostrar todos los productos con su precio.
// 10. Calcular el total del carrito usando Map
// Recorrer el Map y sumar todos los precios.
// 11. Verificar existencia en Map
// Pedir un producto y validar si existe en el Map.
// 12. Objeto con métodos
// Crear un objeto cuentaBancaria con propiedades y un método para depositar dinero.
// 13. Lista de objetos productos
// Cada producto tiene nombre, precio y categoría. Mostrar solo los de una categoría específica.
// 14. Ordenar productos por precio
// Ordenar el arreglo de productos de menor a mayor precio.
// 15. Desestructuración anidada
// Crear un objeto que tenga otro objeto dentro (dirección) y extraer los datos con desestructuración.
// 16. Contar elementos únicos con Set
// Dado un arreglo de nombres repetidos, contar cuántos nombres únicos hay.
// 17. Crear un Map a partir de un arreglo
// Dado un arreglo de objetos productos, pasarlo a un Map.
// 18. Eliminar elementos de un Set
// Eliminar un elemento y mostrar el resultado.
// 19. Recorrer un Map con desestructuración
// Mostrar clave y valor usando desestructuración en el for.
// 20. Mini sistema de biblioteca
// Crear un arreglo de libros (objetos con título, autor y estado: prestado/disponible).
// Mostrar solo los disponibles.