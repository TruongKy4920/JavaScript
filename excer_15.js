const array=['', 2,7,'Ky',0,2.3, false, true, undefined,null];
function countTruthy(array){
    let count=0;
    for(let index of array){
        if(index !== '' && 
            index !== 0 && 
            index !== undefined && 
            index !== null && 
            index !== false ) count++;
    }
    console.log(count);
}
countTruthy(array);

function countTruthy2(array){
    let count=0;
    for(let index of array){
        if(index) count++; //nếu các giá trị index nằm trong phạm vi falsy thì nó sẽ mặc định là false
        //Nếu ko nằm trong các giá trị falsy thì nó được coi là truthy(true)
    }
    console.log(count);
}
countTruthy2(array);