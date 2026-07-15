export default function home() {
    const div = document.createElement("div");
    div.classList.add("tab-page");

    div.innerHTML = `
        <h1>Welcome to Our Restaurant</h1>
        <p>Enjoy fresh food, warm service, and a cozy place to share a meal.</p>
        <p>We serve simple dishes made with quality ingredients every day.</p>
    `;

    return div;
}
