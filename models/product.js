// @deprecated 
// 파일 시스템에서 가져오는 방법 
// const fs = require('fs');
// const path = require('path');
// const p = path.join(
//     require.main.path,
//     'data',
//     'products.json'
// );
const Cart = require('./cart');
const db = require('../util/db_connection');

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
        return db.execute(
            `INSERT INTO products(title, price, description, imageUrl) values(?, ? , ? , ?)`
            , [this.title, this.price, this.description, this.imageUrl]
        );
        
        // getProductsFromFile(products => {
        //     if(this.id) {
        //         const existingProductIndex = products.findIndex(prod => prod.id === this.id);
        //         console.log("existingProductIndex is ", Number(existingProductIndex));
                
        //         const updatedProducts = [... products];
        //         updatedProducts[existingProductIndex] = this;

        //         fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
        //             console.log(err);
        //         });
        //     } else {
        //         this.id = Date.now().toString();
        //         products.push(this);
        //         fs.writeFile(p, JSON.stringify(products), (err) => {
        //             console.log(err);
        //         });
        //     }
            
        // });
    }

    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }

    static findById(id) {
        return db.execute(`SELECT * FROM products WHERE id = ${id}`);
    }

    // static findById(id, cb) {
    //     getProductsFromFile(products => {
    //         const product = products.find(p=> p.id === id);
    //         cb(product);
    //     });
    // }

    static deleteById(id) {
        getProductsFromFile(products => {
            const product = products.find(prod => prod.id === id);
            const updatedProducts = products.filter(product=> product.id !== id);

            fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                if(!err) {
                    Cart.deleteProduct(id, product.price);
                } else {
                    console.log(err);
                }
            });
            
        });
    }

}