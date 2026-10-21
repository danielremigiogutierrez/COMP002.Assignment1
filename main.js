const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 2;

buttonA.onclick = () => {
    buttonA.textContent = "Keep clicking!";
    headingA.textContent = `${count} clicks!`;
    count += 2;
};
