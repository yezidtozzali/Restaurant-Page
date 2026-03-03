const content = document.getElementById("content");

export default function footer(){
    const footerDiv = document.createElement("div");
    footerDiv.classList.add("footer");
    footerDiv.id = "footer";

    const adressFooter = document.createElement("p");
    adressFooter.classList.add("pfooter");
    adressFooter.textContent ="3 Rue Saint-Rustique, 75018 Paris"

    const h2Footer = document.createElement("h2");
    h2Footer.textContent = "Verdana";

    const pHoraires = document.createElement("p");
    pHoraires.classList.add("pfooter");
    pHoraires.textContent = "Ouvert du mardi au samedi\n\n12:00 - 14:00 le midi\n\n19:00 - 22:00 le soir"

    content.appendChild(footerDiv);
    footerDiv.appendChild(adressFooter);
    footerDiv.appendChild(h2Footer);
    footerDiv.appendChild(pHoraires);
}