let person={
    name: "ky",
    age: 18
};
//Với vòng lặp for_of thì cái biến index sẽ đóng vai trò là cái biến giữ giá trị của các key và xuất
//ra với mỗi lần duyệt 

for(let index of person){
    console.log(index);
}