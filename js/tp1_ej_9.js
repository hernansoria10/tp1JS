var frase = prompt("Ingresa una frase en español:");

// Filtrar las vocales de la frase
var vocales = frase.match(/[aeiouAEIOUáéíóúü]/gi);

// Mostrar las vocales en pantalla
if (vocales) {
    var resultado = "Vocales encontradas: " + vocales.join(" ");
    alert(resultado);
} else {
    alert("No se encontraron vocales en la frase ingresada.");
}