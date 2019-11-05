'use strict';

let startYear = +prompt('Введите начальный год');
let endYear = +prompt('Введите конечный год');

let fromYear, toYear;

if(startYear > endYear) {
    fromYear = endYear;
    toYear = startYear;
} else {
    fromYear = startYear;
    toYear = endYear;
}

for(let i = fromYear; i <= toYear; i++) {
    if(isLeapYear(i)){
        console.log(i);
    }
}

function isLeapYear(year) {
    return new Date(year, 1, 29).getDate() === 29;
}
