const nombre = prompt("Ingrese su nombre");
const edad = prompt("Ingrese su edad");
const nacimiento = prompt("Ingrese su año de nacimiento");

if (edad > 18) {
    console.log(nombre + " eres mayor de edad");
} else {
    console.log(nombre + " eres menor de edad");
}

if (nacimiento <= 1990) {
    console.log("En tu infancia o juventud seguro escuchaste una canción de Michael Jackson");
} else if ((nacimiento > 1990) && (nacimiento <= 2019)) {
    console.log("Conociste muy joven los teléfonos celulares y las redes sociales");
} else if (nacimiento >= 2020) {
    console.log("Naciste en plena pandemia del COVID");
}
