import "./style.css";
import restaurantImg from './restaurant.webp';
import story from "./history.js";

story();

const content = document.getElementById("content");


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








content.appendChild(mainImage);
content.appendChild(titleH1);
content.appendChild(resevationButton);





