let array = new Array();

for (let i = 0; i < 5; i++) {
    const valor = (prompt(`ingrese el numero ${i + 1}:`));
    array.push(valor);
}
console.log ("valores ingresado en array", array);