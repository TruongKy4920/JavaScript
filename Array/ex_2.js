const arr1=[1,2,3];
function include_fake(arr,num){
    let i=0;
    while(i<= arr.length){
        if(arr[i]==num) return true; 
        i++;
    }
    return false;
}

console.log(include_fake(arr1,4));