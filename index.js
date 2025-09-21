const nums=[1,3,-2,4];
const allPositive= nums.every(num=> {return num>=0;}); 
console.log(allPositive);
//method every nay sẽ thực hiện func mình viết cho mọi phần tử
//Nếu gặp 1 phần tử false với num=>0 -> ngưng duyệt mảng và trả false, nếu đúng hết trả true
const nums2=[-1,-3,-2,4];
const atleast1Positive = nums2.some(num=> {return num>=0;});
console.log(atleast1Positive);
//giống every về chức năng-> chỉ cần 1 phần tử true với num>=0->ngưng duyệt và trả true.


