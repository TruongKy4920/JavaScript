

const grades=[80,80,50];
function grade(grades){
    let sum=0;
    for(let index of grades){
        sum+=index;
    }
    let avg= sum/grades.length;
    if(avg<60) console.log('F');
    else if(avg<70) console.log('D');
    else if(avg<80) console.log('C');
    else if(avg<90) console.log('B');
    else console.log('A');
}
grade(grades);