//  even or odd number using condition 

 /*
 let num = 9.2;
 if(num%2== 0){
     console.log('This is even number');
 }else if(num%2 != 0){
     console.log('This is Odd number')
 }else{
     console.log('Invalid Input');
 }
*/

// even or odd number using function 

function evenOrOdd(num){
    if(num%2==0){
        return 'This is even number';
    }else{
        return 'This is odd number';
    }
}

let inputNumber = 5;
let ouput = evenOrOdd(inputNumber);
// console.log(ouput);

// 50 to 80 all Odd number 
function getOddNumber(){
    for(let i=50; i<=80; i++){
        if(i%2 != 0){
            console.log(i);
        }
    }
}
// getOddNumber();



function oddNum(startNum, endNum){
    for(i=startNum; i<=endNum; i++){
        if(i%2 != 0){
            console.log(i);
        }
    }
}
 
let startNumber = 50;
let endNumber = 80;
// oddNum(startNumber, endNumber);



