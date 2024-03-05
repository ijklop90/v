import renderCard from "./modules/card.js"
const data = 
[
    {
        name: "Причины",
        data: "Производственная деятельность человека",
        category: "eco",
        folder: 0
    },
    {
        name: "Причины",
        data: "Темпы производства / падение рождаемости",
        category: "demo",
        folder: 0
    },
    {
        name: "Причины",
        data: "Исчерпание углеводов",
        category: "ene",
        folder: 0
    },
    {
        name: "Причины",
        data: "Гонка вооружений </br> Локальные конфликты",
        category: "war",
        folder: 0
    },{
        name: "Последствия",
        data: "Нарушение климата, сокращение биоразнообразия",
        category: "eco",
        folder: 1
    },{
        name: "Последствия",
        data: "Перенаселение / старение наций </br> Усиление проблемы \"север-юг\"",
        category: "demo",
        folder: 1
    },{
        name: "Последствия",
        data: "Энергетический кризис",
        category: "ene",
        folder: 1
    },{
        name: "Последствия",
        data: "Ядерная зима </br> Глобальная катастрофа",
        category: "war",
        folder: 1
    },{
        name: "Пути Решения",
        data: "Разумное потребление </br> Переработка отходов </br> Эволюция технологий производства",
        category: "eco",
        folder: 2
    },{
        name: "Пути Решения",
        data: "Грамотная демографическая политика",
        category: "demo",
        folder: 2
    },{
        name: "Пути Решения",
        data: "Поиск альтернативных источников энергии",
        category: "ene",
        folder: 2
    },{
        name: "Пути Решения",
        data: "Мирное сосуществование </br> Переговоры </br> Общее разоружение",
        category: "war",
        folder: 2
    }
]


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
        }, 0)
    }
    
    const dragEnd = function () {
            this.classList.remove('hide')
    }

    const dragOver = function (event) {
        event.preventDefault();
        
    }

    const dragEnter = function(event) {
        event.preventDefault()
        this.classList.add('hovered')
        this.classList.remove('err')
        this.classList.remove('success')
    }    
    
    const touchMove = function(event) {
        event.preventDefault()
        this.style.position='absolute'
        // console.log(this.style)
    }
    
    const dragLeave = function () {
        this.classList.remove('hovered')
    }


    cells.forEach((el) => {
        let id;
        el.addEventListener('dragover', dragOver)
        el.addEventListener('dragenter', dragEnter)
        el.addEventListener('touchenter', dragEnter)
        el.addEventListener('dragleave', dragLeave)
        el.addEventListener('drop', function() {
                this.append(f)
                if(f.classList[1]===this.classList[1]) {
                    this.classList.add('success')
                }else{
                    this.classList.add('err')
                }
                // console.log(f.classList[1])
                // console.log(this.classList[1])
                this.classList.remove('hovered')
        })
    })

    card.forEach(el => {
        el.addEventListener('dragstart', dragStart)
        el.addEventListener('dragend', dragEnd)
        // el.addEventListener('touchstart', dragStart)
        // el.addEventListener('touchmove', touchMove)
        // el.addEventListener('touchend', dragEnd)
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