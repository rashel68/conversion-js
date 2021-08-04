// Using condition 
function grade(marks){
    let result;
    if(marks<=100 && marks>=80){
        result = 'Congratulation you got A+';
    }
    else if(marks<80 && marks>=70){
        result = 'You got A Grade';
    }else if(marks<70 && marks>=60){
        result = 'You got B Grade';
    }
    else if(marks<60 && marks>=50){
        result = 'You got C Grade';
    }
    else if(marks<50 && marks>=40){
        result = 'You Got D Grade';
    }else if(marks<40 && marks>=33){
        result = 'You Got E Grade';
    }else if(marks<33 && marks>=0){
        result = 'Sorry you are failled';
    }else{
        result= 'Invalid Input';
    }
    return result;
}
let gotMarks = 110;
const gettingGrade = grade(gotMarks);
// console.log(gettingGrade);


// Using switch 