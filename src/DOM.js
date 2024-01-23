import "./style.css";

function buildHeader() {
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header-div");
    
    const headerText = document.createElement("h1");
    headerText.classList.add("header-text");
    headerText.textContent = "Mobile Menu";
    headerDiv.appendChild(headerText);

    return headerDiv;
}

function buildPageOne(cardList) {
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content-div");

    cardList.forEach(card => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card-div");
        contentDiv.appendChild(cardDiv);

        const cardTitle = document.createElement("h2");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = card.name;
        cardDiv.appendChild(cardTitle);

        const cardSubject = document.createElement("h3");
        cardSubject.classList.add("card-subject");
        cardSubject.textContent = card.subject;
        cardDiv.appendChild(cardSubject);

        const cardContent = document.createElement("p");
        cardContent.classList.add("card-content");
        cardContent.textContent = card.content;
        cardDiv.appendChild(cardContent);
    });

    return contentDiv;
}

export default function buildUI(cardList) {
    const {body} = document;

    const headerDiv = buildHeader();
    body.appendChild(headerDiv);

    const pageOneContent = buildPageOne(cardList);
    body.appendChild(pageOneContent);
}
