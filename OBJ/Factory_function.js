let circle={
    Radius: 1,
    draw(){
        console.log('Draw');
    }
};

function createCircle(rad){ //nếu tên của tham số giống key Radius : Radius
                            // I
                            // V
    return {
            Radius: rad, // ta có thể để 1 chữ Radius và JS tự động gán giá trị tham số
            //Radius,            // vào key 
            draw(){ //syntax đầy đủ hàm trong obj là draw: function(){}
                console.log('Draw');
            }
        };
}

//Tạo 1 đối tượng sử dụng factory function
const circle1=createCircle(1);
console.log(circle1);