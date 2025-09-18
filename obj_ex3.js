function place(street,city,zipcode){
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
}
const place1= new place('a','b','c');
const place2= new place('a','b','c');
const place3=place1;
//so sánh từng property
function areEqual(address1,address2){
   return address1.street===address2.street 
   && address1.city===address2.city
   && address1.zipcode===address2.zipcode;
}
function areSame(address1,address2){
   return address1===address2;
}



console.log(areEqual(place1,place2));
console.log(areSame(place1,place2));
console.log(areSame(place1,place3));

