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
        nota:{
            nota1: 78,
            nota2: 65,
            nota3: 80,
            nota4: 79,
            nota5: 89,
            nota6: 89,
            nota7: 97,
            nota8: 87,
            nota9: 90,
            nota10: 85,
        }

    },
    estudiante2 :{
        nombre: "Dana",
        edad: 18,
        curso: "programacion",
        seccion: "A",
        edad: 18,
        curso: "programacion",
        seccion: "A",
        nota:{
            nota1: 90,
            nota2: 89,
            nota3: 80,
            nota4: 97,
            nota5: 100,
            nota6: 89,
            nota7: 97,
            nota8: 87,
            nota9: 85,
            nota10: 86,
        }

    },
    estudiante3 :{
        nombre: "catu",
        edad: 19,
        curso: "programacion",
        seccion: "A",
        nota:{
            nota1: 89,
            nota2: 87,
            nota3: 80,
            nota4: 90,
            nota5: 89,
            nota6: 99,
            nota7: 97,
            nota8: 100,
            nota9: 80,
            nota10: 90,
        }

    },
    estudiante4 :{
        nombre: "Apa",
        edad: 18,
        curso: "programacion",
        seccion: "A",
        nota:{
            nota1: 90,
            nota2: 95,
            nota3: 88,
            nota4: 83,
            nota5: 80,
            nota6: 89,
            nota7: 97,
            nota8: 87,
            nota9: 70,
            nota10: 85,
        }
    }
}

// 3. Promedio de notas por estudiante
// Cada estudiante tiene un arreglo de notas.
// Calcular el promedio de cada uno.
let nota= {
        nota1: 78,
        nota2: 65,
        nota3: 80,
        nota4: 79,
        nota5: 89,
        nota6: 89,
        nota7: 97,
        nota8: 87,
        nota9: 90,
        nota10: 85,
    }
let estudiante1 = {
    promedio: (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10)
};
console.log(estudiante1.promedio)


// 4. Buscar el estudiante mayor
// Recorrer el arreglo y mostrar el estudiante con mayor edad.
const estudiantes = [
    { nombre: "brandon", edad: 18 },
    { nombre: "estiben", edad: 19 }
];

let mayor = estudiantes[0];
for (const est of estudiantes) {
    if (est.edad > mayor.edad) {
        mayor = est;
    }
}
console.log("El estudiante mayor es:", mayor.nombre, "con", mayor.edad, "años");


// 5. Filtrar estudiantes aprobados
// Mostrar solo los que tengan promedio mayor o igual a 3.0.
const estudiantes2 = [
    { nombre: "brandon", promedio: 2.8 },
    { nombre: "estiben", promedio: 3.5 },
    { nombre: "ana", promedio: 4.0 }
];

const aprobados = estudiantes2.filter(est => est.promedio >= 3.0);
console.log("Estudiantes aprobados:", aprobados);


// 6. Desestructurar dentro de un ciclo
// Recorrer el arreglo y desestructurar nombre y edad directamente en el for.
for (const { nombre, edad } of estudiantes) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

// 7. Crear un Set de materias
// Agregar varias materias, algunas repetidas. Mostrar el contenido final del Set.
const materias = new Set(["Matemáticas", "Historia", "Inglés", "Matemáticas"]);
console.log("Materias únicas:", materias);

// 8. Convertir un arreglo a Set
// Dado un arreglo con números repetidos, convertirlo a Set para eliminar duplicados.
const numeros = [1, 2, 2, 3, 4, 4, 5];
const numerosUnicos = new Set(numeros);
console.log("Números sin duplicados:", numerosUnicos);

// 9. Crear un Map de productos
// Clave: nombre del producto.
// Valor: precio.
// Mostrar todos los productos con su precio.
const productos = new Map();
productos.set("Laptop", 1200);
productos.set("Mouse", 25);
productos.set("Teclado", 45);

for (const [nombre, precio] of productos) {
    console.log(`${nombre}: $${precio}`);
}

// 10. Calcular el total del carrito usando Map
// Recorrer el Map y sumar todos los precios.
let total = 0;
for (const precio of productos.values()) {
    total += precio;
}
console.log("Total del carrito:", total);

// 11. Verificar existencia en Map
// Pedir un producto y validar si existe en el Map.
const productoBuscado = "Mouse";
if (productos.has(productoBuscado)) {
    console.log(`${productoBuscado} existe en el carrito`);
} else {
    console.log(`${productoBuscado} no está en el carrito`);
}

// 12. Objeto con métodos
// Crear un objeto cuentaBancaria con propiedades y un método para depositar dinero.
const cuentaBancaria = {
    saldo: 1000,
    depositar(monto) {
        this.saldo += monto;
        console.log(`Depósito de ${monto}. Nuevo saldo: ${this.saldo}`);
    }
};
cuentaBancaria.depositar(500);

// 13. Lista de objetos productos
// Cada producto tiene nombre, precio y categoría. Mostrar solo los de una categoría específica.
const listaProductos = [
    { nombre: "Laptop", precio: 1200, categoria: "Tecnología" },
    { nombre: "Camisa", precio: 30, categoria: "Ropa" },
    { nombre: "Celular", precio: 800, categoria: "Tecnología" }
];

const tecnologia = listaProductos.filter(p => p.categoria === "Tecnología");
console.log("Productos de tecnología:", tecnologia);

// 14. Ordenar productos por precio
// Ordenar el arreglo de productos de menor a mayor precio.
listaProductos.sort((a, b) => a.precio - b.precio);
console.log("Productos ordenados por precio:", listaProductos);

// 15. Desestructuración anidada
// Crear un objeto que tenga otro objeto dentro (dirección) y extraer los datos con desestructuración.
const persona = {
    nombre: "Carlos",
    direccion: {
        ciudad: "Guatemala",
        calle: "Zona 6"
    }
};

const { nombre, direccion: { ciudad, calle } } = persona;
console.log(nombre, ciudad, calle);

// 16. Contar elementos únicos con Set
// Dado un arreglo de nombres repetidos, contar cuántos nombres únicos hay.
const nombres = ["Ana", "Luis", "Ana", "Pedro", "Luis"];
const nombresUnicos = new Set(nombres);
console.log("Cantidad de nombres únicos:", nombresUnicos.size);

// 17. Crear un Map a partir de un arreglo
// Dado un arreglo de objetos productos, pasarlo a un Map.
const productosArr = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 }
];

const productosMap = new Map(productosArr.map(p => [p.nombre, p.precio]));
console.log(productosMap);

// 18. Eliminar elementos de un Set
// Eliminar un elemento y mostrar el resultado.
materias.delete("Historia");
console.log("Materias después de eliminar:", materias);

// 19. Recorrer un Map con desestructuración
// Mostrar clave y valor usando desestructuración en el for.
for (const [clave, valor] of productosMap) {
    console.log(`Producto: ${clave}, Precio: ${valor}`);
}

// 20. Mini sistema de biblioteca
// Crear un arreglo de libros (objetos con título, autor y estado: prestado/disponible).
// Mostrar solo los disponibles.
const libros = [
    { titulo: "El Quijote", autor: "Cervantes", estado: "disponible" },
    { titulo: "1984", autor: "Orwell", estado: "prestado" },
    { titulo: "Cien años de soledad", autor: "García Márquez", estado: "disponible" }
];

const disponibles = libros.filter(libro => libro.estado === "disponible");
console.log("Libros disponibles:", disponibles);
