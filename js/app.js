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
// GASTOS DE LA SEMANA //


function gastosDia (precio, referencia) {
    this.precio = precio;
    this.referencia = referencia;
}

// const lunes = new gastosDia (5500, "Supermercado")
// const martes = new gastosDia (2200,"Nafta para el auto")
// const miercoles = new gastosDia (700,"Comida de la mascota")
// const jueves = new gastosDia (0,"Hoy no gate nada")
// const viernes = new gastosDia (1500,"Salida con amigos")
// const sabado = new gastosDia (150,"Futbol")
// const domingo = new gastosDia (1800,"Asado de los domingos")
// arrays de objetos 

    


// ARRAYS SEMANA 1


const gastosSemana = [
    {dia: "Lunes", gasto: 5500, referencia: "Supermercado"},
    {dia: "Martes", gasto: 2200, referencia: "Nafta"},
    {dia: "Miercoles", gasto: 700, referencia: "Comida mascota"},
    {dia: "Jueves", gasto: 0, referencia: "Sin gastos"},
    {dia: "Viernes", gasto: 1500, referencia: "Salida con amigos"},
    {dia: "Sabado", gasto: 150, referencia: "Futbol"},
    {dia: "Domingo", gasto: 1800, referencia: "Asado familiar"}   
];

for (let i = 0; i < gastosSemana.length; i++) {
    console.log (gastosSemana[i])   
}
let lista = document.createElement ("ul");
lista.classList.add("lista")
conteni