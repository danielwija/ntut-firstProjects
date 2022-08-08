console.log("Hello World!");

let textHTML = document.getElementById("text");
let imgHTML = document.getElementById("helloImg");

textHTML.innerHTML =  "Hello World!";


let textColor = "blue";
const onClickText = () => {
    if (textColor == "blue") {
        textColor = "red";
        textHTML.classList.remove("blue");
        textHTML.classList.add("red");
    } else {
        textColor = "blue";
        textHTML.classList.remove("red");
        textHTML.classList.add("blue");
    }
}

let show = false;
imgHTML.classList.add(show);
const showImage = () => {
    if (show) {
        //turn to none
        show = false;
        console.log("turn to none");
        imgHTML.classList.remove("block");
        imgHTML.classList.add("none");
    } else {
        //turn to show
        show = true;
        imgHTML.classList.remove("none");
        imgHTML.classList.add("block");
    }
}