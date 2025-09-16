//Neu chia het cho 3 xuat fizz, cho 5 xuat Buzz va chia het cho 3 lan 5 la FizzBuzz
function FizzBuzz(number){
    if(number%3==0 && number%5==0) return 'FizzBuzz';
    
    else if(number%5==0) return 'buzz';
    else if(number%3==0) return 'fizz';
    else if(typeof number !== 'number') return 'NaN';
    else return number;
}
console.log(FizzBuzz('ky'));