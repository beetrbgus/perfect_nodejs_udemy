const products = [];
// module.exports = function Product(){ // ES5 구축자 함수

// }

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        products.push(this);    
    }

    static fetchAll() {
        return this.products;
    }
}