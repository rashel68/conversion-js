// leapYear using condition 
let year = 2000;
if((year%4 == 0 && year%100 != 0) || year%400 == 0){
    console.log('That is Leap Year');
}else{
    console.log('That is not Leap Year');
}