var Product = require('../models/product');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var products = [
    new Product({
        imagePath :'https://ichef-1.bbci.co.uk/news/660/media/images/79672000/jpg/_79672232_157967953.jpg',
        title:'potatoes',
        description: 'Potatoes for sale',
        price: 60
    }),
    new Product({
        imagePath :'https://4.imimg.com/data4/KR/EN/MY-3831893/natural-250x250.jpg',
        title:'women vig',
        description: 'vig for women for sale',
        price: 30
    }),
    new Product({
        imagePath :'https://3.imimg.com/data3/DY/DP/MY-15902177/hair-wigs-250x250.jpeg',
        title:'men vig',
        description: 'men vig for sale',
        price: 50
    }),
];

var done = 0;
for(var i = 0 ; i < products.length; i++){
    products[i].save(function(err,result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
    mongoose.Promise = global.Promise;
}
