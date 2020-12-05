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

const appearNote = document.querySelector('.button1');

appearNote.addEventListener('click', e => {
    document.querySelector('textarea').style.display = 'block';
    document.querySelector('textarea').value = '';
    document.querySelector('.bottom-button').style.display = 'flex';
    
})

const notesArray = [
    {title:"note one", body:"some text 1"}, 
    {title:"note two", body:"some text 2"}
]

const saveBtn = document.querySelector('.button3')
const noteArea = document.querySelector('#notes')

let sideFunc = addSideNote.bind(notesArray)
saveBtn.addEventListener('click', saveNote)

function saveNote (arr) {
    const newNote = document.querySelector('textarea#notes').value
    const newNoteArr = newNote.replace(/\n/, '|||').split('|||')
    notesArray.push({title: newNoteArr[0], body: newNoteArr[1]})
    console.log(notesArray)
}

let num = 2
saveBtn.addEventListener('click', sideFunc)

function addSideNote (arr) {
    let noteTitle = notesArray[num][0]
    num++
    let list = document.createElement('li')
    list.appendChild(document.createTextNode(noteTitle))
    document.querySelector('ul').appendChild(list)
}

const sideNote = document.querySelector('ul')

sideNote.addEventListener('click', e => {
    const noteBody = notesArray.find(n => n[0] == e.target.innerText)
    let x = document.querySelector('#notes')
    newNote = noteBody[1]
    x.setAttribute('placeholder', newNote)
})