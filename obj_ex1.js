function place(street,city,zipcode){
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
    this.address=function(){
        console.log(`Address is ${street} street , ${city} city, code: ${zipcode} `);
    }
}
const place1= new place('Vo Van Kiet','HCM','70000');

//Cách 2
const address2={
    street:'a',
    city:'b',
    zipcode:'c'
};
function showAddress(address){
    for(let key in address)
        console.log(key,address[key]);
}
