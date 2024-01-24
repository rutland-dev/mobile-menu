import "./style.css";
import buildUI from "./DOM";

const pageList = [
    {
        name: "Classes",
        page: "page-1",
    },
    {
        name: "About",
        page: "page-2",
    },
];

const pageOneCardList = [
    {
        name: "Algebra",
        subject: "Math",
        content: "You're gonna use this plenty. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id mi orci. Cras."
    },
    {
        name: "World War 2",
        subject: "History",
        content: "This one sucks big time. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id mi orci. Cras."
    },
    {
        name: "Cell Structure",
        subject: "Biology",
        content: "Good to know. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id mi orci. Cras."
    },
    {
        name: "The Hobbit",
        subject: "English",
        content: "Some classic fantasy literature. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id mi orci. Cras."
    },
];

const pageTwoContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

buildUI(pageOneCardList, pageTwoContent, pageList);
