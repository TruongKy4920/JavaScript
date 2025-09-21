const numbers=[1,2,3];
console.log(numbers); //se xuat ra kieu mang [1,2,3]
const joined= numbers.join(',');
console.log(joined); //se xuat ra chuoi 1,2,3 (cac phan tu noi nhau bang ',')

const mess='This is first mess';
const splitted=mess.split(' ');// gặp kí tự khoảng trắng là sẽ tách ra làm 1 phần tử của mảng
console.log(splitted); // xuất ra mảng ["This","is",...];
console.log(splitted.join('-')); //xuất ra chuỗi This-is-first-message.