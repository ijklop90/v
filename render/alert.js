export default function alert(root) {
    root.insertAdjacentHTML('beforeend', `
    <div class="cover">
        <div class="alert">
            <div class="head">
                <span class="head-alert">   </span>
                <span class="close-alert">X</span>
            </div>
            <hr/>
            <div class="alert-content">
                <i class="large material-icons ico">done</i><h1 class="alert-text">Успех!!!</h1>
            </div>
        </div>
    </div>
    `)
}