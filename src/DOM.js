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
    const pageOneContainer = document.createElement("div");
    pageOneContainer.classList.add("visible");
    pageOneContainer.setAttribute("id", "page-1");

    const pageOneContentDiv = document.createElement("div");
    pageOneContentDiv.classList.add("content-div");
    pageOneContainer.appendChild(pageOneContentDiv);

    cardList.forEach(card => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card-div");
        pageOneContentDiv.appendChild(cardDiv);

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

    return pageOneContainer;
}

function buildPageTwo(pageTwoContent) {
    const pageTwoContainer = document.createElement("div");
    pageTwoContainer.classList.add("visible");
    pageTwoContainer.setAttribute("id", "page-2");

    const pageTwoContentDiv = document.createElement("div");
    pageTwoContentDiv.classList.add("content-div");
    pageTwoContainer.appendChild(pageTwoContentDiv);

    const pageTwoTitle = document.createElement("h1");
    pageTwoTitle.textContent = "About Section";
    pageTwoContentDiv.appendChild(pageTwoTitle);

    const pageTwoContentText = document.createElement("p");
    pageTwoContentText.textContent = pageTwoContent;

    pageTwoContentDiv.appendChild(pageTwoContentText);

    return pageTwoContainer;
}

function buildNavBar(pageList) {
    const navBarDiv = document.createElement("div");
    navBarDiv.classList.add("nav-bar-div");

    pageList.forEach(page => {
        const pageButton = document.createElement("button");
        pageButton.setAttribute("type", "button");
        pageButton.classList.add("page-button");
        pageButton.classList.add("page-button-not-clicked");
        pageButton.setAttribute("id", `${page.page}-button`);
        navBarDiv.appendChild(pageButton);
        
        pageButton.addEventListener("click", () => {
            pageList.forEach(secondaryPage => {
                if (page.page === secondaryPage.page) {
                    document.querySelector(`#${page.page}`).classList.remove("hidden");
                    document.querySelector(`#${page.page}-button`).classList.remove("page-button-not-clicked");
                } else {
                    const thisSecondaryPage = document.querySelector(`#${secondaryPage.page}`);
                    const thisButton = document.querySelector(`#${secondaryPage.page}-button`);
                    if (!thisSecondaryPage.classList.contains("hidden")) {
                        thisSecondaryPage.classList.add("hidden");
                    }
                    if (!thisButton.classList.contains("page-button-not-clicked")) {
                        thisButton.classList.add("page-button-not-clicked");
                    }
                }
            });
        });
    });

    return navBarDiv;
}

export default function buildUI(pageOneCardList, pageTwoContent, pageList) {
    const {body} = document;

    const headerDiv = buildHeader();
    body.appendChild(headerDiv);

    const pageOneContainer = buildPageOne(pageOneCardList);
    body.appendChild(pageOneContainer);

    const pageTwoContainer = buildPageTwo(pageTwoContent);
    body.appendChild(pageTwoContainer);

    const navBarDiv = buildNavBar(pageList);
    body.appendChild(navBarDiv);

    document.querySelector("#page-1-button").click();
}

