// for loop factorial 
let result = 1;
for(i = 1; i<=6; i++){
    result = result * i;
}
// console.log(result);

// recursion function 
function getFactorial(num){
    if(num == 0){
        return 1;
    }else{
        return num * getFactorial(num - 1);
    }
}
let number = 5;
const factResult = getFactorial(number);
// console.log(factResult);


// for loop 1 to 10 number sumation 
// let res = 0;
// for(i = 1; i<=10; i++){
//     res = res + i;
// }
// console.log(res);
/*
function sumation(number){
    let res = 0;
    for(i = 1; i<= number; i++){
        res = res + i;
    }
    return res;
}
let inNumber = 10;
const sum = sumation(inNumber);
console.log(sum); */



let price = [40, 55, 78, 65, 45, 32];

let sum =0;
for(i = 0; i<price.length; i++){
    let allPrice = price[i];
    // sum = sum + allPrice;
    if(allPrice%2 == 0){
        console.log(allPrice, 'This is even');
    }else{
        continue;
    }
}
// console.log(sum);


