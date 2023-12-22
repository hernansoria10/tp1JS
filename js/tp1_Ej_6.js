let numero1 = parseInt(prompt('ingrese el primer numero'));
let numero2 = parseInt(prompt('ingrese el segundo numero'));
if(numero1>numero2){
    document.write(numero1 + ' es mayor que '+ numero2);
}
else if(numero2>numero1){
    document.write(numero2 + ' es mayor que ' + numero1);
}
else{
    document.write('son iguales');
}

