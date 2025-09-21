const courses=[{id: 1, name:'a'},{id: 2, name:'b'}];
const course=courses.find((course_ele)=>{
    return course_ele.name==='a';
});
console.log(course);
