export default function renderGrid(cat, line) {
    const html = `
    <li class="
        list_cell 
        ${cat} 
        js-cell 
        ${line}">
    </li>
    `
    return html;
}