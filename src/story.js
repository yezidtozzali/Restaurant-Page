import storyImg from "./story.webp";
const content = document.getElementById("content");

export default function story() {
    const divStory = document.createElement("div");
    divStory.classList.add("story");
    divStory.id = "story";

    const storyImage = document.createElement("img");
    storyImage.src = storyImg;
    storyImage.alt = "Story";
    storyImage.classList.add("story-image");

    const storyText = document.createElement("div");
    storyText.classList.add("divtext");
    const storyH2 = document.createElement("h2");
    storyH2.textContent = "Le restaurant";

    const pStory = document.createElement("p");
    pStory.classList.add("pstory");
    pStory.textContent = `Verdana est né d'une passion simple : montrer que manger végétarien peut être une expérience gastronomique à part entière.\n\n
Fondé en 2019 dans une ancienne riad, notre restaurant puise son inspiration dans les jardins méditerranéens et les marchés locaux. Chaque plat est une célébration des légumes de saison, travaillés avec respect et créativité.\n\n
Ici, pas de compromis — juste des saveurs vraies, une atmosphère chaleureuse, et une table où il fait bon s'attarder.`

    const resevationButtonStory = document.createElement("button");
    resevationButtonStory.textContent ="Voir les menus";
    resevationButtonStory.classList.add("button-reservation");

    

    content.appendChild(divStory);
    divStory.appendChild(storyImage);
    divStory.appendChild(storyText);
    storyText.appendChild(storyH2);
    storyText.appendChild(pStory);
    storyText.appendChild(resevationButtonStory);
    
}

