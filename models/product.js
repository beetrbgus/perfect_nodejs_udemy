const fs = require('fs');
const path = require('path');

const products = [];
// module.exports = function Product(){ // ES5 구축자 함수

// }

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        console.log("require.main.path is "  +require.main.path);
        
        const p = path.join(
            require.main.path,
            'data',
            'products.json'
        );

        fs.readFile(p, (err, fileContent) => {
            let products = [];

            if(!err) {
                products = JSON.parse(fileContent);
            }
            
            products.push(this);

            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        const p = path.join(
            require.main.path,
            'data',
            'products.json'
        );

        fs.readFile(p, (err, fileContent) => {
            console.log(err);
            console.log(fileContent);
            
            if(err) {
                return cb([]);
            }

            return cb(JSON.parse(fileContent));
        });
    }
}