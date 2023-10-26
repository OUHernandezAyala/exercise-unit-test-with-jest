const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen (amountDollar){
    return (amountDollar*oneEuroIs.USD)*oneEuroIs.JPY
    
}

function fromEuroToDollar (amountEuro){
    return amountEuro*oneEuroIs.USD
}

function fromYenToPound (amountYen){
    return (amountYen / oneEuroIs.JPY) * oneEuroIs.GBP

}

module.exports = { fromDollarToYen, fromYenToPound };