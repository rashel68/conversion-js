
// let price = [22, 45, 15, 18, 36, 50, 11, 66, 78, 54, 50, 5, 99];


// see all element 
/*
for(let i = 0; i<price.length; i++){
    let allPrice = price[i];
    console.log(allPrice);
}
*/


// array element sumation 
/*
let sumElement = 0;
for(let i = 0; i<price.length; i++){
    let allPrice = price[i];
    sumElement = sumElement + allPrice;
}
console.log(sumElement); */


//array max and min element
/*
let max = Math.max(...price);
let min = Math.min(...price);
console.log(max, 'is max value of this array');
console.log(min, 'is min value of this array'); */



// even or odd number of an array 
/*
for(i = 0; i<price.length; i++){
    let allPrice = price[i];
    if(allPrice%2 == 0){
        console.log(allPrice, 'is even number')
    }else{
        console.log(allPrice, 'is odd number');
    }
} */



// specific element of an array
/* 
for(i = 0; i<price.length; i++){
    let allPrice = price[i];
    if(allPrice>=5 && allPrice<=40){
        console.log(allPrice);
    }else{
        continue;
    }
} */

let price = [22, 45, 15, 18, 36, 50, 11, 66, 78, 54, 50, 5, 99];
// array sort assending
price.sort(function(a, b){return a - b});
console.log(price);

// array sort dessending 
price.sort(function(a, b){return b-a})
// console.log(price);