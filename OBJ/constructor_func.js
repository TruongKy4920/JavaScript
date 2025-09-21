//camel annotation: oneTwoThree
//Pascal annotation: OneTwoThree
function Circle(Radius){
    this.Radius=Radius;
    this.draw=function(){
        console.log('draw');
    }
}

const Circle1=new Circle(3);
console.log(Circle1);
// Dùng toán tử new sẽ có 2 thứ diễn ra (toán tử this là 1 reference)
//JS cấp phát động 1 đối tượng rỗng trên heap -> Circle1={};
//-> vào hàm constructor (sử dụng sau toán tử new) -> Từ "this" cấp phát động thuộc tính/hàm cho obj
// -> trỏ tới đối tượng rỗng để thêm property cho đối tượng
//ĐƠN GIẢN THÌ ĐÂY LÀ HÀM TẠO CẤP PHÁT ĐỘNG GIỐNG C++