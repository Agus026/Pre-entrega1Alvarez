let suma = 0;
let contador = 0;

while (suma < 100) {
    let numero = parseInt(prompt("Ingrese el monto del gato por favor: "));
    
    if (!isNaN(numero)) {
        console.log(`sumando: ${numero}`);
        suma += numero;
        contador++;
    } else {
        alert("Coloque una cifra por favor");
    }
} 

console.log(`La suma total es de :${suma}`);
console.log(`El total de gastos compras fueron de ${contador}`);