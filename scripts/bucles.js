alert("Un número primo es un número que es sólo tiene dos divisores: 1 y sí mismo. Atrévete a probar si puedes sacar un número primo");

let primoEncontrado = false;  //Uso las camelCase que dijo el profe para nombres con espacios
while (!primoEncontrado) {
    let numero = parseInt(prompt("Ingresa tu número, y te corregiré hasta que sea primo: "));  //Parseo el valor como me advirtieron
    let divisores = [];
    for (let divisor = numero; divisor>=1; divisor--) {  //Este bucle for me permite obtener los divisores en un array
        if (numero%divisor === 0) {
            divisores.push(divisor);
        }
    }
    if (divisores.length === 2) {
        primoEncontrado = true;
        alert("Felicidades, has encontrado un primo! Se ha acabado tu clase de hoy.")
    }
    else {
        alert("Ánimo! Sigue intentándolo, el número que has ingresado no es primo.")
    }
}