function MAX(arr){
    return arr.reduce((accum,currentVal)=> {
        return (currentVal> accum) ? currentVal : accum;
    });
}
const arr=[1,2,3,4];
console.log(MAX(arr));