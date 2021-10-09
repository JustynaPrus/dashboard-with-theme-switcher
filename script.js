const button = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
const pattern = document.querySelector('.top_pattern');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const section = [...document.querySelectorAll('.section')];
const number = [...document.querySelectorAll('.number')];
const bigNumber = [...document.querySelectorAll('.big_number')];
const buttonSwitch = document.querySelector('div.switch');
const heading = [...document.querySelectorAll('.heading')];
const uppercase = document.querySelector('.uppercase');

button.addEventListener('click', changeTheme);

function changeTheme() {
    circle.classList.toggle('change');
    pattern.classList.toggle('change');
    body.classList.toggle('change');
    h1.classList.toggle('change');
    h2.classList.toggle('change');
    section.forEach(sec => sec.classList.toggle('change'));
    number.forEach(sec => sec.classList.toggle('change'));
    bigNumber.forEach(sec => sec.classList.toggle('change'));
    buttonSwitch.classList.toggle('change');
    heading.forEach(text => text.classList.toggle('change'));
    uppercase.classList.toggle('change');
}