export default function about() {
    const div = document.createElement("div");
    div.classList.add("tab-page");
    
    div.innerHTML = `
        <h1>About Us</h1>
        <p>We are a small local restaurant focused on comfort food and friendly service.</p>
        <p>Visit us for dinner, celebrations, or a relaxed meal with friends.</p>
    `;

    return div;
}
