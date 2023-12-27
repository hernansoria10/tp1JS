let frase = prompt("Ingresa una frase:");


 let vocales = frase.match(/[aeiouAEIOUáéíóúü]/);


if (vocales) {
    var resultado = "Vocales encontradas: " + vocales.join(" ");
    alert(resultado);
} else {
    alert("No se encontraron vocales en la frase ingresada.");
} 