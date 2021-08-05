// factorial number using for loop 
let number = 1;
for(let i=1; i<=6; i++){
    number = number * i;
}
// console.log(number);




// factorial number using function 
function factorial(factNumber){
    let number = 1;
    for(i = 1; i<=factNumber; i++){
        number = number * i;
    }
    return number;
}

let inputNumber = 5;
let outFactorial = factorial(inputNumber);

let anotherNumber = 6;
let outputFactorial = factorial(anotherNumber);

// console.log(outFactorial);
// console.log(outputFactorial);


// factorial number using while loop with function (increment 1x2x3x4x5)
function getFactorial(number) {
    let num = 1;
    let i = 1;
    while (i <= 5) {
        num = num * i;
        i++;
    }
    return num;
}
// let outFact = getFactorial(5);
// console.log(outFact);


// while loop using function decrement 5x4x3x2x1
/*
function factorialNumber(num){
    let fact =1;
    let i = num;
    while(i>=1){
        fact = fact * i;
        i--;
    }
    return fact;
}*/
// let outFact = factorialNumber(5);
// console.log(outFact);

// for loop using function decrement factorial 
function gotFactorial(num){
    let fact = 1;
    for(i=num; i>=1; i--){
        fact = fact * i;
    }
    return fact;
}
let facTorail = gotFactorial(6);
// console.log(facTorail);




// Recursive funtion 
function factorialNum(n){
    if(n==0){
        return 1;
    }
    return n * factorialNum(n-1);
    // return n * (n-1);
    // let faCtorial = n * (n-1);
    // return faCtorial;
}
let number2 = 6;
let rFactorial = factorialNum(number2);
// console.log(rFactorial);







// for(i=0; i<=5; i++){
//     console.log(i);
// }

// for(i = 10; i>1; i--){
//     console.log(i);
// }



// 1 to 10 numbers sumation 1+2+3+4+5+6+7+8+9+10
let inNum = 0;
for(i=1; i<=10; i++){
    inNum = inNum + i;
}
// console.log(inNum);