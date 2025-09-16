function star(rows){
    function stars(number){
        let star_string='';
        while(true){
            star_string+='*';
            number--;
            if(number===0) break;
        }
        return star_string;
    }
    for(let i=0;i<=rows;i++){
        if(i==0) console.log(null);
        else{
            console.log(stars(i));
        }
    }
}
star(10);