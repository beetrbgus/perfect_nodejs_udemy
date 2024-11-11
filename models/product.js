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
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        this.id = Math.random().toString();
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

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p=> p.id === id);
            cb(product);
        });
    }
}