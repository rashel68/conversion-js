function interst(principal, rate, time){
    rate =rate/100;
    let gotInterst = principal * rate * time;
    let totalAmount = principal + gotInterst;
    return totalAmount;
}

let p = 10000;
let r = 10;
let t = 1;
const myInterest = interst(p, r, t);
console.log(myInterest);