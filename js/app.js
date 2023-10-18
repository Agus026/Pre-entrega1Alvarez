// GASTOS DE LA SEMANA //
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




// ARRAYS SEMANA 1


const gastosSemana1 = [
    { dia: "Lunes", gasto: 5500 },
    { dia: "Martes", gasto: 2200 },
    { dia: "Miercoles", gasto: 700 },
    { dia: "Jueves", gasto: 0 },
    { dia: "Viernes", gasto: 1500 },
    { dia: "Sabado", gasto: 150 },
];
gastosSemana1.push({ dia: "Domingo", gasto: 1800 });

// Creando lista en HTML de gastos de la semana 1

let lista = document.createElement("ul");
lista.classList.add("lista");
for (lugar of gastosSemana1) {
    lista.innerHTML += `<li class= "listaDias"> ${lugar.dia} : $ ${lugar.gasto} </li>`
}
contenedor.append(lista);
// MAP 
let gastos = gastosSemana1.map ((el)=>el.gasto) 


//RESULTADOS
const total = gastos.reduce((acumulador, elementos) => {
    return acumulador + elementos;
}, 0)

const contenido = document.querySelector("#contenedor2") 
let gastosTotales = document.createElement("p");
contenido.classList.add("texto");
gastosTotales.innerHTML += ` Los gastos totales de la semana son : ${total} `

contenido.append(gastosTotales);
