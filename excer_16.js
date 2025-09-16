const movie={
    title: 'a',
    released: 2015,
    direct: 'b'
};
function showProperties(movie){
    for(let index in movie){
        if(typeof movie[index] === 'string') console.log(index,movie[index]);
    }
}
showProperties(movie);