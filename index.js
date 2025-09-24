
// function move(array,index,offset){
//     const valid=index+offset;
//     if(valid<0 || valid>array.length) console.error('Invalid offset')
//     else{
//          let temp= arr[index];
//          arr[index]=arr[valid];
//          arr[valid]=temp;
//     }  
//     return arr;
// }
function move(array,index,offset){
    const valid=index+offset;
    const output=[...array];
    if(valid<0 || valid>array.length) console.error('Invalid offset')
    else{
        
        const element=output.splice(index,1)[0]; 
        //Xóa 1 pt-> truy cập index 0 của mảng "xóa" -> gán giá trị cho element
        output.splice(valid,0,element);

    }  
    return output;
}
const arr=[1,2,3,4];

const output=move(arr,0,1);
console.log(output);
