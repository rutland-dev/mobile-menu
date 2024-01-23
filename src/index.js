import "./style.css";
import buildUI from "./DOM";

const cardList = [
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

buildUI(cardList);