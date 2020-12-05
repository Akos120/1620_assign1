const darkMode = document.querySelector('.button2');

darkMode.addEventListener('click', textChange)

darkMode.addEventListener('click', e => {
    document.querySelector('.side-bottom').classList.toggle("dark-mode");
    document.querySelector('.side-top').classList.toggle("dark-mode");
    document.querySelector('textarea#notes').classList.toggle("dark-text");
    document.querySelector('.main').classList.toggle("dark-mode");
})

function textChange() {
    if (darkMode.innerHTML == 'Dark Theme') {
        darkMode.innerHTML = 'Light Theme';
    } else {
        darkMode.innerHTML = 'Dark Theme';
    }
}