const nums=[1,3,2,4];
console.log(nums.sort());
console.log(nums.reverse());

const nums2= nums.sort((a,b)=>{
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;
}); //sort tang dan
const nums3= nums.sort((a,b)=>{
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;
}); //sort giam dan
console.log(nums3);

const courses=[{id: 1, name:'a'},{id: 2, name:'b'}];
const course= courses.sort((a,b)=>{
    const nameA=a.name.toLowerCase();
    const nameB=b.name.toLowerCase();
    if(a.name>b.name) return 1;
    if(a.name<b.name) return -1;
    return 0;
}); //sort tang dan
console.log(course);