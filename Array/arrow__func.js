const courses=[{id: 1, name:'a'},{id: 2, name:'b'}];
const course=courses.find((course_ele)=>{ //tham số đầu vào của arrow func là từng phần tử của mảng courses
    return course_ele.name==='a';
});
console.log(course);

//Cách tạo arrow function
// B1:bỏ chữ function và chỉ để ngoặc tham số + "=>" 
// B2:định nghĩa hàm như bth và sử dụng
function sum(a,b){
    return a+b;
}
(a,b)=>{
    return a+b;
} ; //mà làm như này nó sẽ không có chỗ lưu 
const sum = (a,b)=>{ //nêu sẽ lưu kết quả arrow function trong 1 biến hoặc làm tham số của 1 function khác 
    return a+b;
}
