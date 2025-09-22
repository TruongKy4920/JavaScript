function arrayFromRange(num1,num2){
    let temp=[];
    for(let i=num1;i<=num2;i++) temp.push(i);
    return temp;
}
const numbers=arrayFromRange(-10,-4);
console.log(numbers);