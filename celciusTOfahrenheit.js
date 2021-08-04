// general way Celcius to Fahrenheit
function toCelcius(celcius){
    // let fahrenheit = (celcius * 1.8) + 32;
    let fahrenheit = (celcius * 9/5) + 32;
    return fahrenheit;
}

let C = 104;
const frResult = toCelcius(C);
// console.log(frResult);
// console.log(parseFloat(frResult.toFixed(1)));



// Fahrenheit to Celcius 
function toFahrenheit(fahrenheit){
    let celcius = (fahrenheit - 32) * 5/9;
    return celcius;
}
let f = 35.6;
const celciusResult = toFahrenheit(f);
// console.log(parseFloat(celciusResult.toFixed(1)), 'Fahrenheit');


// celcius to kelvin 
