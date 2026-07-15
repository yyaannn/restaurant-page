export default function menu() {
    const div = document.createElement("div");
    div.classList.add("tab-page");
    
    div.innerHTML = `
        <h1>Menu</h1>
        <div class="dish-list">
            <div class="dish-card">
                <h2>Grilled Chicken</h2>
                <p>Served with seasonal vegetables and herb butter.</p>
                <span>$18</span>
            </div>
            <div class="dish-card">
                <h2>Fresh Pasta</h2>
                <p>Tomato basil sauce, parmesan, and garlic bread.</p>
                <span>$15</span>
            </div>
            <div class="dish-card">
                <h2>Chocolate Cake</h2>
                <p>Rich chocolate cake with whipped cream.</p>
                <span>$8</span>
            </div>
        </div>
    `;

    return div;
}
