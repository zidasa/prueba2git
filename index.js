
function add(x1,x2) {
    return x1 + x2;
}

function substract(x1,x2){
    return x1 - x2;

}

function multiply(x1,x2){
    return x1 * x2;
}

function divide (x1,x2){

    if (x2 ==0){
        console.log("no se puede dividir por 0")
        return "no se puede 0"
    }else{

        return x1/x2;
    }
}
 
console.log (add(1,2));
console.log (substract(1,2));
console.log (multiply(1,2));
console.log (divide(1,0));

//variables var, let, const

//funciones
function sumar(){}
const sumarDos = (x1,x2) => {
    return x1 + x2;
}
console.log (sumarDos(1,0));