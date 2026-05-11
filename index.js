const paragraph = document.getElementById("parag1");
const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");

// Click event for Alert Me button
button1.addEventListener("click", () => {
    alert("Button 1 triggered");
});

// Double click event for Change Color button
button2.addEventListener("dblclick", () => {
    paragraph.style.color = "red";
});