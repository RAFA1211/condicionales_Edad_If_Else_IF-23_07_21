
// // Operadores Lógicos

// let edad; 
// edad = prompt ("Ingrese su edad: ")

// if (edad >= 18){console.log(`Es mayor de edad`)}
// else {console.log(`La edad ingresada no cumple con los parámetros`)}


let opciones = prompt(`
Ingrese una de las opciones para entrar a la puerta Inligente
    A. Ingresar la llave
    B. Huella dactilar
    C. Lectura de voz
`);

if( (opciones == 'A' || opciones == 'B') || opciones== 'C'){

    console.log(`La puerta se esta abriendo BIENVENIDO usuario ingresantes la opción de apertura es correcta`);
}else{
    console.log(`La puerta esta cerrada acceso denegado por que la opción no de apertura no es correcta :(`);
}