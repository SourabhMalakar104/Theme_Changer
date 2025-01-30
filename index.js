const buttons = document.querySelectorAll("button"); // Select all buttons
let body = document.querySelector("body");

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        console.log(e.target);

        if (e.target.className===("red")) {
            body.style.backgroundColor = "red";
        } else if (e.target.className===("blue")) {
            body.style.backgroundColor = "blue";
        } else if (e.target.className===("green")) {
            body.style.backgroundColor = "green";
        }
        else if (e.target.className===("black")) {
            body.style.backgroundColor = "black";
        }
    });
});
