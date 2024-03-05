const host = window.location;
const folder = document.querySelectorAll('.folder')
const fetchData = async () => {
await fetch(`${host}data.json`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach((el) => {
            folder[el.folder].insertAdjacentHTML('beforeend', `
            <div class="wrapper_folder js-cell">
            <div class="list_card ${el.category} js-card" draggable="true">
                <div class="list_card-header">${el.name}</div>
                <div class="list_card-body">${el.data}</div>
            </div>
            </div>
            `)
        });
    })
}

export default fetchData();