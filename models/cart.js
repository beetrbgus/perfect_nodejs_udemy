const fs = require('fs')
const path = require('path')

const p = path.join(
    require.main.path,
    'data',
    'cart.json'
);
module.exports = class Cart {
    static addProduct(id, productPrice) {
        // 이전의 카트 가져오기
        fs.readFile(p, (err, fileContent) => {
            let cart = {products : [], totalPrice : 0};
            if(!err) {
                cart = JSON.parse(fileContent);
            }

            // 카트 분석하기 => 동일한 제품 존재하는지 찾기
            const existingProductIndex = cart.products.findIndex(product => product.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;

            // 새로운 제품 추가하기 / 수량 증가시키기
            if(existingProduct) {
                updatedProduct = {...existingProduct}; 
                updatedProduct.qty = updatedProduct.qty = 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = {id : id, qty : 1};
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice += productPrice;

            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        });
    }


}