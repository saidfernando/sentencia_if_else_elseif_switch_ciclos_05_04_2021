let num = 0;
let respuesta = "";

console.warn("Sentencia if");
if(num == 5){
    console.log(`El numero ${num} es igual a 5`);
}else if(num>=6 && num < 10){
    console.log(`El numero ${num} es mayor o igual a 6 y menor a 10 `);
}else if(num>=20 && num<=30){
    console.log(`El numero ${num} es mayor o igual a 20 y menor igual a 30`);
}else{
    console.log(`La condicion no existe`);
}
console.warn("Sentencia switch");
switch (num) {
    case 5:
        console.log(`El numero ${num}`);
        break;
    case 6: case 7: case 8: case 9:
        console.log(`El numero ${num} esta entre el 6 hasta el 9`);
        break;
    case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30:
            console.log(`El numero ${num} esta entre el 20 hasta el 30`);
        break;
    default:
        console.log(`La opcion no existe`);
        break;
}

let nombre = 'aaa';
switch (nombre) {
    case 1:
        console.log(`la opcion es 1 en tipo de dato ${typeof(nombre)}`);
    break;
    case true:
        console.log(`dato ${nombre} ${typeof(nombre)}`);
        break;
    case false:
        console.log(`dato ${nombre} ${typeof(nombre)}`);
        break;
    case 'miguel angel':
        console.log("Es el profesor");
        break;
    case '1':
        console.log(`la opcion es 1 en tipo de dato ${typeof(nombre)}`);
        break;
    default:
        console.log(`La opcion no existe`);
        break;
}










if (!(num%2)) {
    console.log(`El numero ${num} es par`);
}else{
    console.log(`El numero ${num} es impar`);
}







if(num == 5){
    console.log(`El numero ${num} es igual a 5`);
}else if(num>=6 && num < 10){
    console.log(`El numero ${num} es mayor o igual a 6 y menor a 10 `);
}else if(num>=20 && num<=30){
    console.log(`El numero ${num} es mayor o igual a 20 y menor igual a 30`);
}else{
    console.log(`La condicion no existe`);
}

console.log(num>=2);
console.log(num<=5);
console.log(num>=2 && num<=5);
if(num==0){
    console.log(`El numero ${num} es igual a 0`);
}else if(num==1){
    console.log(`El numero ${num} es igual a 1`);
}else if(num>=2 && num<=5){
    console.log(`El numero ${num} es mayor o igual a 2 y numero ${num} es menor o igual a 5`);
}else{
    console.log(`El numero ${num} no tiene condicion`);
}