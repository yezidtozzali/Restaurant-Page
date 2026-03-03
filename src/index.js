import "./style.css";
import restaurantImg from './restaurant.jpg';
import story from "./story.js";
import menu from "./menu.js";
import footer from "./footer.js";

const content = document.getElementById("content");


const home = document.createElement("div");
home.classList.add("home");
home.id = "home";

const titleH1 = document.createElement("h1");
titleH1.textContent = "Verdana";
titleH1.classList.add("title");


const mainImage = document.createElement("img");
mainImage.src = restaurantImg;
mainImage.alt = "Restaurant";
mainImage.classList.add("main-image");

const resevationButton = document.createElement("button");
resevationButton.textContent ="Réserver";
resevationButton.classList.add("button-primary");


const pAdress = document.createElement("p");
pAdress.textContent = "3 Rue Saint-Rustique, 75018 Paris"
pAdress.classList.add("adress");



content.appendChild(home);
home.appendChild(mainImage);
home.appendChild(titleH1);
home.appendChild(pAdress);
home.appendChild(resevationButton);





story();
menu();
footer();


const homeBtn = document.querySelector(".button-home");
const histoireBtn = document.querySelector(".button-histoire");
const menuBtn = document.querySelector(".button-menu");
const horairesBtn = document.querySelector(".button-horaires");

homeBtn.addEventListener("click", () => {
    document.getElementById("home").scrollIntoView({behavior: "smooth"});
});

histoireBtn.addEventListener("click", () => {
    document.getElementById("story").scrollIntoView({behavior: "smooth"});
});

menuBtn.addEventListener("click", () => {
    document.getElementById("menu").scrollIntoView({behavior: "smooth"});
});

horairesBtn.addEventListener("click", () => {
    document.getElementById("footer").scrollIntoView({behavior: "smooth"});
});