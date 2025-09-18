let labels=[{label: '$', tooltips: 'Inexpensive', minprice: 0, maxprice: 10},
            {label: '$$', tooltips: 'Moderate', minprice: 10, maxprice: 20},
            {label: '$$$', tooltips: 'Expensive', minprice: 30, maxprice: 40},
];

let restaraunts=[{avgPrice:5},{avgPrice:16},{avgPrice:36}];

function Price_Range(price_tag){
    let min=0;
    let max=0;
    for(let key of labels)
        if(key.label===price_tag)
        {
            for(let key1 in key) console.log(key[key1]); //in ra thong tin cua button price
            min=key.minprice;
            max=key.maxprice;
        }

    for(let index of restaraunts)
        if(index.avgPrice>=min && index.avgPrice<=max) console.log(index);

}
