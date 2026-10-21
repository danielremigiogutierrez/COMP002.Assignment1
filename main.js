const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
    buttonA.textContent = "Keep clicking!";
    headingA.textContent = `${count} clicks!`;
    count += 1;
};
