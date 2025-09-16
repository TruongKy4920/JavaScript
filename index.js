let person={
    name: 23,
    age: 18
};

// for_in có index làm biến duyệt từng key(lấy key làm value) 
// person[index] -> truy cập vào giá trị của obj bằng key mà index đang giữ

for(let index in person){
    console.log(index,person[index]);
}
let colors=['red','blue'];
//nếu duyệt mảng xài for_in thì sẽ xuất cái index của phần tử trong mảng
for(let index in colors){
    console.log(index);
}
//for_of dùng để duyệt mảng và xuất giá trị của từng phần tử
for(let index of colors){
    console.log(index);
}