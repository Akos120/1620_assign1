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
let noteNum = 2
let sideFunc = addSideNote.bind(notesArray)
saveBtn.addEventListener('click', sideFunc)
saveBtn.addEventListener('click', saveNote)

function saveNote (notesArray) {
    const newNote = document.querySelector('textarea#notes').value
    const newNoteArr = newNote.replace(/\n/, '|||').split('|||')
    notesArray.push({...newNoteArr})
}

function addSideNote (notesArray) {
    let noteTitle = notesArray[0]
    noteNum ++
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(noteTitle))
    document.querySelector('ul').appendChild(li)
}

const sideNote = document.querySelector('ul')

sideNote.addEventListener('click', e => {
    const note = notesArray.find(n => n[title] == e.target.innerText)
    let x = document.querySelector('#notes')
    newNote = note[body]
    x.setAttribute('placeholder', newNote)
})