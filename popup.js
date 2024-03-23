import alert from './render/alert.js'
export default function popup(num) {
    const root = document.getElementById('root')
    if(num>=15){
        alert(root)
        closeAlert()
    }
}

const closeAlert = () => {
    const popup = document.querySelector('.cover')
    const btn = document.querySelector('.close-alert')
    btn.addEventListener('click', () => {
        popup.remove()
    })
}