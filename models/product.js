const fs = require('fs');
const path = require('path');

const p = path.join(
    require.main.path,
    'data',
    'products.json'
);
const getProductsFromFile = cb => {

    fs.readFile(p, (err, fileContent) => {
        console.log(err);
        console.log(fileContent);
        
        if(err) {
            return cb([]);
        }

        return cb(JSON.parse(fileContent));
    });
}
// module.exports = function Product(){ // ES5 구축자 함수

// }

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);

            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}