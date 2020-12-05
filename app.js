const darkMode = document.querySelector('.button2');

darkMode.addEventListener('click', textChange)

darkMode.addEventListener('click', e => {
    document.querySelector('.side-bottom').classList.toggle("dark-mode");
    document.querySelector('.side-top').classList.toggle("dark-mode");
    document.querySelector('textarea#notes').classList.toggle("dark-text");
    document.querySelector('.main').classList.toggle("dark-mode");
    document.querySelector('.button1').classList.toggle("dark-button");
    document.querySelector('.button2').classList.toggle("light-button");
    document.querySelector('.button3').classList.toggle("dark-button");
    document.querySelector('.button4').classList.toggle("dark-button");
    
})

function textChange() {
    if (darkMode.innerHTML == 'Dark Theme') {
        darkMode.innerHTML = 'Light Theme';
    } else {
        darkMode.innerHTML = 'Dark Theme';
    }
}

const cancel = document.querySelector('.button4');

cancel.addEventListener('click', e => {
        document.querySelector('textarea').style.display = 'none';
        document.querySelector('.bottom-button').style.display = 'none';
})

const newNote = document.querySelector('.button1');

newNote.addEventListener('click', e => {
    document.querySelector('textarea').style.display = 'block';
    document.querySelector('textarea').value = '';
    document.querySelector('.bottom-button').style.display = 'flex';
    
})
