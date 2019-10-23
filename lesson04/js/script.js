'use strict';

let str = prompt('Введите строку');

//внимание! вывожу в документ, а не в консоль
document.write(trimStr(str));

function trimStr(data) {
    if(typeof data != "string") {
        alert('Вы ввели НЕ строку');
    } else {
        data = data.trim();
        return (data.length > 30 ? data.substr(0, 30)+'...' : data);
    }
}