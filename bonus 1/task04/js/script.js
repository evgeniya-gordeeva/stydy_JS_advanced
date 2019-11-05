'use strict';

//alert('');
let number = randomInteger(1, 100);
let userNumber = prompt('Угадай число от 1 до 100');

console.log(number);

while(true) {
    if(!isNaN(userNumber*1) && userNumber*1 != '' && userNumber*1 != 0) {
        if(userNumber*1 === number) {
            userNumber = prompt('Поздравляю вы угадали!!!');
            userNumber = prompt('Хотите сыграть еще?');
            if (userNumber === null) break;
            number = randomInteger(1, 100);
            console.log(number);
        } else if(userNumber*1 > number) {
            userNumber = prompt('Меньше!');
        } else {
            userNumber = prompt('Больше!');
        }
    } else {
        userNumber = prompt('Введи число от 1 до 100!');
    }

    if (userNumber === null) break;
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}