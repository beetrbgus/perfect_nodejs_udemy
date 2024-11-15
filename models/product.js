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
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductsFromFile(products => {
            if(this.id) {
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                console.log("existingProductIndex is ", Number(existingProductIndex));
                
                const updatedProducts = [... products];
                updatedProducts[existingProductIndex] = this;

                fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                    console.log(err);
                });
            } else {
                this.id = Date.now().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            }
            
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