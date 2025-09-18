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

Sự khác nhau khi tạo obj bằng let và const

Tại sao khi khai báo obj circle mà ta vẫn tùy ý thay đổi giá trị các biến, thêm/xóa được thuộc tính mới

->Vì  const không nhắm vào các thuộc tính(properties) của circle mà nhắm vào cái biến circle
-> Khi tạo 1 obj trong JS thì ta cấp phát động 1 địa chỉ cho biến obj đó
-> Nếu xài let _> được phép gán lại địa chỉ obj mới cho circle
->Nếu xài const -> không thể gán lại địa chỉ obj mới cho circle 
VD: 
let circle={
    radius: 1
};
circle = {radius: 2}; //Được vì xài let

const circle={
    radius: 1
};
circle = {radius: 2}; //không được vì xài const

OBJECT LITERAL SYNTAX (CÚ PHÁP TẠO OBJ TRONG JS)
   I
   V
let x= {};

-> JavaS sẽ hiểu là x= new Object(); 

***function Object(){} là một constructor function được xây sẵn trong JS, bất cứ đối tượng nào xài object Literal đều sử dụng function object này.

TRONG JAVASCRIPT CÓ HÀM TẠO OBJECT (OBJECT CONSTRUCTOR, đây là hàm có sẵn của JS) khi ta sử dụng OBJECT LITERAL

->Khi ta tạo obj circle từ hàm Factory Function(Factory Func có trả về OBJ Literal) --> JS ngầm tự động sử dụng hàm (OBJECT CONSTRUCTOR) 
để tạo đối tượng cho ta.
-> BẤT CỨ OBJ NÀO TRONG JS ĐỀU CÓ HÀM TẠO OBJ CHO NÓ. 
VD:
 new String() //đây là đối tượng string, ngoài ra có thể xài “”,’’ để nhanh chóng tạo đối tượng
 new Boolean()// obj bool, có thể dùng true, false để tạo nhanh dối tượng
 New Number()// có thể xài số bất kỳ để tạo đối tượng 1,2,3,5.6

-->FUNCTION TRONG JS CŨNG LÀ ĐỐI TƯỢNG VÀ CÓ HÀM TẠO ĐỐI TƯỢNG CHO NÓ LUÔN
Trong JS có 1 hàm constructor tên là "Function()" nên mỗi khi mình tạo function là engine JS sẽ xài cái hàm đó để tạo hàm :))) 


function Circle(Radius){
    this.Radius=Radius;
    this.draw=function(){
        console.log('draw');
    }
}

const Circle1=new Circle(3);
console.log(Circle1);

 Để kiểm tra hàm tạo obj của func Circle -> vào console của web và ấn Circle.constructor
 -> JS sẽ hiện ra cái hàm dùng để tạo hàm Circle

Cách hoạt động ngầm của hàm tạo obj function là:
    I
    V
const Circle2= new Function('radius',` 
    this.Radius=Radius;
    this.draw=function(){
        console.log('draw');
    }`) //tất cả tham số truyền vào đều là string , dùng backtick cho string nhiều dòng

khi dùng obj function Circle sẽ có 2 hàm là call và apply

Circle.call({},1); -> tham số đầu tiên của call là 1 object rỗng 
->nó sẽ được cái this trong hàm constructor trỏ vào obj rỗng đó để thêm tuần tự các thuộc tính và thêm tuần tự các đối số sau đó
-> Cách sử dụng hàm call này tương tự syntax const Circle1=new Circle(3); 
-> nếu bỏ từ new thì JS mặc định trỏ về đối tượng toàn cục tên là window :

Circle.call(window,1); ~ const Circle1=Circle(3);

Circle.apply({},[1,2,3]); -> apply cũng tương tự call nhưng đối số truyền vào là 1 mảng thay vì khai báo từng đối số cụ thể
const Circle1=new Circle(3);