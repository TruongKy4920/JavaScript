//speed limit la 70, neu dưới thì xuất
//moi 5 km tang la 1 point (72->74 , 76-79 van ok)
//hơn 12 point là mất bằng
//Math.floor(1.3) sẽ làm tròn xuống còn 1

function Checkspeed(speed){
    const speed_limit=70;
    if(speed <= speed_limit) return 'OK';
    else {
        let exceed_limit=Math.floor(speed) - speed_limit;

        if(exceed_limit<5) return 'OK';

        else if(exceed_limit==5) return "Point: "+ 1;

        else{
            let count=0;
            while(true){
                if(exceed_limit-5 >0){
                    exceed_limit=exceed_limit-5;
                    count++;
                } 
                else break;
            }
            if(count<=12) return "Point: "+ count;
            else return 'License Suspended';
        }
    }
}
console.log(Checkspeed(92.1));

function Checkspeed2(speed){
    const speed_limit=70;
    const point_per_km=5;
    if(speed <= speed_limit) return 'OK';
    else {
        let exceed_limit_point=Math.floor((speed - speed_limit)/5);

        if(exceed_limit_point==0) return 'OK';

        else if(exceed_limit_point==1) return "Point: "+ 1;

       
        else if(exceed_limit_point<=12) return "Point: "+ exceed_limit_point;
        else return 'License Suspended';
        
    }
}
console.log(Checkspeed2(100.1));