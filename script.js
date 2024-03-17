import renderCard from "./modules/card.js"
import data from './data.js'


const addCard = (text) => {
    const folder = document.querySelectorAll('.folder')

    text.forEach(el=>{
        folder[el.folder]
            .insertAdjacentHTML('beforeend', renderCard(el))
    })
}

const dragAndDrop = async  (fetchData) => {
    await fetchData;
    
    let f;

    const card = document.querySelectorAll('.js-card')
    const cells = document.querySelectorAll('.js-cell')

    const dragStart = function () {
        f=this
        setTimeout(() => {
            this.classList.add('hide')
            console.log(234)
        }, 0)
    }
    
    const dragEnd = function () {
        this.classList.remove('hide')
        this.classList.remove('success')
        this.classList.remove('err')
    }

    const dragOver = function (event) {
        event.preventDefault();
        
    }

    const dragEnter = function(event) {
        event.preventDefault()
        this.classList.add('hovered')
        this.classList.remove('err')
    }
    
    const dragLeave = function () {
        this.classList.remove('hovered')
    }

    const drop = function () {
        if(this.childNodes.length<=1){
            this.append(f)
            if(f.classList[1]===this.classList[1]&&f.classList[3]===this.classList[3]) {
                f.draggable = false;
                this.classList.add('success')
                console.log(f.style.cursor = "no-drop")
            }else{
                this.classList.add('err')
            }
            this.classList.remove('hovered')
        }
    }

    cells.forEach((el) => {
        el.addEventListener('dragover', dragOver)
        el.addEventListener('dragenter', dragEnter)
        el.addEventListener('touchenter', dragEnter)
        el.addEventListener('dragleave', dragLeave)
        el.addEventListener('drop', drop)
    })

    card.forEach(el => {
        el.addEventListener('dragstart', dragStart)
        el.addEventListener('dragend', dragEnd)
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

addCard(data);
openFolder();
dragAndDrop(data)