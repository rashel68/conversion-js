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
/*
let sum =0;
for(i = 0; i<price.length; i++){
    let allPrice = price[i];
    // sum = sum + allPrice;
    if(allPrice%2 == 0){
        console.log(allPrice, 'This is even');
    }else{
        continue;
    }
} */
// console.log(sum);



let productPrice = [20, 54, 58, 75, 32, 14];
let allPprice = 0;
for(i = 1; i<productPrice.length; i++){
    let price = productPrice[i];
    allPprice = allPprice + price;
}
// console.log(allPprice);


// check all even number an array 
let fruitsPrice = [40, 54, 78, 18, 14, 64, 40, 55, 66, 50];
for(i = 1; i<fruitsPrice.length; i++){
    let allFruitsPrice = fruitsPrice[i];
    if(allFruitsPrice%2 == 0){
        // console.log(allFruitsPrice);
    } else{
        continue;
    }
}

// specific range in array 
for(i=1; i<fruitsPrice.length; i++){
    let fPrice = fruitsPrice[i];
    if(fPrice<=50){
        // console.log(fPrice, 'lowest price');
    }else{
        // console.log(fPrice, 'highest price');
    }
}


// max and lowest value of an array 
let num = [2, 3, 20, 15, 1, 6, 5, 8, 4, 10];
let max = Math.max(...num);
let min = Math.min(...num);

// console.log(max, 'is max number of this array');
// console.log(min, 'is min number of this array');


