'use strict';

let currentDate = new Date();

function formatDate(date) {
    let hours = (date.getHours() < 10) ? '0'+ date.getHours() : date.getHours();
    let minutes = (date.getMinutes() < 10) ? '0'+ date.getMinutes() : date.getMinutes();
    let seconds = (date.getSeconds() < 10) ? '0'+ date.getSeconds() : date.getSeconds();
    let day = (date.getDate() < 10) ? '0'+ date.getDate() : date.getDate();
    let month = (date.getMonth()+ 1 < 10) ? '0'+ (date.getMonth()+ 1) : (date.getMonth()+ 1);
    //getMonth возвращает месяцы от 0 до 11 - поэтому прибавляем 1

    return (hours+':'+minutes+':'+seconds+' ' +day+'.' +month+ '.' + date.getFullYear());
}
//Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
//upd: вывела в консоль, потому что был уговор на страницу ничего не выводить

console.log(formatDate(currentDate));


