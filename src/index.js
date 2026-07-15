import "./style.css";
import home from "./home.js";
import menu from "./menu.js";
import about  from "./about.js";

const content = document.querySelector("#content");
const btns = document.querySelectorAll("button");

function loadPage(page, activeBtn) {
    content.replaceChildren(page());

    btns.forEach(btn => {
        btn.classList.toggle("active", btn === activeBtn);
    });
}

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");

homeBtn.addEventListener("click", () => loadPage(home, homeBtn));
menuBtn.addEventListener("click", () => loadPage(menu, menuBtn));
aboutBtn.addEventListener("click", () => loadPage(about, aboutBtn));

loadPage(home, homeBtn);