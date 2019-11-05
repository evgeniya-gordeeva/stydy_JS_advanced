'use strict';

let number1 = prompt('Введите первое число');
while(isNaN(number1) || number1 === '' || number1 === null) {
    number1 = prompt('Введите первое число');
}

let number2 = prompt('Введите второе число');
while(isNaN(number2) || number2 === '' || number2 === null) {
    number2 = prompt('Введите второе число');
}


function compareNumbers(num1, num2) {
    if (num1 === num2) {
        return 'Числа равны.'
    } else {
        if (num1 > num2) {
            return 'Первое число больше второго';
        } else {
            return 'Второе число больше первого';
        }
    }
}

console.log('Вы ввели числа ' + number1 + ' и ' + number2 + '. ' + compareNumbers(number1, number2));