function generarvector(n){
    const vector = [];
        for (let i = 0; i < n; i++) {
            const valor = Math.floor(Math.random() * 10);
            vector.push(valor);
        }
        return vector;
    }

    function sumarVector(vector){
        return vector.reduce((suma, elemento)=> suma + elemento, 0);
    }
    function multiplicarVector(vector){
        return vector.reduce((multiplicacion, elemento)=> multiplicacion * elemento, 1);

    }
    const cantidadDeElementos = parseInt(prompt("ingrese la cantidad de elementos"));
    const miVector = generarvector(cantidadDeElementos);
    
    
    console.log("vector generado: ", miVector);
    console.log("suma de vector: ", sumarVector(miVector));
    console.log("la multiplicacion del vector: ", multiplicarVector(miVector));