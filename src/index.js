import "./style.css";
import home from "./home.js";
import menu from "./menu.js";
import about  from "./about.js";

const content = document.querySelector("#content");

document.querySelector("#homeBtn").addEventListener("click", () => {
    content.replaceChildren(home());
});
document.querySelector("#menuBtn").addEventListener("click", () => {
    content.replaceChildren(menu());
});
document.querySelector("#aboutBtn").addEventListener("click", () => {
    content.replaceChildren(about());
});