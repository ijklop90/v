

export default function renderCard(data) {
    const fragment = `
    <div class="wrapper_folder js-cell">
    <div class="list_card ${data.category} js-card" draggable="true">
        <div class="list_card-header">${data.name}</div>
        <div class="list_card-body">${data.data}</div>
    </div>
    </div>
    `
    return fragment
}