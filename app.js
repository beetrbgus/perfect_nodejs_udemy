var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
// union type
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num1 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
console.log(add(1, 2));
// console.log(add("1","2")); // number 형으로 정의되어 있어서 오류가 남 
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    var stringResult = add(num1, num2);
    console.log(result);
});
