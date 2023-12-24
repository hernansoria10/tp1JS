let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));
let numero3 = parseInt(prompt("ingrese el tercer numero"));

if (numero1 > numero2 && numero1 > numero3) {
  document.write(numero1 + " es el mayor de los tres ");
} else if (numero2 > numero1 && numero2 > numero3) {
  document.write(numero2 + " es el mayor de los tres ");
} else if (numero3 > numero1 && numero3 > numero2) {
  document.write(numero3 + " es el mayor de los tres ");
} else {
  document.write("los 3 numeros, o por lo menos 2 de ellos son iguales");
}
