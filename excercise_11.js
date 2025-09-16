function landscape(width,height){
    if(width>height) return true;
    else return false;
}
let res=landscape(3,3);
console.log(res);

//cach cải thiện code
function landscape2(width,height){
    return (width>height);
}
console.log(landscape2(2,3));