'use strict';

let sum = 0;

while(true) {
    let number = prompt('Введите число, или нажмите отмена, чтобы узнать сумму введеных чисел.');

    if(!isNaN(number*1)) {
        sum += number*1;
    }

    if (number === null) break;

}
console.log(sum);


