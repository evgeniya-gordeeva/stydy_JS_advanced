'use strict';


//п.1
let lang = prompt('Укажите "RU" или "EN"');
let langRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
let langEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if(lang) {
    //через if
    if(lang.toLowerCase() == 'ru') {
        console.log(langRu);
    } else if (lang.toLowerCase() == 'en') {
        console.log(langEn);
    } else {
        console.log('Введенная строка не удовлетворяет заданию');
    }

    //через switch-case
    switch (lang.toLowerCase()) {
        case 'ru':
            console.log(langRu);
            break;
        case 'en':
            console.log(langEn);
            break;
        default:
            console.log('Введенная строка не удовлетворяет заданию');
    }

    //через многомерный массив без ифов и switch.
    let langArr = [];
    langArr['ru'] = langRu;
    langArr['en'] = langEn;
    console.log(langArr[lang]);
}


//п.2
let namePerson = prompt('Укажите Имя"');

namePerson.toUpperCase() == ('АРТЕМ' || 'АРТЁМ')
    ? console.log('директор')
    : (namePerson.toUpperCase() == 'МАКСИМ'
        ? console.log('преподаватель')
        : console.log('студент')
    );