const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = {sum};

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Convertidor de euros

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromDollarToYen(dollars){
    let euro = dollars / oneEuroIs["USD"];
    return euro * oneEuroIs["JPY"];
}

function fromYenToPound(yenes) {
    let yen = yenes / oneEuroIs["JPY"];
    return yen * oneEuroIs["GBP"];
}

module.exports = {sum, fromEuroToDollar}