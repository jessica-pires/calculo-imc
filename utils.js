

export function IMC(weight, heigth){
    return (weight / ((heigth / 100) **2)).toFixed(2)
}

// validando apenas números no formulario

export function notANumber(value){
    return isNaN(value) || value == ""
}
