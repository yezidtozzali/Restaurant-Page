import imgMenu from "./imagee.jpeg";
const content = document.getElementById("content");


export default function menu(){

    const divMenu = document.createElement("div");
    divMenu.classList.add("menu");
    divMenu.id = "menu";


    const divMenuText = document.createElement("div");
    divMenuText.classList.add("menu-div");
    const menuH2 = document.createElement("h2");
    menuH2.textContent = "Menu";

    

    const imageMenu = document.createElement("img");
    imageMenu.src = imgMenu;
    imageMenu.alt = "Menu"
    imageMenu.classList.add("menu-image");

    const menuList = document.createElement("div");
    menuList.innerHTML =
    `<h3>Entrées:</h3>
    <ul>
        <li><span>Tartare de tomates vertes, huile de basilic, fleur de sel</span><span>14€</span></li>
        <li><span>Velouté de petits pois, crème de menthe fraîche</span><span>11€</span></li>
        <li><span>Salade de haricots verts, vinaigrette au citron confit</span><span>12€</span></li>
    </ul>
    <h3>Plats:</h3>
    <ul>
        <li><span>Tian de légumes du soleil, coulis de tomate verte</span><span>22€</span></li>
        <li><span>Risotto aux herbes sauvages, parmesan végétal</span><span>24€</span></li>
        <li><span>Curry de pois chiches, lait de coco, coriandre fraîche</span><span>20€</span></li>

    </ul>
    <h3>Desserts:</h3>
    <ul>
        <li><span>Sorbet basilic, éclats de pistache</span><span>9€</span></li>
        <li><span>Panna cotta végétale, compotée de fruits verts</span><span>10€</span></li>
        <li><span>Tarte fine aux pommes vertes, caramel au thym</span><span>11€</span></li>
    </ul>`;


    content.appendChild(divMenu);
    divMenu.appendChild(divMenuText);
    divMenu.appendChild(imageMenu);
    divMenuText.appendChild(menuH2);
    divMenuText.appendChild(menuList);
    


}