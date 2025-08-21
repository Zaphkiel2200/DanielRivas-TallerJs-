// 1. Tipos de Variables
// Ejercicio 1.1: var y reasignación
var nombre = "Juan";
console.log("Nombre inicial:", nombre);
nombre = "Ana";
console.log("Nombre reasignado:", nombre);
// Explicación: var permite reasignar valores sin restricciones.

// Ejercicio 1.2: const y error
try {
    const nombreConst = "Juan";
    console.log("Nombre con const:", nombreConst);
    // nombreConst = "Ana"; // Descomentar esto causará un error
    console.log("Esto no se ejecuta si hay error");
} catch (error) {
    console.log("Error con const:", error.message);
}
// Explicación: const no permite reasignar valores, lanza TypeError.

// Ejercicio 1.3: let y scope
if (false) {
    let edad = 25;
    console.log("Dentro del bloque:", edad);
}
try {
    console.log("Fuera del bloque:", edad); // Error: edad no está definida
} catch (error) {
    console.log("Error con let:", error.message);
}
// Explicación: el let tiene alcance de bloque, no es accesible fuera del if.

// 2. Tipos de Datos
// Ejercicio 2.1: Tipos primitivos
let texto = "Hola";
let numero = 42;
let booleano = true;
let nulo = null;
let indefinido;
console.log("Tipos:", typeof texto, typeof numero, typeof booleano, typeof nulo, typeof indefinido);
// Resultado: string, number, boolean, object, undefined

// Ejercicio 2.2: Objeto y array
const persona = { nombre: "Carlos", edad: 30 };
const hobbies = ["leer", "correr", "viajar"];
console.log("Tipo de persona:", typeof persona, "Tipo de hobbies:", typeof hobbies);
// Resultado: object, object

// 3. Conversión de Tipos
// Ejercicio 3.1: Conversión implícita
let numero1 = 10;
let numero2 = "5";
console.log("Suma (concatenación):", numero1 + numero2); // Resultado: "105"
console.log("Multiplicación:", numero1 * numero2); // Resultado: 50
// Explicación: + concatena porque numero2 es un string; en cambio el * convierte implícitamente a número.

// Ejercicio 3.2: Conversión explícita
console.log("Número a string:", String(25), typeof String(25));
console.log("String a número:", Number("100"), typeof Number("100"));
console.log("String vacío a booleano:", Boolean(""), typeof Boolean(""));
console.log("String 'hola' a booleano:", Boolean("hola"), typeof Boolean("hola"));
// Resultado: En el primero "25" (string), leugo 100 (number), luego false (boolean), y ultimo true (boolean)

// 4. Operadores, Condicionales, Ciclos y Excepciones
// Ejercicio 4.1: Comparación
console.log("10 === '10':", 10 === "10"); // false
console.log("10 == '10':", 10 == "10"); // true
// Explicación: === compara valor y tipo, == solamente el valor.

// Ejercicio 4.2: Par o impar
let numero = 7;
if (numero % 2 === 0) {
    console.log(numero, "es par");
} else {
    console.log(numero, "es impar");
}

// Ejercicio 4.3: Ciclo for
for (let i = 1; i <= 5; i++) {
    console.log("Número:", i);
}

// Ejercicio 4.4: try...catch
try {
    throw new Error("Este es un error.");
} catch (error) {
    console.log("Error capturado:", error.message);
}

// 5. Funciones y Arrow Functions
// Ejercicio 5.1: Función tradicional
function multiplicar(a, b) {
    return a * b;
}
console.log("Multiplicación:", multiplicar(4, 5));

// Ejercicio 5.2: Arrow function
const multiplicarArrow = (a, b) => a * b;
console.log("Multiplicación (arrow):", multiplicarArrow(4, 5));

// Ejercicio 5.3: Arrow function sin parámetros
const saludar = () => "¡Hola a todos!";
console.log(saludar());

// 6. Scope y Contextos
// Ejercicio 6.1: Global y local
let globalVar = "Soy global";
function pruebaScope() {
    let localVar = "Soy local";
    console.log("Dentro de función - global:", globalVar);
    console.log("Dentro de función - local:", localVar);
}
pruebaScope();
console.log("Fuera de función - global:", globalVar);
try {
    console.log("Fuera de función - local:", localVar); // Error
} catch (error) {
    console.log("Error con localVar:", error.message);
}
// Explicación: el globalVar es accesible en cualquier lugar, localVar solo dentro de la función.

// Ejercicio 6.2: this en objeto
const coche = {
    marca: "Toyota",
    mostrarMarca: function() {
        console.log("Marca del coche:", this.marca);
    }
};
coche.mostrarMarca();
// Explicación: el "this" se refiere al objeto coche, accede a su propiedad marca.

// 7. Arrays
// Ejercicio 7.1: Métodos mutables
let frutas = ["Manzana", "Banana"];
console.log("Array inicial:", frutas);
frutas.push("Naranja");
console.log("Tras push:", frutas);
frutas.pop();
console.log("Tras pop:", frutas);

// Ejercicio 7.2: Métodos inmutables
let numeros = [1, 2, 3];
let doblados = numeros.map(n => n * 2);
console.log("Map (doblados):", doblados);
let mayores = numeros.filter(n => n > 1);
console.log("Filter (mayores a 1):", mayores);

// Ejercicio 7.3: Iteración
frutas.forEach(fruta => console.log("Fruta:", fruta));
let encontrada = frutas.find(fruta => fruta === "Banana");
console.log("Find (Banana):", encontrada);
let indice = frutas.findIndex(fruta => fruta === "Manzana");
console.log("FindIndex (Manzana):", indice);

// 8. Objetos y Clases
// Ejercicio 8.1: Objeto con método
const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    mostrarInfo: function() {
        console.log(`Libro: ${this.titulo}, Autor: ${this.autor}`);
    }
};
libro.mostrarInfo();

// Ejercicio 8.2: Clase
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}
const miAnimal = new Animal("Luna");
console.log(miAnimal.saludar());

// Ejercicio 8.3: Herencia
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
    saludar() {
        return `¡Guau! Soy ${this.nombre}, un ${this.raza}`;
    }
}
const miPerro = new Perro("Max", "Labrador");
console.log(miPerro.saludar());