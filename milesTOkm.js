function milesTOkm(miles){
    let km = miles * 1.6;
    return km;
}

let inputMiles = 14;
let outputKm = milesTOkm(inputMiles);
// console.log(parseFloat(outputKm.toFixed(2)), 'Kilometer');