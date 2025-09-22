//----------------FILTER
const nums=[1,3,-2,4];
//Cách viết ver 1:
// let num1=nums.filter(num=>{
//     return num>=0; //có thể bỏ return và để mỗi điều kiện lọc thôi
//    // Tương đương với if(num>=0) return num; 
// });
//ver 2:
let num1=nums.filter(num=>num>=0);
console.log(num1);
//lọc mảng và lấy các phần tử thỏa điều kiện callback function. 

//----------------MAP

// let num2=nums.map(num=>{
    
//     return num+'a'; //có thể bỏ return và để mỗi điều kiện biến đổi
//     // Tương đương với:
//     // let temp = num+ 'a';
//     // return temp;

// });
let num2=nums.map(num=> num+'a');
//lấy mọi phần tử -> thực hiện biến đổi phần tử theo callback ->trả về phần tử đã biến đổi.
console.log(num2); 
//Có thể chuyển thằng các object luôn
let num3=nums.map(num=>{
    const obj={value: num};
    return obj; //return {value: num};
});

//**Lưu ý:
// -Nếu như func callback chỉ có 1 dòng thì có thể bỏ luôn return và ngoặc {} định nghĩa hàm 

// -Khi biến đổi 1 phân từ thành 1 object thì phải bỏ nó vào ngoặc đơn 
// ->map không nhầm lần đi vào codeblock và trả về object

let num4=nums.map(num=>{ /*đi vào khối lệnh của callback*/});
//->biến 1 phân từ thành 1 object thì phải bỏ nó vào ngoặc đơn 
let num5=nums.map(num=>({ value: num}));
console.log(num3);

//----------------REDUCER
//Đây là hàm gộp tất cả phần tử của mảng lại thành 1 giá trị
const reduced= nums.reduce( (accumulator,currentvalue) => {
    return accumulator+currentvalue
},0); //số 0 ở đây là tham số thứ 2 khởi tạo giá trị ban dầu cho accumulator

const reduced2= nums.reduce( (accumulator,currentvalue) =>  accumulator+currentvalue
); //nếu không có tham số khởi tạo cho accumulator-> accum sẽ lấy phân tử đầu của mảng làm giá trị khởi điểm

console.log(reduced,reduced2);