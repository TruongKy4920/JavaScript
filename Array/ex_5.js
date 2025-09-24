// function countOccur(array,search_ele){
//     let sum=0;
//     for(let key of array)
//         if(key==search_ele) sum++;
//     return sum;
// }
const arr=[1,2,3,4,5,1,6,1];
const output=countOccur(arr,6);
function countOccur(array,search_ele){

return array.reduce((accum,key)=>{
    if(key===search_ele){return accum+1;} 
    else return accum;
},0);

}

// function countOccur(array,search_ele){

// return array.reduce((accum,key)=>{
//     const occurs= (key===search_ele)? 1 : 0;
//     return accum+occurs;
// },0);

// }
const res=countOccur(arr,1);
console.log(res);