const movies = [
  { title: 'x', year: 2017, rating: 3.8 },
  { title: 'm', year: 2018, rating: 4.5 },
  { title: 'z', year: 2017, rating: 4.2 },
  { title: 'q', year: 2018, rating: 4.3 },
  { title: 'b', year: 2017, rating: 4.7 },
  { title: 'k', year: 2018, rating: 3.6 }
];
//ALL Mov year 2018 w rate >4;
//Sort by rating
//Decending
//Console log title.
function filter_movie(arr){
    const temp=[...arr];
    let temp2=temp.filter(movie=>{
        return movie.year===2018 && movie.rating>=4;
    }).sort((a,b)=> { 
                    if(a.rating>b.rating) return -1;
                    if(a.rating<b.rating) return 1;
                    return 0;}
    );
    return temp2;
}
const res=filter_movie(movies);
res.forEach(movie=>{
    console.log(movie.title);
})

//solu cua thay

    let solu =movies.filter(movie=>{
        return movie.year===2018 && movie.rating>=4;
    }).sort((a,b)=> a.rating-b.rating //Nếu a-b >0 thì là 1, a-b<0 thì -1 và a==b thì 0
    ).reverse().map(movie=>movie.title);
console.log(solu);
