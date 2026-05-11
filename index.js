const paragraph = document.getElementById("parag1");
const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");

button1.addEventListener("click", () => {
    alert("Welcome to IT10");
});

button2.addEventListener("dblclick", () => {
    paragraph.style.color = "red";
});