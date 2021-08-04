function inchToFeet(inch){
    var feet = inch / 12 ;
    return feet;
}

let inputInches = 156;
let outputFeet = inchToFeet(inputInches);
console.log(outputFeet, 'Feet');

let myHeight = 66;
let rashelHeight = inchToFeet(myHeight);
console.log(rashelHeight, 'Feet');