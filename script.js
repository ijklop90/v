import renderCard from "./render/card.js"
import renderGrid from "./render/grid.js"
import data from './data.js'
import { dragAndDrop } from "./dragAndDrop.js"

const addGrid = () => {
    const grid = document.getElementById('li')
    const cat = ["eco", "ene", "demo"]
    const line = ["first", "second", "third", "fourth", "fifth"]
    
    line.forEach(x=>{
        cat.forEach(y=>{
            grid.insertAdjacentHTML('beforeend', renderGrid(y, x))
        })
    })
    
}

const addCard = (text) => {
    const folder = document.querySelectorAll('.folder')
    const shuffle = (array) => {
        let m = array.length, t, i;
      
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        return array;
      }

    shuffle(text).forEach(el=>{
        folder[el.folder]
            .insertAdjacentHTML('beforeend', renderCard(el))
    })
}


const openFolder = () => {
    const folders = document.querySelectorAll('.js-folder')
    const folder = document.querySelectorAll('.folder')
    const closeBtns = document.querySelectorAll('.close')

    folders.forEach((el, id)=> {
        el.addEventListener('click', function() {
            folder[id].classList.remove('hide_folder');
        })
    })

    closeBtns.forEach((el, id) => {
        el.addEventListener('click', () => {
            folder[id].classList.add('hide_folder')
        })
    })
}

addGrid();
addCard(data);
openFolder();
dragAndDrop(data);