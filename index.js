// Đặc tính cấp phát động của JS
// -Ta có thể thêm hoặc xóa thuộc tính/hàm của JS bất kỳ lúc nào 
let circle={
    radius: 1
};
//có thể thấy là khai báo 1 circle chỉ có 1 thuộc tính radius
//nhưng 2 dòng dưới cho phép thêm hàm draw và thuộc tính color thì lúc này
//Obj circle có 3 thuộc tính là radius, color và draw
circle.color='yellow';
circle.draw=function(){
    console.log('draw');
}

//Có thể xóa đi thuộc tính bất kỳ bằng toán tử delete
delete circle.color;
delete circle.radius;

console.log(circle);



