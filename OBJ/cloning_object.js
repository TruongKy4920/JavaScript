//3 Cách để clone obj
const circle={
    radius: 1,
    draw(){
        console.log('draw')
    }
};
const another={};
//C1
 for(let key in circle){
     another[key]=circle[key];
}
//C2 dùng obj Object để sao chép obj nguồn vào obj đối số rỗng
const another1= Object.assign({},circle);
//Ngoài ra có thể thêm thuộc tính nữa cho another
const another2=Object.assign({color: 'red'},circle);
//C3 dùng toán tử spread 
const another3={...circle};
