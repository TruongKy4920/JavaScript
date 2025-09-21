const courses=[{id: 1, name:'a'},{id: 2, name:'b'}];
const course=courses.find(function(course_ele){ //course_ele tuong chung cho moi phan tu trong array 
    return course_ele.name==='a';
});
console.log(course);
