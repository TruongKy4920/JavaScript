//biến Y sao chép giá trị của X-> X có thay đổi cũng không ảnh hưởng tới Y vì nó là biến độc lập
let x=10;
let y=x;
x++;
console.log(x);
console.log(y);

//Biến Y1 trỏ tới cùng địa chỉ của X1 nên khi X1 thay đổi dữ liệu trong vùng thì dữ liệu Y1 cũng thay đổi
let x1={ value:10 };
let y1=x1;
x1.value++;
console.log(x1);
console.log(y1);
//number sẽ không thay đổi vì function chỉ sao chép giá trị của đối số rồi tính toán riêng sau đó thu hồi
let number=10;
function increase(number){
    number++;
}
increase(number);
console.log('number: '+number);

//giá trị obj thay đổi vì function trỏ tới địa chỉ của obj và thay đổi giá trị của obj
let obj={value:10}; 
function increase2(obj){
    obj.value++;
}
increase2(obj);
console.log('obj: '+obj.value);

