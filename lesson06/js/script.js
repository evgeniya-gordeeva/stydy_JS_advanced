'use strict';

let week = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресение'];

// из задания: "Вывести на экран все дни недели"
// в заданиии указано вывести НА ЭКРАН, но в группе мы договорились что выводим только В КОНСОЛЬ.
// делаю в консоль, хотя это не по заданию

console.log('=============\n1.Вывести "на экран" все дни недели\n=============');
console.log(week.join(', '));


console.log('=============\n2.Каждый из них с новой строчки\n=============');
for (let i = 0; i < week.length; i++) {
    console.log(week[i]);
}


console.log('=============\n3.Выходные дни - курсивом\n=============');
for (let i = 0; i < week.length; i++) {
    if(i === 5 || i === 6) {
        console.log('%c' + week[i], 'font-style: italic;');
    } else {
        console.log(week[i]);
    }
}

console.log('=============\n4.Текущий день - жирным шрифтом\n=============');
for (let i = 0; i < week.length; i++) {
    if(i === (new Date().getDay()-1)) {
        console.log('%c' + week[i], 'font-weight: bold;');
    } else {
        console.log(week[i]);
    }
}




