const arr1=[1,2,3];
function except(arr,del_arr){
    const temp = [];
    for(let index of arr){
        if(!del_arr.includes(index))
            temp.push(index);
    }
    return temp;
}
const newar=except(arr1,[1,3]);
console.log(newar);