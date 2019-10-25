'use strict';

//п.1
let arr = [];

arr = fillArray(7);

showElem(arr, '2');
showElem(arr, '4');

//функция заполняет массив случайными числами
function fillArray(count) {
    let tempArray = [];
    for(let i = 0; i < count; i++) {
        tempArray[i] = String(Math.floor(Math.random()*1000)); //*1000 чтобы наверняка было многозначное
    }
    console.log(tempArray);
    return tempArray;
}

//функция выводит в консоль только элементы из массива, что начинаются с цифры 2 или 4
function showElem(elemArray, elem) {
    let i = 0;
    let result = '';
    while (i < elemArray.length) {
        if(elemArray[i].slice(0,1) === elem) {
            result += (elemArray[i]) + ' ';
        }
        i++;
    }

    console.log((result.length > 0)
        ? 'числа, начинающиеся с цифры "'+ elem + '": '+ result
        : 'чисел, начинающихся с цифры "'+ elem + '": нет'
    );
}



//п.2
simpleNumbers (1,100);
function simpleNumbers(min, max) {
    console.log('=========== \nПростые числа: \n===========');
    if (min < 2 ) {min = 2;} //простое число д.б. больше единицы
    for (let i = min; i <= max; i++) {
        let isSimple = true;
        for (let j = min; j < i; j++) {
            if (i % j == 0) {
                isSimple = false;
                break;
            }
        }
        if(isSimple) {
            console.log(i + ' - простое число. Делители этого числа: 1 и ' + i);
        }
    }
}