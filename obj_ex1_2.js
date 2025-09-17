//Cách 1 constructor function
function place(street,city,zipcode){
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
    this.address=function(){
        console.log(`Address is ${street} street , ${city} city, code: ${zipcode} `);
    }
}
const place1= new place('Vo Van Kiet','HCM','70000');

//Cách 2 obj cơ bản 
const address2={
    street:'a',
    city:'b',
    zipcode:'c'
};
function showAddress(address){
    for(let key in address)
        console.log(key,address[key]);
}
//Cách 3 factory funtion
function place3(street,city,zipcode){
    return {
    street,
    city,
    zipcode,
    showAddress(){
        console.log(`Address is ${street} street , ${city} city, code: ${zipcode} `);
    }
};
} 
const placenew=place3('Cao Van Lau','Tien Giang',70000);
