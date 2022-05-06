//делегирование событий и ClassList

"use strict";

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');
console.log(btns[0].classList.length); //узнаем колличество классов у данной кнопки: 2

console.log(btns[0].classList.item(0)); //получ название класса(по порядку первого): blue

//окрашиваем кнопки в разные цвета:
// console.log(btns[0].classList.add('red'));//1ая кнопка окрасится в красный

// console.log(btns[0].classList.remove('blue'));//удалили у первой кнопки класс blue

// console.log(btns[0].classList.toggle('blue'));//добавит если его нет и удалит если он был

//проверка налиция класса на определенном элементе
// console.log(btns[1].classList.contains('red'));

//если у 2ой кнопки нету класса red то добавим, если есть то удалим
//идея в том, что при нажатии на первуй кнопку, вторая меняет цвет
btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
});

//тоже самое, только с помощью toggle, if else можно заменить на:
//btns[1].classList.toggle('red');

//Делегирование событий(при клике на любую кнопку вызывать одно и тоже событие)
//можно поидее навесить обработчик на каждую кнопку, но это не оччень хорошо
//решение: сделаем обработчик на родителя кнопок(wrapper) а в методе будем проверять на что кликнули
wrapper.addEventListener('click', (eventt) => {
    if (eventt.target && eventt.target.tagName == "BUTTON") {
        //если хотим чтобы срабат на син только кнопку: if (eventt.target && eventt.target.classList.contains('blue')) 
        console.log("Hello");
    }
});

//вместо кода выше можно с помощью перебора сделать:
// btns.forEach(btn => {
//     btn.addEventListener('click',()=> {
//         console.log('Hello');
//     });
// });


