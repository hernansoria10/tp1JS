let Numero = parseInt(prompt('ingrese un numero'));
let div2 = Numero % 2
let div3 = Numero % 3
let div5 = Numero % 5
let div7 = Numero % 7
if(div2 == 0){
    document.write(`${Numero} es divisible por 2 `);
}
else if(div3 == 0){
    document.write(`${Numero} es divisible por 3 `);

}
else if(div5 == 0){
    document.write(`${Numero} es divisible por 5 `);

}
else if(div7 == 0){
    document.write(`${Numero} es divisible por 7 `);

}
else{
    document.write('no es divisible por ninguno')
}